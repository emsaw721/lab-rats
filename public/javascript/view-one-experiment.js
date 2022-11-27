



async function viewLabHandler(event) {
    event.preventDefault();
  
 
    const title = document.querySelector('#experimenttitle').getAttribute('data-title');
    const purpose = document.querySelector('#purpose-lab').getAttribute('data-purp');
    const background = document.querySelector('#bg-lab').getAttribute('data-bg');
    const protocols = document.querySelector('#protocols-lab').getAttribute('data-prot');
    const observations = document.querySelector('#obs-lab').getAttribute('data-obs');
    const analysis = document.querySelector('#analysis-lab').getAttribute('data-analysis');
  
  const experimentid = document.querySelector('#experimentid').getAttribute('data-id'); 
  const projectid = document.querySelector('#notebookid').getAttribute('data-note'); 
  
    const response = await fetch(`/api/projects/${projectid}/experiments/${experimentid}`, {
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
  
    //document.querySelector('#experiment-lab-link').addEventListener('click', viewLabHandler);
    