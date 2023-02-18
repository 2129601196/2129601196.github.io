function start(){
    var iframeid = document.getElementById("NetEase-CloudMusic")
    iframeid.src ="about:blank"
    document.getElementById("Window").style.display = 'none'
}
function play(){
    document.getElementById("Window").style.display = 'block'
    var iframeid = document.getElementById("NetEase-CloudMusic") 
    iframeid.src = "https://music.163.com/outchain/player?type=2&id="+document.getElementById("Songid").value+"&auto=1&height=66"
}
function play_hide(){
    document.getElementById("Window").style.display = 'none'
    document.getElementById("NetEase-CloudMusic").src ="about:blank"
    new Audio("https://music.163.com/song/media/outer/url?id="+document.getElementById("Songid").value+".mp3").play()
}
function reload(){
    window.location.reload();
}
function download(){
    var download_mp3 = "https://music.163.com/song/media/outer/url?id="+document.getElementById("Songid").value+".mp3";
    window.location.href = download_mp3;
}
function 歌曲(number){
    document.getElementById("Songid").value = number
}