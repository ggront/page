let URL = `https://api.nasa.gov/planetary/apod?api_key=CnhGM3FOU6z1VGlHOfjA8G30N6zvgCn7FiwBKpln`

fetch(URL)
    .then(response => response.json())
    .then(data => {
        if (data.media_type === "image") {
        const imageUrl = data.url;
        const imgElement = document.querySelector("#image");
        imgElement.src = imageUrl;
        }
    })
.catch(error => console.error(error));