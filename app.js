//promises

// let promises = new Promise((resolve,reject)=>{
//     console.log("Promise executed.");
// });

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{console.log(dataId);
            resolve("Success");
            if(getNextData)
            {
            getNextData();
            }
        },10000);
    });
}


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