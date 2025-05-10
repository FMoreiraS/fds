let person = { name: "John", age: 35};
if(person.age > 20) {
    console.log(person["age"]);
}
let family = [{"name":"James", "age":35,},
              {"name":"Ane", "age":30},
              {"name":"John", "age":2}];
/* Num array, não podemos ter os índices nomeados, apenas as propriedades entre as chaves: 
do contrário, o array se torna um objeto.
Também é possível ter objetos em objetos */
let cars = {"r32":{"year":1989}, "r33":{"year":1993}, "r34":{"year":1998}};
console.log(family[2]);
console.log(cars.r32);
alert("Pop-up");
