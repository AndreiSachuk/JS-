var double = function(number){
    return number * 2;
}

double(3);
double(double(double(12)));
double(3) + double(12);

var RandomWord = function(words){
    return words[Math.floor(Math.random() * words.length)];
}

var randomWords = ["Привет", "Пока", "Как ты?"];

RandomWord(randomWords);

var randomBodyParts = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];

var string = "У тебя " + RandomWord(randomBodyParts) + " словно " + RandomWord(randomAdjectives) + " " + RandomWord(randomWords) + "!!!";
string;



var generatorOut = function(){
    var randomBodyParts = ["глаз", "нос", "череп"];
    var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
    var string = "У тебя " + RandomWord(randomBodyParts) + " словно " + RandomWord(randomAdjectives) + " " + RandomWord(randomWords) + "!!!";
    return string;
}