package main

import "core:testing"

contains_duplicates :: proc(nums: []int) -> bool {

	m := make(map[int]struct {})
	defer delete(m)

	for num in nums {
		ok := num in m
		if ok {
			return true
		}

		m[num] = struct {}{}
	}

	return false
}


TestData :: struct {
	input:  []int,
	output: bool,
}

@(test)
contains_duplicates_test :: proc(t: ^testing.T) {
	test_data := [4]TestData {
		TestData{input = []int{1, 2, 3, 1}, output = true},
		TestData{input = []int{1, 1, 1, 3, 3, 4, 3, 2, 5, 2}, output = true},
		TestData{input = []int{1, 2, 4, 5}, output = false},
		TestData{input = []int{1, 11, 111}, output = false},
	}

	for test in test_data {
		value := contains_duplicates(test.input)
		expected := test.output
		testing.expect_value(t, value, expected)
	}
}
