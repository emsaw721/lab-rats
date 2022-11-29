

async function viewAttachment(event) {
   

    const projectid = document.querySelector('#projectid').getAttribute('data-idproj'); 
    const experimentid = document.querySelector('#experimentid').getAttribute('data-idlab'); 
    const attachment = document.querySelector('.attachmentlink').getAttribute('href'); 

    console.log(projectid)
    console.log(experimentid)
    console.log(attachment)
    const response = await fetch(`/api/projects/${projectid}/experiments/${experimentid}/fileupload`, {
        method: 'GET',
        body: JSON.stringify({
            attachment
        }),
        headers: {
            'Content-Type': 'application/pdf'
        }
    }); 

    if(response.ok) {
        document.location.replace('/single-lab-post'); 
    } else {
        alert(response.statusText);
    }

}