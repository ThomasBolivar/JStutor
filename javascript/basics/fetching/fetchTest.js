const delay =ms=>{
        return new Promise(resolve => setTimeout(()=>resolve(),ms));    
     }

const url = 'https://jsonplaceholder.typicode.com/todos/';

async function fetchAsyncTodos(){
    console.log("Fetch started..");
    try{
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log('Data: ', data);
    }catch(e){
        console.error(e);
    }finally{
        console.log('Process finished');
    }
}
fetchAsyncTodos(); // cuz it's async it returns promise you can use .then




// const delay =ms=>{
//     return new Promise(resolve => setTimeout(()=>resolve(),ms));    
// }

// const uri = 'https://yotodo-app.herokuapp.com/api/users';

// let header = new Headers();

// header.append('Accept', "application/json");

// //creating base 64 encoded stream
// let encoded = window.btoa('username:password');
// let auth = 'Basic ' + encoded;
// header.append('Authorization', auth);
// console.log( auth );
// let req = new Request(uri,{
//     method:'GET',
//     headers: header,
//     credentials:'include',
//     mode: 'no-cors',
// });

// fetch(req)
//             .then( (response)=>{
//                 if(response.ok){
//                     return response.json();
//                 }else{
//                     throw new Error('BAD HTTP stuff');
//                 }
//             })
//             .then( (jsonData) =>{
//                 console.log(jsonData);
//                 p.textContent = JSON.stringify(jsonData, null, 4);
//             })
//             .catch( (err) =>{
//                 console.log('ERROR:', err.message);
//             });
        


// function fetchTodos(){
//     console.log("fetchDoto started")
//    return delay(2000).then(()=>{
//         return fetch(url);
//     }).then(response => response.json());
// }

// fetchTodos().then(data=>{
//     console.log('Data:',data);
// }).catch(e=>console.error(e));