'use strict';


var user = {
  name :'John',
  description : function (){
      return 'User named '+ this.name;
  },
};

var functionFromUser = user.description.bind(user);

console.log(user.description());

console.log(functionFromUser());

