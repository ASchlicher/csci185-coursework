const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';
const fancyURL ="https://www.apitutor.org/spotify/v1/"

function search(ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks(term) {
    const url = `${baseURL}?type=track&q=${term}&limit=5`;
    const request = await fetch(url);
    const data = await request.json();
    if (data.length === 0) {
        document.querySelector("#tracks").innerHTML = "No Tracks Found";
    }
    document.querySelector("#tracks").innerHTML = "";
    function template(num) {
        return `<section class="track-item preview" onclick =playTrack("${data[num].id}")>
                <img src=${data[num].album.image_url} alt="${data[num].album.name}>
                <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                    <h2>${data[num].name}</h2>
                    <p>
                        ${data[num].artist.name}
                    </p>
                </div>
            </section>`
    }

    for (let i = 0; i < data.length; i++) {
        document.querySelector("#tracks").innerHTML += template(i);
    }

   
}





async function getAlbums(term) {
    const url = `${baseURL}?type=album&q=${term}`;
    const request = await fetch(url);
    const data = await request.json();
    console.log(url)
    document.querySelector("#albums").innerHTML = "";
    function card(num) {
        return `<section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
                        <div>
                            <img src=${data[num].image_url} alt="${data[num].name}">
                            <h2>${data[num].name}</h2>
                            <div class="footer">
                                <a href=${data[num].spotify_url} target="_blank">
                                    view on spotify
                                </a>
                            </div>
                        </div>
                    </section>`}
for (let i = 0; i < data.length; i++){
        document.querySelector("#albums").innerHTML += card(i);
    }
}
    
async function getArtist(term) {
    //q=term&type=artist&limit=1
    const url = `${baseURL}?q=${term}&type=artist&limit=1`;
    const request = await fetch(url);
    const data = await request.json();
    console.log(url);
    // the following if statement being data.length came from chatgpt
    if (data.length === 0) {
        document.querySelector("#artist").innerHTML = "Artist Not Found"
    }
    const snippet = `
            <section class="artist-card" id="${data[0].id}">
                <div>
                    <img src=${data[0].image_url} alt="${data[0].name}">
                        <h2>${data[0].name}</h2>
                        <div class="footer">
                            <a href=${data[0].spotify_url} target="_blank">
                                view on spotify
                            </a>
                        </div>
                </div>
            </section>
            `
    const container = document.querySelector("#artist");
    container.innerHTML = snippet;
};




document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}

