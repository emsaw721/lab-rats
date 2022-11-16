async function newLabHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="notebook-title"]').value;
    const purpose = document.querySelector('input[name="lab-purpose"]').value;
    const background = document.querySelector('input[name="lab-background"]').value; 
    const protocols = document.querySelector('input[name="lab-protocols"]').value; 
    const observations = document.querySelector('input[name="lab-observations"]').value; 
    const analysis = document.querySelector('input[name="lab-analysis"]').value; 
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        purpose,
        background,
        protocols,
        observations,
        analysis
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/notebook');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-lab-post').addEventListener('submit', newLabHandler);
  