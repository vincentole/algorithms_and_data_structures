package main

import "core:fmt"
import "core:log"
import "core:testing"

// Tags: Array, Hash Table
two_sum :: proc(inputs: []int, target: int, output: ^[2]int) {
	m := map[int]int{}
	defer delete(m)
	
	for input, i in inputs {
		complement := target - input
		index, ok := m[complement]
		if ok {
			output^ = [2]int{index, i}
			return 
		}

		m[input] = i
	}
}

@(test)
two_sum_test :: proc(t: ^testing.T) {
	// Case 1
	inputs := [][]int {
		{2, 7, 11, 15},
		{3, 2, 4},
		{3, 3},
	}
	targets := []int {
		9,
		6,
		6
	}
	outputs := [][2]int{
		{0, 1},
		{1, 2},
		{0, 1}
	}

	for _, i in inputs {
		log.infof("Testing input: %v", inputs[i])

		output := [2]int{}
		two_sum(inputs[i], targets[i], &output)
		testing.expect_value(t, output, outputs[i])
	}

}
