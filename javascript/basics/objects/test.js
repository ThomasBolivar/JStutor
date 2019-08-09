let user = {
    firstName : "Denis",
    lastName : "Lashtur",
    age : 23,
    isAdmin : true
};

alert("User " + user.firstName + " " + user.lastName + "\n" + user.age + " yers old" + " Is he admin? " + user.isAdmin );
delete user.lastName
alert("User " + user.firstName + " " + user.lastName + "\n" + user.age + " yers old" + " Is he admin? " + user.isAdmin );

function userAddGender(){
    return{
    gender : "male",
    } 
}
user = userAdditionInfoInsertion()