// 5 saniye sonra konsola merhaba yazar
// setTimeout(()=>{
//     console.log("merhaba");
// },5000);

//******************************************************/
//her saniye merhaba yazdırır
// setInterval(()=> {
//     console.log("merhaba");
// });

// const merhabaDe = () => {
//     console.log("merhaba");
// };

// merhabaDe();

// parametreli fonksiyon
// const sayHi = (cb) => {
//     cb();
// };

// sayHi(() => {
//     console.log("hello");
// });
//************************************************************ */

import fetch from "node-fetch";
// fetch("https://jsonplaceholder.typicode.com/users").then((data)=>
//     console.log(data)
// ); 


//api den data döndüğü zaman data düşüyor data.json ile daha sonra alıp kullanılır
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=> data.json())
// .then((users)=> console.log(users));


//feth işlemi içinde başka bir fetch işlemi ilk fetch işlemi bittikten sonra yapılır
//
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=> data.json())
// .then((users)=> {
//     console.log("Users yüklendi",users);
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(data=>data.json())
//     .then(posts => console.log("postlar yüklendi",posts));
// });

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=> data.json())
// .then((users)=> {
//     console.log("Users yüklendi",users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(data=>data.json())
//     .then(posts => console.log("post yüklendi",posts));
// });


//iç içe fetch yapısı
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=> data.json())
// .then((users)=> {
//     console.log("Users yüklendi",users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data)=>data.json())
//     .then((posts) => {
//         console.log("post 1 yüklendi",posts)
     
//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//         .then((data)=>data.json())
//         .then((data) => console.log("post 2 yüklendi",data));
//     });    
// });

//await ifadasını koymazsak kod o satırda bekler ve json formatına çeviririz
// async function getData(){
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();
    
//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// }   

// getData();
    

//anonim fonksiyon oluşturma
// (()=> {
//     console.log("selam");
// })();


//async anonim fonksiyon
(async ()=> {
    const users = await (
                await fetch("https://jsonplaceholder.typicode.com/users")
            ).json();
        
            const post1 = await (
                await fetch("https://jsonplaceholder.typicode.com/posts/1")
            ).json();
            
            const post2 = await (
                await fetch("https://jsonplaceholder.typicode.com/posts/2")
            ).json();
        
            console.log("users", users);
            console.log("post1", post1);
            console.log("post2", post2);

})();