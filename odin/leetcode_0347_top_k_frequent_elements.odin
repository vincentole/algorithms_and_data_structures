package main

import "core:log"
import "core:slice"
import "core:testing"

top_k_frequent :: proc(nums: []int, k: int) -> []int {
	m := make(map[int]Count)
	defer delete(m)

	for num in nums {
		m[num] += 1
	}

	sorted_nums := make([][dynamic]int, len(nums) + 1)
	for num, count in m {
		append(&sorted_nums[count], num)
	}

	top_k := make([dynamic]int, 0, k)
	loop: #reverse for nums in sorted_nums {
		for num in nums {
			append(&top_k, num)
            if len(top_k) == k do break loop
		}
	}

	
	return top_k[:]
}

@(test)
top_k_frequent_test :: proc(t: ^testing.T) {
	nums := [][]int{{1, 1, 1, 2, 2, 3}, {1}}
	ks := []int{2, 1}
	outputs := [][]int{{1, 2}, {1}}


	for i in 0 ..< len(nums) {
		value := top_k_frequent(nums[i], ks[i])
		testing.expectf(
			t,
			compare_outputs(outputs[i], value),
			"expected: %v, got %v",
			outputs[i],
			value,
		)
	}

	free_all(context.allocator)
}

compare_outputs :: proc(a, b: []int) -> bool {
	if len(a) != len(b) {
		return false
	}

	slice.sort(a)
	slice.sort(b)

	for i in 0 ..< len(a) {
		if a[i] != b[i] do return false
	}

	return true
}
