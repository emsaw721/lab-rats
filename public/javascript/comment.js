
// go to edit-lab.handlebars for issues 
async function commentFormHandler(event) {
    event.preventDefault();
    // const project_id = document.querySelector('#edit-lab-form').getAttribute('data-id');
    const experiment_id = document.querySelector('#experimentid').getAttribute('data-id');
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    if (comment) {
        const response = await fetch(`/api/comments/${experiment_id}`, {
            method: 'POST',
            body: JSON.stringify({ 
                comment_text:comment_text, 
                experiment_id:experiment_id,
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
<<<<<<< HEAD
            document.location.href = `/api/project/${project_id}/experiments/${experiment_id}`;
=======
            document.location.reload();
>>>>>>> c427c05 (fix routes)
        } else {
            alert(response.statusText);
        }
    }
};
<<<<<<< HEAD
// sort statement for most recent comment on post gonna be a get request --> wenbo 
document.querySelector('.add-comment-btn').addEventListener('submit', commentFormHandler); 
=======
 
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler); 
>>>>>>> c427c05 (fix routes)
