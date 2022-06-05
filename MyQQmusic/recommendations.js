let office =document.getElementById('office-list-box')
let tat=document.getElementById('tatsujin-list-box')
let col=document.getElementById('column-list-box')

axios({
    method: 'get',
    url: 'http://124.221.249.219:8000/api/recommendations'
}).then((result) => {
    Insertoff(result.data.offical,office)
    Insertoff(result.data.tatsujin,tat)
    Insertcol(result.data.column,col)
})

function Insertoff(children, father) {
    let html = ``;
    children.map(function (item) {
        let cover = item.cover;
        let title = item.title;
        let views = item.views;
        html += `
        <li class="display-item">
                        <div class="display-item-img">
                            <img src=${cover}>
                            <span class="display-item-cover">
                                <i class="iconfont icon-bofang_o"></i>
                                <span class="display-item-cover-count">▲${views}万</span>
                            </span>
                        </div>
                        <p class="display-item-title">${title}</p>
                    </li> `
    })
    father.innerHTML += html;
}

function Insertcol(children, father) {
    let html = ``;
    children.map(function (item) {
        let icon = item.icon;
        let cover = item.background;
        let title = item.title;
        let views = item.description;
        html += `
        <li class="display-item">
        <div class="display-item-img">
            <img src=${cover}>
            <span class="display-item-cover">
                <i class="iconfont icon-bofang_o"></i>
                <span class="display-item-cover-count"> ${views}</span>
            </span>
        </div>
        <p class="display-item-title">${title}</p>
    </li> `
    })
    father.innerHTML += html;
}

