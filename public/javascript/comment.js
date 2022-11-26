
// go to edit-lab.handlebars for issues 
async function commentFormHandler(event) {
    const project_id = document.querySelector('#edit-lab-form').getAttribute('data-id');
    const experiment_id = document.querySelector('#lab-id').getAttribute('data-id');
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    if (comment) {
        const response = await fetch(`/api/comments/${experiment_id}`, {
            method: 'POST',
            body: JSON.stringify({ experiment_id, comment_text }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.href = `/api/project/${project_id}/experiments/${experiment_id}`;
        } else {
            alert(response.statusText);
        }
    }
};
// sort statement for most recent comment on post gonna be a get request --> wenbo 
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler); 