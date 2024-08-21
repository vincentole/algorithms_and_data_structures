package main

import "core:fmt"
import "core:log"
import "core:strings"
import "core:testing"

longest_common_prefix :: proc(strs: []string, allocator := context.allocator) -> string {
	prefix := ""

	if len(strs) == 0 {
		return prefix
	}

	for prefix_char, i in strs[0] {
		for str in strs {
			if str[i] != u8(prefix_char) {
				return prefix
			}
		}

		prefix = strings.concatenate([]string{prefix, string([]u8{u8(prefix_char)})}, allocator)
	}

	return prefix
}

@(test)
longest_common_prefix_test :: proc(t: ^testing.T) {
	inputs := [][]string{{"flower", "flow", "flight"}, {"dog", "racecar", "car"}, {"", ""}, {}}
	outputs := []string{"fl", "", "", ""}

	for _, i in inputs {
		output := longest_common_prefix(inputs[i], context.temp_allocator)
		testing.expect_value(t, output, outputs[i])

		free_all(context.temp_allocator)
	}

}
