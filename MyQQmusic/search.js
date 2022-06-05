let HotSearch=document.querySelector(".hot");

axios({
    method: 'get',
    url: 'http://124.221.249.219:8000/api/hot'
}).then((result) => {
    for(let i=0;i<HotSearch.children.length;i++)
    {
        HotSearch.children[i].innerHTML=result.data[i];
    }
})