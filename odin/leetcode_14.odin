package main

import "core:fmt"
import "core:log"
import "core:strings"
import "core:testing"

// Tags: String, Trie
// Todo: Fix memory leak due to strings.concatenate
// Todo: Check out of bounds error
longest_common_prefix :: proc(strs: []string) -> string {
	prefix := ""

	i := 0
	for {
		prefix_char := strs[0][i]

		for str in strs {
			if str[i] != prefix_char {

				return prefix
			}
		}

		prefix = strings.concatenate([]string{prefix, string([]u8{prefix_char})})

		i += 1
	}

	return ""
}

@(test)
longest_common_prefix_test :: proc(t: ^testing.T) {
	// Case 1
	inputs := [][]string{{"flower", "flow", "flight"}, {"dog", "racecar", "car"}}

	outputs := []string{"fl", ""}

	for _, i in inputs {
		log.infof("Testing input: %v", inputs[i])

		output := longest_common_prefix(inputs[i])

		testing.expect_value(t, output, outputs[i])


	}

}
