// This is a program that asks for a word from the user and then returns the number of vowels within said word.

function numberOfVowels(word) {
	
	const vowels = ["a", "e", "i", "o", "u"]; 
	let vowelsInWord = 0; // this keeps track of vowel matches identified.
	for (i = 0; i< word.length; i++) {
		for (let j = 0; j < vowels.length; j++) {
			if (vowels[j] === word[i]) {
				vowelsInWord ++;
			} //this checks each letter of the word against the vowel array to see if they match and then adds one to the tracker.
		}
	}
	console.log(vowelsInWord);
};

numberOfVowels(prompt('Beep boop. Enter a word, I will tell you how many letter are vowels.').toLowerCase());
