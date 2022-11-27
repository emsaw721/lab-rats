async function newLabHandler(event) {

  const title = document.querySelector('input[name="lab-title"]').value;
  const purpose = document.querySelector('#lab-purpose').value;
  const background = document.querySelector('#lab-bg').value;
  const protocols = document.querySelector('#lab-protocols').value;
  const observations = document.querySelector('#lab-obs').value;
  const analysis = document.querySelector('#lab-analysis').value;
  const project_id = document.querySelector('#addexperiment').getAttribute('data-id');

  const response = await fetch(`/api/projects/${project_id}/experiments`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      purpose,
      background,
      protocols,
      observations,
      analysis,
      project_id: project_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.ok) {
    document.location.href = `/project/${project_id}`;
  } else {
    alert(response.statusText);
  }
}



document.querySelector('#addexperiment').addEventListener('submit', newLabHandler);
