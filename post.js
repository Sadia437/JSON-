function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

loadPost()

function displayPost(posts) {

    const ui = document.getElementById('posts')
    for (const post of posts) {
        // console.log(post);
        const div = document.createElement('div')
        div.classList.add('post')
        console.log(div);
        div.innerHTML = `
    <h3>Title: ${post?.title}</h3>
    <p>Description:P ${post?.body}</p>
    <p> ID: ${post?.id}</p>
  `
        ui.appendChild(div)




    }
}




