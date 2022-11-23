
async function editFormHandler(event) {
   
    const title = document.querySelector('input[name="project-title"]').value.trim();
    const id = document.querySelector('#project-id').getAttribute('data-id');
    const response = await fetch(`/api/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('#edit-project-form').addEventListener('submit', editFormHandler);
  