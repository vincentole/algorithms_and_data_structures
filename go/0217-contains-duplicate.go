func containsDuplicate(nums []int) bool {
	if len(nums) <= 1 {
		return false
	}

	m := make(map[int]struct{})

	for _, num := range nums {
		_, ok := m[num]
		if ok {
			return true
		}

		m[num] = struct{}{}
	}

	return false
}
