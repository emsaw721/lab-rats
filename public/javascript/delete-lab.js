
// go to edit-lab.handlebars for issues 
async function deleteLabHandler(event) {
    event.preventDefault();
   


    const response = await fetch(`api`, {
        method: 'DELETE'
    });

    if(response.ok) {
        window.location.reload();
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.delete-lab-btn').addEventListener('click', deleteLabHandler); 