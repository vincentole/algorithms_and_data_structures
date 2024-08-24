package main

import "core:fmt"
import "core:log"
import "core:testing"

is_anagram :: proc(s: string, t: string) -> bool {
	count :: int

	if len(s) == 0 || len(s) != len(t) {
		return false
	}

	m := make(map[rune]count)
	defer delete(m)

	for char in s {
		m[char] += 1
	}

	for char in t {
		m[char] -= 1
	}

	for _, count in m {
		if count != 0 {
			return false
		}
	}

	return true
}


@(test)
test_is_anagram :: proc(t: ^testing.T) {
	inputs := [][]string {
		[]string{"abc", "cba"},
		[]string{"xaaf", "faax"},
		[]string{"", ""},
		[]string{"a", "bbb"},
		[]string{"ab", "cd"},
	}

	outputs := []bool{true, true, false, false, false}

	for input, i in inputs {
		value := is_anagram(input[0], input[1])
		expected := outputs[i]
		testing.expect_value(t, value, expected)
	}

}
