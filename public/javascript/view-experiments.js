


async function viewLabsHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('.experiment-link');
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch(`/api/projects/${id}/experiments`, {
      method: 'GET',
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
  
  document.querySelector('#experimentlab').addEventListener('click', viewLabsHandler);
  