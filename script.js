function countVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  
  for (var i = 0; i < string.length; i++) {
    var char = string[i].toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}
