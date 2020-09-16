// 一开始没有滚动的时候，出现在视窗中的图片也会加载
start();

// 当页面开始滚动的时候，遍历图片，如果图片出现在视窗中，就加载图片
var clock; //函数节流
$(window).on('scroll',function(){
    if(clock){
        clearTimeout(clock);
    }
    clock = setTimeout(function(){
        start()
    },200)
})

function start(){
     $('.container img').not('[data-isLoading]').each(function () {
        if (isShow($(this))) {
            loadImg($(this));
        }
    })
}


// 判断图片是否出现在视窗的函数
function isShow($node){
    return $node.offset().top <= $(window).height()+$(window).scrollTop();
}

// 加载图片的函数，就是把自定义属性data-src 存储的真正的图片地址，赋值给src
function loadImg($img){
        $img.attr('src', $img.attr('data-src'));

        // 已经加载的图片，我给它设置一个属性，值为1，作为标识
        // 弄这个的初衷是因为，每次滚动的时候，所有的图片都会遍历一遍，这样有点浪费，所以做个标识，滚动的时候只遍历哪些还没有加载的图片
        $img.attr('data-isLoading',1);
}

