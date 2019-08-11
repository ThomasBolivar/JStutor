// to declare generator function you have to paste * after function


/**  whenever * is after function, it has new method (yield)*/
function* numberGen(n=10){
    for(let i =0; i<n;i++){
        yield i;
    }
}

const num = numberGen();