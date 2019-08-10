function something(i){
    setTimeout(function(){
        console.log("Called "+ ++i + " times. "+"\nMessage: HELLO LAR");
    },i * 1000,i);
    console.log("Good morning!");

    something.counter++;
}
something.counter=0;

for(let i = 0; i<5;i++){
    something(i);
}
