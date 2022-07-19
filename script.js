// The Fetch API-->it is nothing but a promise,it is always successfull when it run


// const url="https://623bf4808e9af58789499ff0.mockapi.io/suman/friends";

// let data=fetch(url);
// console.log(data)


//The traditional way to use fetch() API using async & await

async function Suman(url){
    let data=await fetch(url)
    if(data.ok){
        return data.json();

    }else{
        return data.status;
    }
}

let guvi=Suman(url);

guvi.then (function(value){
console.log(JSON.stringify(value));
})
 .catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("the fetch() API ran successfully!")
})



//the modern way of using fetch() api

// fetch(url)
// .then((response)=>response.json())
// .then((data)=>console.log(JSON.stringify(data)));

// ------------------------------------------------

// Class Task
// An url has given to u in the chatox.Use the fetch api to fetch all data from JSON server nd display the content using dynamic Javascript DOM manupulation technnique.
// all your data should be created using dynamic DOM and the data shou;d be displayed inside a tabe when a button is pressed!

// you can use HTML,CSS,JavaScript for your task


const url="https://623bf4808e9af58789499ff0.mockapi.io/suman/friends"

document.getElementById("btn1").addEventListener("click",function(){
    document.write("Ayush Tiwari")
})

fetch(url)
.then((response)=>response.json())
.then((data)=>console.log(JSON.stringify(data)));

// document.getElementById("btn1").addEventListener("click",function(){
//     1.fetch the api
//     2.fetch all the indivisual data
//     3.create the table and images inside it dynamically using DOM
// })



//how to save or add  the data

const img_link="any image link"
// data to be inserted using fetch
const data={
    first_name:"Ayush",
    last_name:"Tiwari",
    location:"hoshangabad",
    image:img_link,
};

fetch(url,{
    method:"POST",
    header:{
        "content-Type":"application/json",
    },
    body:JSON.Stringyfy(data),
}).then((data)=>{
    console.log("success",data)
}).catch((error)=>{
    console.log("error",error)
})