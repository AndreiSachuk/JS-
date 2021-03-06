/*Методы unshift и shift добавляют и удаляют элементы с начала
массива — так же как push и pop добавляют и удаляют элементы с конца.*/

/*Убрать из массива последний элемент можно, добавив к его имени
.pop(). Метод pop делает сразу два дела: удаляет последний элемент
из массива и возвращает этот элемент в виде значения.*/
var animals = ["Кот", "Собака", "Петух"];
var lastAnimal = animals.pop();  //При вызове animals.pop() в строке последний элемент массива animals, был возвращен и сохранен в переменной lastAnimal.
lastAnimal;//вывели эту переменную
animals;//вывели текущий массив
animals.pop();//просто удалили последний элемент
animals;//вывели текущий массив
animals.unshift(lastAnimal);//Вставили в начало значение переменной lastAnimal
animals;//вывели текущий массив

/*Методы push и pop хорошо друг друга дополняют, поскольку порой
нужно работать только с концом массива. Вы можете добавить элемент
в конец вызовом push, а потом, когда это понадобится, забрать его оттуда
вызовом pop.*/

/*Чтобы удалить из массива первый элемент, вернув его значение,
используйте .shift():*/

animals;
var firstAnimal = animals.shift();
firstAnimal;
animals;
