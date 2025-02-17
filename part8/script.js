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



// Example 6
document.getElementById("clickMeButton").addEventListener("click", function() {
    alert("Clicked");
})

// document.getElementById("clickMeButton").addEventListener("dblclick", function() {
//     alert("Clicked");
// })

// document.getElementById("clickMeButton").addEventListener("mouseover", function() {
//     alert("Clicked");
// })

// document.getElementById("clickMeButton").addEventListener("mouseenter", function() {
//     alert("Clicked");
// })

// document.getElementById("clickMeButton").addEventListener("mouseleave", function() {
//     alert("Clicked");
// })



// Example 7
let elee = document.getElementById("teaList");
console.log(elee);

document.getElementById("teaList").addEventListener("click", function(event) {
    let clickedTeaElement = event.target
    // console.log(clickedTeaElement);
    // console.log(event.target.matches(".teaItem"));
    


    let clickedTea = clickedTeaElement.textContent 
    // console.log(clickedTea);

    // for safety reasons we are checking this condition because in future there might be some other teas that contains different classes
    if(clickedTeaElement && clickedTeaElement.matches(".teaItem")) {
        alert(`${clickedTea} is clicked`)
    }

})





// Example 8
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // console.log(event);

    let ourInput = document.getElementById("feedbackInput");
    // console.log(ourInput);
    // console.log(ourInput.value);


    document.getElementById("feedbackDisplay").textContent = `Feedback is : ${ourInput.value}`;
    

    

    // alert("form submitted");
})

// Example 9
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("domStatus").textContent = "DOM Loaded Successfully";
})



// Example 10
document.getElementById("toggleHighlight").addEventListener("click", function() {

    // console.log(document.getElementById("descriptionText").classList)
    // document.getElementById("descriptionText").classList.add("highlight")
    document.getElementById("descriptionText").classList.toggle("highlight")

    // below is my hit and trial
    // let check = document.getElementById("descriptionText").className;
    // console.log(check);

    // NOTE : toggle means : ex : dark and light theme ka jo toggle button hota hai uska kya work hota hai ki agr dark theme hai too usko light krdo and light theme hai too usko dark krdo. IN SIMILAR FASHION agr yaha `class` `highlight` lagi hue hai too usko hatado and agr nhi hai too lagado
    
    
})