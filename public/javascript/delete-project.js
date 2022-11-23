


async function deleteProjectHandler(event) {
    const title = document.querySelector('input[name="project-title"]').value.trim();
    const id = document.querySelector('#notebook-id').getAttribute('data-id');
  
    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE'
    });

    if(response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
  }

  document.querySelector('.delete-post-btn').addEventListener('click', deleteProjectHandler); 