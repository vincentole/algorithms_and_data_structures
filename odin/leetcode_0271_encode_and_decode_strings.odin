package main

import "core:fmt"
import "core:log"
import "core:os"
import "core:strconv"
import "core:strings"
import "core:testing"
import "core:unicode/utf8"

encode :: proc(strs: []string) -> string {
	output := ""

	for str in strs {
		len := fmt.aprintf("%v", len(str))
		output = strings.concatenate([]string{output, len, "#", str})
	}

	return output
}

decode_1 :: proc(str: string) -> []string {
	if len(str) == 0 do return []string{}

	output := make([dynamic]string)

	i := 0
	for i < len(str) {
		// Find next '#'
		j := strings.index_rune(str[i:], '#')
		if j == -1 {
			fmt.panicf("Invalid encoded string. Missing delimiter '#'")
		}

		// Extract length
		length_str := str[i:i + j]
		curr_len, ok := strconv.parse_int(length_str)
		if !ok {
			fmt.panicf("Failed to convert: %v, to int", length_str)
		}

		// Move to start of current string
		i += j + 1

		// Extract current string
		if i + curr_len > len(str) {
			fmt.panicf("Invalid encoded string. Insufficient length")
		}

		substr := str[i:i + curr_len]
		append(&output, substr)

		i += curr_len
	}

	return output[:]
}

decode_2 :: proc(str: string) -> []string {
	if len(str) == 0 do return []string{}

	output := make([dynamic]string)

	current_str_prefix := [dynamic]rune{}
	current_str_counter := 0
	current_str := [dynamic]rune{}

	for char in str {
		if char == '#' && current_str_counter == 0 {
			prefix := utf8.runes_to_string(current_str_prefix[:])
			clear(&current_str_prefix)

			len, ok := strconv.parse_int(prefix)
			if !ok {
				fmt.panicf("Failed to convert: %v, to int", prefix)
			}

			current_str_counter = len
			if len == 0 {
				append(&output, "")
			}

			continue
		}

		if current_str_counter > 0 {
			append(&current_str, char)
			current_str_counter -= 1
			continue
		}

		if len(current_str) != 0 && current_str_counter == 0 {
			append(&output, utf8.runes_to_string(current_str[:]))
			clear(&current_str)
		}

		append(&current_str_prefix, char)
	}

	if len(current_str) != 0 {
		append(&output, utf8.runes_to_string(current_str[:]))
	}


	return output[:]
}

@(test)
encode_decode_test :: proc(t: ^testing.T) {
	defer free_all(context.allocator)

	inputs := [][]string {
		{"4)$", "k4", "##23", "$#d"},
		{"#234ds", "dak2#}/}/", "23aY#sd23#ff", "j3k2a#}k"},
		{"", ""},
		{"", "dk3#", ""},
	}

	for input in inputs {
		encoded := encode(input)
		decoded_1 := decode_1(encoded)
		decoded_2 := decode_2(encoded)

		test_expectation(t, input, decoded_1)
		test_expectation(t, input, decoded_2)
	}


}

test_expectation :: proc(t: ^testing.T, input, decoded: []string) {
	for str, i in input {
		if len(input) != len(decoded) {
			log.errorf(
				"Length of input: %v, and decoded output: %v, are not equal",
				input,
				decoded,
			)
			return
		}
		testing.expect_value(t, decoded[i], str)
	}
}
