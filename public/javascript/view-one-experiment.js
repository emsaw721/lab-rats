



async function viewLabsHandler(event) {
    event.preventDefault();
  
 
    const title = document.querySelector('input[name="lab-title"]').value;
    const purpose = document.querySelector('#lab-purpose').value;
    const background = document.querySelector('#lab-bg').value;
    const protocols = document.querySelector('#lab-protocols').value;
    const observations = document.querySelector('#lab-obs').value;
    const analysis = document.querySelector('#lab-analysis').value;
  
  const projectid = window.location.href
  console.log(projectid)
  
    const response = await fetch(`${projectid}/experiments/{{id}}`, {
      method: 'GET',
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
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
    document.querySelector('#experimentlab').addEventListener('click', viewLabsHandler);
    