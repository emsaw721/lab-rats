
// go to edit-lab.handlebars for issues 
async function deleteLabHandler(event) {
    event.preventDefault();
    const projectid = window.location.href




    const response = await fetch(projectid, {
        method: 'DELETE'
    });

    if(response.ok) {
        window.location.reload();
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#edit-lab-form').addEventListener('click', deleteLabHandler); 