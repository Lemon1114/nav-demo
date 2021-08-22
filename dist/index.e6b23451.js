(function () {
  let $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashmap = Array.from(JSON.parse(localStorage.getItem('list'))) || [{
    logo: 'B',
    url: 'http://baidu.com'
  }, {
    logo: 'B',
    url: 'http://bing.com'
  }];
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$addItem = $(".siteList .addItem");
  function $16b5ad875ae907e2f7f79e7b8fe116cc$var$render() {
    $('.siteList>li:not(".addItem")').remove();
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashmap.forEach((node, index) => {
      let $li = $(`<li>
        <svg class="icon delBtn" aria-hidden="true">
     <use xlink:href="#icon-shanchu"></use>
       </svg>
    <div class="site">
    
      <div class="logo">${node.logo}</div>
      <div class="link">${node.url.replace(/http:\/\//, '')}</div>
    </div>
  </li>`);
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$$addItem.before($li);
      $li.on('click', e => {
        window.open(node.url);
      });
      $li.on('click', '.delBtn', e => {
        e.stopPropagation();
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashmap.splice(index, 1);
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
      });
    });
  }
  $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
  $(document).on('keypress', e => {
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashmap.find(node => {
      if (node.logo === e.key) {
        window.open(node.url);
      }
    });
  });
  $16b5ad875ae907e2f7f79e7b8fe116cc$var$$addItem.on('click', e => {
    let url = window.prompt('请输入添加的网址');
    if (url.indexOf('http') < 0) {
      url = "http://" + url;
    }
    let node = {
      logo: url.replace(/http:\/\//, '')[0],
      url: url
    };
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashmap.push(node);
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
  });
  window.onbeforeunload = function () {
    localStorage.setItem('list', JSON.stringify($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashmap));
  };
})();

//# sourceMappingURL=index.e6b23451.js.map
