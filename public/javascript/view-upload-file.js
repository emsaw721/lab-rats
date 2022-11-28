

async function viewAttachment(event) {
    event.preventDefault(); 

    const experimentid = document.querySelector('#experimentid').getAttribute('data-id'); 
    const projectid = document.querySelector('#projectid').getAttribute('data-note'); 
    const attachment = document.querySelector('.view-pdf').getAttribute('href'); 

    const response = await fetch(`/api/projects/${projectid}/experiments/${experimentid}/fileupload`, {
        method: 'GET',
        body: JSON.stringify({
            attachment
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }); 

    if(response.ok) {
        document.location.replace('/single-lab-post'); 
    } else {
        alert(response.statusText);
    }

}