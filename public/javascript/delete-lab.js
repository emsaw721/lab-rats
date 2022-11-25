
// go to edit-lab.handlebars for issues 
async function deleteLabHandler(event) {
    event.preventDefault();
   
    const projectid = window.location.href
    console.log(projectid)

    const response = await fetch(projectid, {
        method: 'DELETE'
    });

    if(response.ok) {
        window.location.reload();
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.delete-lab-btn').addEventListener('click', deleteLabHandler); 