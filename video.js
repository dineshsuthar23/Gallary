const vid = [
    'media/video/vid(1).mp4',
    'media/video/vid(2).mp4',
    'media/video/vid(3).mp4',
    'media/video/vid(4).mp4',
    'media/video/vid(5).mp4',
    'media/video/vid(6).mp4',
    'media/video/vid(7).mp4'
];
let arr = "";
for (let i = 0; i < vid.length; i++) {
    arr += '<a href=' + vid[i] + '><video class= "media" src=' + vid[i] + ' alt="Video"></a> ';
}
document.getElementById("demo").innerHTML = arr;

function openForm() {
    document.getElementById("popup").style.display = "block";
}

function closeForm() {
    document.getElementById("popup").style.display = "none";
}
function alertbox() {
    alert("hiiii");
}