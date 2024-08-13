func twoSum(nums []int, target int) []int {
	m := make(map[int]int)

	for i, num := range nums {
		complement := target - num

		j, ok := m[complement]
		if ok {
			return []int{i, j}
		}

		m[num] = i
	}

	return nil
}