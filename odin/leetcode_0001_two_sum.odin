package main

import "core:fmt"
import "core:log"
import "core:testing"

// Tags: Array, Hash Table
two_sum :: proc(nums: []int, target: int, output: ^[2]int) {
	m := map[int]int{}
	defer delete(m)

	for num, i in nums {
		complement := target - num
		index, ok := m[complement]
		if ok {
			output^ = [2]int{index, i}
			return
		}

		m[num] = i
	}
}


@(test)
two_sum_test :: proc(t: ^testing.T) {
	nums := [][]int{{2, 7, 11, 15}, {3, 2, 4}, {3, 3}}
	targets := []int{9, 6, 6}
	outputs := [][2]int{{0, 1}, {1, 2}, {0, 1}}

	for _, i in nums {
		output := [2]int{}
		two_sum(nums[i], targets[i], &output)
		testing.expect_value(t, output, outputs[i])
	}

}
