function recursionExample (a){
   var counter =a;
   if (counter > 5){
       return;
   }
   else{
       console.log('Counting', counter);
   }
    return recursionExample(++counter);
}

recursionExample(1);