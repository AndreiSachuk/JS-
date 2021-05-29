var fifthLetter = function (name) {
    if (name.length < 5) {
        return;
    }
    return "Пятая буква вашего имени: " + name[4] + ".";
};

fifthLetter("Hello");


var medalForScore = function (score) {
    if (score < 3) {
    return "Бронзовая";
    }
    if (score < 7) {
    return "Серебряная";
    }
    return "Золотая";
};