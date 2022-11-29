

async function deleteAttachmentHandler(event) {
    event.preventDefault();

    const projectid = document.querySelector('#projectid').getAttribute('data-idproj'); 
    const experimentid = document.querySelector('#experimentid').getAttribute('data-idlab'); 
    const id = document.querySelector('#attachmentid').getAttribute('data-idattach'); 
    console.log(id)

    const response = await fetch(`/api/projects/${projectid}/experiments/${experimentid}/fileupload/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        window.location.href = `/project/${projectid}/experiment/${experimentid}/fileupload`;
    } else {
        alert(response.statusText);
    }
};

// document.querySelector('.deleteattach-btn').addEventListener('click', deleteAttachmentHandler); 
