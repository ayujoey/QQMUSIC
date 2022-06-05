  //rem适配
  //获取html的宽
  let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
  console.log(htmlwidth);

  let htmlDom = document.getElementsByTagName("html")[0]
  console.log(htmlDom);
  //设置根元素样式
  htmlDom.style.fontSize = htmlwidth / 20 + 'px';
  //设置选项卡
  document.addEventListener('click', function (event) {

    let target = event.target

    if (target.dataset.role !== 'tab') return

    [].forEach.call(target.parentElement.children, tab => {
      tab.classList.remove('active')
    })
    target.classList.add('active')

    let content = document.querySelector(target.dataset.view)

    if (content) {
      [].forEach.call(content.parentElement.children, child => {
        child.style.display = 'none'
      })
      content.style.display = 'block'
    }

    window.dispatchEvent(new Event('scroll'))

  })


  //推荐

  let getOffice = document.getElementsByClassName('add_cart')
  let goodItem = document.getElementsByClassName('office-list')

  for (let i = 0; i < getOffice.length; i++) {
    getOffice[i].onclick = function () {
      let good = {
        imageUrl: goodItem[i].children[1].children[0].scr,
        name: goodItem[i].children[1].children[1],
        brand: goodItem[i].children[2],
        cost: goodItem[i].children[3],
        sales: goodItem[i].children[4],
        id: goodItem[i].children[5],
        color: goodItem[i].children[6]
      }
      axios({
        url: "http://180.76.185.37:3000/addCartData",
        method: "post",
        data: {
          token: token,
          data: {
            id: good.id,
            name: good.name,
            brand: good.brand,
            imageUrl: good.imageUrl,
            sales: good.sales,
            cost: good.cost,
            color: good.color,
          },
        },
      }).then(() => {
        alert(res.message)
      });
    }
  }