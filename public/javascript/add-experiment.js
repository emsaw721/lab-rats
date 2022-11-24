async function newLabHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="lab-title"]').value;
  const purpose = document.querySelector('#lab-purpose').value;
  const background = document.querySelector('#lab-bg').value;
  const protocols = document.querySelector('#lab-protocols').value;
  const observations = document.querySelector('#lab-obs').value;
  const analysis = document.querySelector('#lab-analysis').value;

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 2
];


  const response = await fetch(`/api/projects/${id}/experiments`, {
    method: 'POST',
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
  })
  if (response.ok) {
    document.location.replace(`/api/projects/${id}/experiments`);
  } else {
    alert(response.statusText);
  }
}



document.querySelector('#addexperiment').addEventListener('submit', newLabHandler);
