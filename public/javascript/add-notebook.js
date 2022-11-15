async function newNotebookHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="notebook-title"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-notebook-form').addEventListener('submit', newNotebookHandler);
  