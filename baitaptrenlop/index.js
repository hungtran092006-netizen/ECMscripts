function varExample() {
    if (true) {
       var x = 10;  
    }
    console.log(x); 
}
varExample();

function constExample() {
    const PI=3.14;
    PI=3.15; 
    const person={
        name:"Alice",
    };
    person.name="Bob";
    console.log(person.name);         
}
constExample();