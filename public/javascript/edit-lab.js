
// go to edit-lab.handlebars for issues 
async function editLabHandler(event) {

    const title = document.querySelector('input[name="lab-title"]').value.trim();
    const purpose = document.querySelector('#lab-purpose').value.trim();
    const background = document.querySelector('#lab-bg').value.trim();
    const protocols = document.querySelector('#lab-protocols').value.trim();
    const observations = document.querySelector('#lab-obs').value.trim();
    const analysis = document.querySelector('#lab-analysis').value.trim();

    const project_id = document.querySelector('#edit-lab-form').getAttribute('data-id');
    const experiment_id = document.querySelector('#lab-id').getAttribute('data-id');

    const response = await fetch(`/api/projects/${project_id}/experiments/${experiment_id}`, {
        method: 'PUT',
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
        document.location.replace(`/project/${project_id}/experiments`)
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#edit-lab-form').addEventListener('submit', editLabHandler); 

