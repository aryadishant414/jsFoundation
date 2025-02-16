// Example 1
document.getElementById("changeTextButton").addEventListener("click", function() {
    let paraa = document.getElementById("myParagraph");
    // console.log(paraa);
    paraa.textContent = "Paragraph changed"
    
});

// lets do some hit and trials on `Example 1`
// document.getElementById("changeTextButton").addEventListener("click", function() {
//     console.log(this);
// });

// document.getElementById("changeTextButton").addEventListener("click", () => {
//     console.log(this);  // if we are using arrow function and inside it if we are trying to access `this` then here this is pointing to `Global window object`. So it will not give us the `exact context` ki hamne kisko click kiya hai. SO ITS BETTER TO USE Normal Functions here like in just upper example we have done 
// });


// document.getElementById("changeTextButton").addEventListener("click", function() {
//     let paraa = document.getElementById("myParagraph");
//     // console.log(paraa.textContent);   // not read HTML it reads only plain text and shows hidden text also

//     // console.log(paraa.innerHTML);  // reads HTML, plain text and shows hidden text also

//     // console.log(paraa.innerText); // not reads HTML, only plain text is readable and can't read hidden text
    
// })



// Example 2
document.getElementById("highlightFirstCity").addEventListener("click", function() {
    let ulList = document.getElementById("citiesList");
    // console.log(ulList); //just to check
    // console.log(ulList.firstElementChild); //just to check

    // console.log(ulList.firstElementChild.classList);
    // console.log(ulList.firstElementChild.classList.value);

    ulList.firstElementChild.classList.add("highlight");
});



// Example 3
document.getElementById("changeOrder").addEventListener("click", function() {
    let previosOrder = document.getElementById("coffeeType");
    // console.log(previosOrder);

    previosOrder.textContent = "Espresso";

    //Although this challenge has been already done but lets do some hit and trials.
    previosOrder.style.backgroundColor = "purple";
    previosOrder.style.padding = "5px";

})



// Example 4
document.getElementById("addNewItem").addEventListener("click", function() {
    // Creating HTML `li` ELEMENT
    let newHtmlListElement = document.createElement("li");
    // console.log(newHtmlListElement);
    newHtmlListElement.textContent = "Eggs";
    // console.log(newHtmlListElement);

    // Now adding the created `li` element
    let shoppingList = document.getElementById("shoppingList");
    // console.log(shoppingList);

    shoppingList.appendChild(newHtmlListElement);
    
})



// Example 5
document.getElementById("removeLastTask").addEventListener("click", function() {
    let taskList = document.getElementById("taskList")
    // console.log(taskList);
    
    taskList.lastElementChild.remove();
})