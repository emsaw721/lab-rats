

const npt = require('node-periodic-table'); 


async function searchElementHandler(event) {
    event.preventDefault();
    const element = document.querySelector('input[id="elementsearch"]').value.trim();
    console.log(element); 
    
    console.log(npt.getByName(`${element}`)); 

};

var elementsearch = document.getElementById("elementsearch");

elementsearch.addEventListener("keydown", searchElementHandler); 

// var elementsearch = document.getElementById("elementsearch");
// elementsearch.addEventListener("keydown", function (e) {
//     if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
//         validate(e);
//     }
// });

// function validate(e) {
//     var text = e.target.value;
//     //validation of the input...
// }
