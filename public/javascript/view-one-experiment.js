



async function viewLabHandler(event) {
    event.preventDefault();
  
 
    const title = document.querySelector('#title-lab');
    const purpose = document.querySelector('#purpose-lab');
    const background = document.querySelector('#bg-lab');
    const protocols = document.querySelector('#protocols-lab');
    const observations = document.querySelector('#obs-lab');
    const analysis = document.querySelector('#analysis-lab');
  
  const experimentid = window.location.href
  console.log(experimentid)
  
    const response = await fetch(`${experimentid}`, {
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
      document.location.replace('/experiment-list');
    } else {
      alert(response.statusText);
    }
  }
  
    document.querySelector('#experiment-lab-link').addEventListener('click', viewLabHandler);
    