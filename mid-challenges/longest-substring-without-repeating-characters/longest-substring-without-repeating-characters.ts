function lengthOfLongestSubstring(s: string): number {
    let substring: string = "";
    let maxLenght: number = 0;
    if (s.length == 0) return 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (!substring.includes(s[j])) {
                substring = substring + s[j];
                if (substring.length >= maxLenght) maxLenght = substring.length;
            } else {
                substring = "";
                break;
            }
        }
    }

    console.log(maxLenght);
    return maxLenght;
};

lengthOfLongestSubstring("pwwkew");