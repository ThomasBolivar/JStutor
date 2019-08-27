function* generatorSequence(){
    yield "Hello";
    yield "World";
    return "Something";
}

let generator = generatorSequence();


for (let value of generator){
    console.log(value);

}