
// go to edit-lab.handlebars for issues 
async function deleteLabHandler(event) {
    event.preventDefault();

    const id = document.querySelector('#lab-id').getAttribute('data-id');

    const response = await fetch(`api/labs/${id}`, {
        method: 'DELETE'
    });

    if(response.ok) {
        document.location.replace('/notebook');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.delete-lab-btn').addEventListener('click', deleteLabHandler); 