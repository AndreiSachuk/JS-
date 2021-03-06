/*Пускай у нас есть два списка — список
пушистых животных и список чешуйчатых
животных — и мы хотим их объединить. Если
поместить наших пушистых животных в мас-
сив furryAnimals, а чешуйчатых — в мас-
сив scalyAnimals, команда furryAnimals.
concat(scalyAnimals) создаст новый массив,
в начале которого будут элементы из первого мас-
сива, а в конце — из второго.*/

/*c помощью concat можно объединить больше чем два массива. Для этого
укажите дополнительные массивы в скобках, разделив их запятыми:*/

var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
var scalyAnimals = ["Удав", "Годзилла"];
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
furryAndScalyAnimals;
//["Альпака", "Кольцехвостый лемур", "Йети", "Удав", "Годзилла"]

var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
var scalyAnimals = ["Удав", "Годзилла"];
var featheredAnimals = ["Ара", "Додо"];
var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
allAnimals;
//["Альпака", "Кольцехвостый лемур", "Йети", "Удав", "Годзилла", "Ара", "Додо"]

/*
Мы видим, что пернатые животные из массива featheredAnimals
оказались в самом конце нового массива, поскольку featheredAnimals
был указан последним в скобках метода concat.*/

