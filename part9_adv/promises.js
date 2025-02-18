function fetchData() {
    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            let success = true;
            // let success = false;

            if(success) {
                resolve("Data Fetched Successfully");
            } else {
                reject("Error Fetching data");
            }
        }, 3000);
    });
}

// let response = fetchData();
// console.log(response); //this is not the good way because at some places it can give us promise pending. 


// so see the perfect way below
fetchData()
    .then((data) => {
    console.log(data);
    
    })
    .catch((error) => {
        console.log(error);
    });


// Below example shows `Promise Chaining`
// fetchData()
//     .then((data) => {
//     console.log(data);
//     return data;
//     })
//     .then((dataa)=>{
//         console.log(dataa.toLowerCase());
//         return dataa;
//     })
//     .then((okyy) => {
//         console.log(okyy);
        
//     })
//     .catch((error) => {
//         console.log(error);
//         throw new Error("New error from first catch");  // This will throw a new error to trigger the second catch
//     }).catch((errr) => {
//         console.log("dishant");
//         console.log(errr);
        
//     })


