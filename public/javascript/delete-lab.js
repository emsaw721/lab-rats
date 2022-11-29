
// go to edit-lab.handlebars for issues 
async function deleteLabHandler(event) {
    event.preventDefault();

    const project_id = document.querySelector('#edit-lab-form').getAttribute('data-id');
    const experiment_id = document.querySelector('#lab-id').getAttribute('data-id');

    const response = await fetch(`/api/projects/${project_id}/experiments/${experiment_id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        window.location.href = `/project/${project_id}`;
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.delete-lab-btn').addEventListener('click', deleteLabHandler); 
