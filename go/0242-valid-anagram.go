func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	values := make(map[rune]int)

	for _, char := range s {
		values[char] += 1
	}

	for _, char := range t {
		value, ok := values[char]
		if !ok || value == 0 {
			return false
		}

		values[char] -= 1
	}

	return true
}
