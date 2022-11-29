async function deleteFile(id) {
    
    const projectId = document.querySelector('#notebookid').getAttribute('data-id');
    const experimentId = document.querySelector('#experimentid').getAttribute('data-id')

   
    const response = await fetch(`/api/projects/${projectId}/experiments/${experimentId}/fileupload/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        window.location.href = `/project/experiment/${experimentId}`;
    } else {
        alert(response.statusText);
    }
};


