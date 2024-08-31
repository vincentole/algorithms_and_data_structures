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

decode :: proc(str: string) -> []string {
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

	append(&output, utf8.runes_to_string(current_str[:]))

	return output[:]
}

@(test)
encode_decode_test :: proc(t: ^testing.T) {
	defer free_all(context.allocator)

	inputs := [][]string {
		{"4)$", "k4", "##23", "$#d"},
		{"#234ds", "dak2#}/}/", "23aY#sd23#ff", "j3k2a#}k"},
	}

	for input in inputs {
		encoded := encode(input)
		decoded := decode(encoded)

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


}
