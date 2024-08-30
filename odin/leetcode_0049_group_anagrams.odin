package main

import "core:log"
import "core:slice"
import "core:strings"
import "core:testing"

group_anagrams :: proc(strs: []string, allocator := context.allocator) -> [][]string {
	Count :: int

	m := make(map[[26]Count][dynamic]string)
	defer delete(m)

	for str in strs {

		counts := [26]Count{}

		for rune in str {
			counts[rune - 'a'] += 1
		}


		value, ok := &m[counts]
		if ok {
			append(value, str)
		} else {

			group := make([dynamic]string, 0, 1, allocator)
			append(&group, str)
			m[counts] = group
		}
	}

	output := make([dynamic][]string, 0, len(m), allocator)
	for _, value in m {
		append(&output, value[:])
	}

	return output[:]
}


@(test)
group_anagrams_test :: proc(t: ^testing.T) {
	inputs := [][]string{{"eat", "tea", "tan", "ate", "nat", "bat"}, {""}, {"a"}}
	outputs := [][][]string{{{"bat"}, {"nat", "tan"}, {"ate", "eat", "tea"}}, {{""}}, {{"a"}}}

	for input, i in inputs {
		value := group_anagrams(input)
		defer free_all(context.allocator)

		expected := outputs[i]

		testing.expectf(
			t,
			compare_output(value, expected),
			"\nexpected:\n%v\ngot:\n%v\n",
			expected,
			value,
		)

	}
}

compare_output :: proc(as: [][]string, bs: [][]string) -> bool {
	if len(as) != len(bs) {
		return false
	}

	sort_output :: proc(output: [][]string) {

		for str in output {
			slice.sort(str)
		}

		slice.sort_by(output, proc(x, y: []string) -> bool {
			x_str := strings.join(x, "", context.allocator)
			y_str := strings.join(y, "", context.allocator)

			return strings.compare(x_str, y_str) <= 0
		})
	}

	sort_output(as)
	sort_output(bs)

	for i in 0 ..< len(as) {
		if !slice.equal(as[i], bs[i]) {
			return false
		}
	}

	return true
}
