
// go to edit-lab.handlebars for issues 
async function commentFormHandler(event) {
    event.preventDefault();
    // const project_id = document.querySelector('#edit-lab-form').getAttribute('data-id');
    const experiment_id = document.querySelector('#experimentid').getAttribute('data-id');
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    if (comment_text) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ 
                comment_text:comment_text, 
                experiment_id:experiment_id,
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler); 

