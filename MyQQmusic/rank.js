let ranking=document.getElementById('toplist');

axios({
    method: 'get',
    url: 'http://124.221.249.219:8000/api/ranking'
}).then((result) => {
        Insertrank(result.data,ranking)
})

function Insertrank(children, father) {
    let html = ``;
    children.map(function (item) {
        let title = item.title;
        let top = item.top3;
        let cover = item.cover;
        let views = item.views;
        let text = item.update_frequence;
        html += `
        <li class="top-list-item">
            <div class="top-list-text">
                <h2 class="top-list-title">${title}</h2>
                <ul class="music-list">
                    <li class="top-song-list">
                        <span class="song-content"><b>1</b>.${top[0].title}</span><span class='song-artist'>-${top[0].artist}</span>
                    </li>
                    <li class="top-song-list">
                    <span   span class="song-content"><b>2</b>.${top[1].title}</span><span class='song-artist'>-${top[1].artist}</span>
                    </li>
                    <li class="top-song-list">
                        <span class="song-content"><b>3</b>.${top[2].title}</span><span class='song-artist'>-${top[2].artist}</span>
                    </li>
                </ul>
            </div>
            <div class="top-list-media">
                <img src=${cover}>
                <span class="top-list-updata">每${text}更新</span>
                <span class="top-list-view">${views}</span>
            </div>
        </li>
    `
    })
    father.innerHTML += html;
}
