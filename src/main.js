let hashmap = Array.from(JSON.parse(localStorage.getItem('list'))) || [{ logo: 'B', url: 'http://baidu.com' }, { logo: 'B', url: 'http://bing.com' }]
const $addItem = $(".siteList .addItem")

function render() {
    $('.siteList>li:not(".addItem")').remove()
    hashmap.forEach((node, index) => {
        let $li = $(`<li>
        <svg class="icon delBtn" aria-hidden="true">
     <use xlink:href="#icon-shanchu"></use>
       </svg>
    <div class="site">
    
      <div class="logo">${node.logo}</div>
      <div class="link">${node.url.replace(/http:\/\//, '')}</div>
    </div>
  </li>`)
        $addItem.before($li)
        $li.on('click', (e) => {
            window.open(node.url)
        })
        $li.on('click', '.delBtn', (e) => {
            e.stopPropagation()
            hashmap.splice(index, 1)
            render()
        })
    })
}
render()
$(document).on('keypress', (e) => {
    hashmap.find(node => {
        if (node.logo === e.key) {
            window.open(node.url)
        }
    })
    // for (let i = 0; i < hashmap.length; i++) {
    //     if (e.key === node.logo) {
    //         window.open(node.url)
    //         break;
    //     }
    // }

})
$addItem.on('click', (e) => {
    let url = window.prompt('请输入添加的网址')
    if (url.indexOf('http') < 0) {
        url = "http://" + url
    }
    let node = {
        logo: url.replace(/http:\/\//, '')[0],
        url: url
    }
    hashmap.push(node)
    render()
})
window.onbeforeunload = function () {
    localStorage.setItem('list', JSON.stringify(hashmap))
}
