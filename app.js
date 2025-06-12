//promises

// const promises = ()=>
//     {
//     return new Promise((resolve,reject)=>{
//     console.log("Promise executed.");
//     //resolve("Success");
//     reject("Rejected");
// });
// };

// let newPromise = promises();
// newPromise.then(()=>{
//     console.log("Fulfilles");
// });
// newPromise.catch(()=>{
//     console.log("Error:");
// });

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{console.log(dataId);
//             resolve("Success");
//             if(getNextData)
//             {
//             getNextData();
//             }
//         },10000);
//     });
// }


// function getData(dataId,getNextData)
// {
//     setTimeout(()=>
//         {
//             console.log("data",dataId);
//             if(getNextData){
//                 getNextData();
//             }
//         }
//     ,2000);
// }
// getData(1,()=>{getData(2);});
// getData(3,()=>{getData(4);});

const url = "https://meowfacts.herokuapp.com/";
const fact=document.getElementById("Fact");
const button=document.getElementById("getFact");
const para1=document.createElement("p");
para1.setAttribute("id","para1");

button.addEventListener("click",getFact);
async function getFact() {

    try {
    let para2=document.getElementById("para2");
    if(para2)
    {
        para2.remove();
    }
    fact.prepend(para1);
    const response = await fetch(url);
    const data = await response.json();
    // fact.innerText=data.data[0];
    const text=data.data[0];
    // fact.innerText=text;
    para1.innerText="Loading....";
    setTimeout(()=>{
        fact.removeChild(para1);
        let para2=document.createElement("p");
        para2.setAttribute("id","para2");
        para2.innerText=text;
        fact.appendChild(para2);
    },2000);
    
    console.log(data.data[0]); 
    }
    catch(error)
    {
     console.log(error);
    }
}