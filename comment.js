function loadComment() {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => displayComment(data))
}

loadComment()

function displayComment(comments) {

    const uiux = document.getElementById('comments')
    for (const comment of comments) {
        // console.log(comment);
        const div = document.createElement('div')
        div.classList.add('comment')
        // console.log(div);
        div.innerHTML = `
         <p> ID: ${comment?.id}</p>
         <h3>postId: ${comment?.postId}</h3>
         <p>name:P ${comment?.name}</p>
         <p>email${comment?.email}</p>
         <p>body${comment?.body}</p>
   
  `
        uiux.appendChild(div)




    }
}




