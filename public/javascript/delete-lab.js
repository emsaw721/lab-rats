
// go to edit-lab.handlebars for issues 
async function deleteLabHandler(event) {
    event.preventDefault();
   
    experimentid = document.querySelector('#lab-id').getAttribute('data-id'); 
    console.log(experimentid)

    projectid = document.querySelector('#project-id').getAttribute('data-id'); 
    console.log(projectid)

    const response = await fetch(`/api/projects/${projectid}/experiments/${experimentid}`, {
        method: 'DELETE'
    });

    if(response.ok) {
        window.location.reload();
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.delete-lab-btn').addEventListener('click', deleteLabHandler); 