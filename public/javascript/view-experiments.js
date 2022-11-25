


async function viewLabsHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#experiment-lab-link');

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/projects/${id}/experiments`, {
    method: 'GET',
    body: JSON.stringify({
      title,
      purpose_and_hypothesis,
      background,
      protocols_calculations_reagents_equipment,
      observations, 
      analysis,
      project_id,
      user_id,
      created_at
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

  document.querySelector('#experimentlab').addEventListener('click', viewLabsHandler);
  