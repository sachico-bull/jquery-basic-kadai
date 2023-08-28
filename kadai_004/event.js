$(window).on(
'load',() =>{
    console.log('loadイベントが発生しました');
});
$(function(){
    $('.box').on({
        'scroll': () =>{
            console.log('scrollイベントが発生しました');
        },
    });
});