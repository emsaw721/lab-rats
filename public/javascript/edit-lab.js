
// go to edit-lab.handlebars for issues 
async function editLabHandler(event) {

    const title = document.querySelector('input[name="lab-title"]').value.trim();
    const purpose = document.querySelector('#lab-purpose').value.trim();
    const background = document.querySelector('#lab-bg').value.trim();
    const protocols = document.querySelector('#lab-protocols').value.trim();
    const observations = document.querySelector('#lab-obs').value.trim();
    const analysis = document.querySelector('#lab-analysis').value.trim();

  

    const response = await fetch(`/api/projects/{{experiment.project_id}}/experiments/${id}`, {
    const projectid = window.location.href
    console.log(projectid)

    const response = await fetch(`projectid`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            purpose,
            background,
            protocols,
            observations,
            analysis
        }),
        headers: { 'Content-Type': 'applicaton/json' }
    });

    if (response.ok) {

        document.location.replace('/experiment-list')

    } else {
        alert(response.statusText);
    }
};


document.querySelector('.save-lab-btn').addEventListener('submit', editLabHandler); 

