const fn = () => {
    const obj1 = {name: "Bob"};
    let obj2 = {name: "John"};

    obj1.name = "Alex"; /*можна змінити, бо міняється об'єкт, а не посилання на нього*/
    obj2.name = "Charlie"; /* можна змінити як і об'єкт, так і посилання*/

    /*obj1 = { name: "Eve" }; помилка, бо obj1 - const*/
    obj2 = { name: "Eve" }; /*працює, бо obj2 - let*/
}

function createUser(name, city) {
    return { name, city };
}

console.dir(createUser("Marcus Aurelius", "Roma"))