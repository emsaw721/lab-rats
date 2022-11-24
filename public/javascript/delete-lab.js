
// go to edit-lab.handlebars for issues 
async function deleteLabHandler(event) {
    event.preventDefault();

    const projid= '{{project_id}}'; 
    const labid = document.querySelector('#lab-id').getAttribute('data-id');
    console.log(labid)
    console.log(projid)

    const response = await fetch(``, {
        method: 'DELETE'
    });

    if(response.ok) {
        document.location.replace('/experiment-list');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.delete-lab-btn').addEventListener('click', deleteLabHandler); 