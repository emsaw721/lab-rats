
// go to edit-lab.handlebars for issues 
async function deleteLabHandler(event) {
    event.preventDefault();
   
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 2
      ];
    const response = await fetch(`/api/projects/${id}/experiments`, {
        method: 'DELETE'
    });

    if(response.ok) {
        window.location.reload();
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#edit-lab-form').addEventListener('click', deleteLabHandler); 