
// go to edit-lab.handlebars for issues 
async function editLabHandler(event) {
    event.preventDefault();
    
    const title = document.querySelector('input[name="lab-title"]').value.trim();
    const id = document.querySelector('#lab-id').setAttribute('data-id');
    const response = await fetch(`/api/labs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title}),
        headers: {'Content-Type': 'applicaton/json'}
    });

    if(response.ok) {
        document.location.replace('/notebook')
    } else {
        alert(response.statusText); 
    }
};

document.querySelector('.edit-lab-form').addEventListener('submit', editLabHandler); 