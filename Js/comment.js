function loadComment(){

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data =>displayComment(data))
}

loadComment()

function displayComment(comments) {

    const commentContainer = document.getElementById('comment');

    for (const comment of comments) {

        const div = document.createElement('div');

        div.classList.add('comment');

        div.innerHTML =

            `
        <h3>id : ${comment.id}</h3>
        <h3>name : ${comment.name}</h3>
        <p>email : ${comment.email}</p>
        <p>details : ${comment.body}</p>

        ` ;

        commentContainer.appendChild(div)

        console.log(comment.name)
    }
};