function loadAlbum() {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then(res => res.json())
        .then(data => displayAlbum(data))
}

loadAlbum()

function displayAlbum(albums) {

    const uiux = document.getElementById('albums')
    for (const album of albums) {
        // console.log(album);
        const div = document.createElement('div')
        div.classList.add('album')
        // console.log(div);
        div.innerHTML = `
         <p> ID: ${album?.id}</p>
         <h3>userId: ${album?.userId}</h3>
         <p>title${album?.title}</p>
         
   
  `
        uiux.appendChild(div)




    }
}




