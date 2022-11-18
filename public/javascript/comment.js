
// go to edit-lab.handlebars for issues 
async function commentFormHandler(event) {
    const id = document.querySelector('#lab-id').getAttribute('data-id');

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    
    if(comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({id, comment_text}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText); 
        }
    }
};
// sort statement for most recent comment on post gonna be a get request --> wenbo 
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler); 