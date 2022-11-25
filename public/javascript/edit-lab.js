
// go to edit-lab.handlebars for issues 
async function editLabHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="lab-title"]').value.trim();
    const purpose = document.querySelector('#lab-purpose').value.trim();
    const background = document.querySelector('#lab-bg').value.trim();
    const protocols = document.querySelector('#lab-protocols').value.trim();
    const observations = document.querySelector('#lab-obs').value.trim();
    const analysis = document.querySelector('#lab-analysis').value.trim();

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
        document.location.replace('/notebook')
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#edit-lab-form').addEventListener('submit', editLabHandler); 