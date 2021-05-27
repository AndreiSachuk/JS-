var randomBodyParts = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючий", "унылый", "дурацкий"];
var randomBodyPartsAnimals = ["глаз", "нос", "череп", "нога", "ухо"];
var randomAnimals = ["мухи", "коровы", "носорога", "жирафа", "утконоса"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomBodyPartsAnimal = randomBodyPartsAnimals[Math.floor(Math.random() * randomBodyPartsAnimals.length)];
var randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];

var randomInsult = ["У тебя", randomBodyPart, "еще более", randomAdjective+", чем", randomBodyPartsAnimal + " у", randomAnimal].join(" ");
randomInsult;