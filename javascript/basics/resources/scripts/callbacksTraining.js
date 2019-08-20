function doHomeWork(subject,callback){
    console.log("FIRST " +`Im doing my ${subject} homework`);
    callback();
}
doHomeWork('math',function(){
    console.log("SECOND");
});
