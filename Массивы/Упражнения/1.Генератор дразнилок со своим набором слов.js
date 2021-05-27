var word1 = ["Hello", "Good buy", "HZ"];
var word2 = ["Perec", "Ygol", "Morkovka", "Pomidor"];
var word3 = ["Noc", "Ulica", "Fonar", "Apteka"];
var word1sel = word1[Math.floor(Math.random()*word1.length)];
var word2sel = word2[Math.floor(Math.random()*word2.length)];
var word3sel = word3[Math.floor(Math.random()*word3.length)];
var phraze = ["first word is", word1sel, "Second word is", word2sel, "Third word is", word3sel+"!!!"].join(" ");
phraze;