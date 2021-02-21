function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function show(shown, hidden) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}

var channelID = "UCGfLATfpHApnScvMr9dXd1g";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL) + channelID, function (data) {
    var link = data.items[0].link;
    var id = link.substr(link.indexOf("=") + 1);
    $("#youtube_video").attr("src", "https://youtube.com/embed/" + id + "?controls=0&showinfo=0&rel=0");
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener('mousemove', function (event) {
    let card_x = getTransformValue(event.clientX, window.innerWidth, 56);
    let card_y = getTransformValue(event.clientY, window.innerHeight, 56);
    let shadow_x = getTransformValue(event.clientX, window.innerWidth, 20);
    let shadow_y = getTransformValue(event.clientY, window.innerHeight, 20);
    let text_shadow_x = getTransformValue(event.clientX, window.innerWidth, 28);
    let text_shadow_y = getTransformValue(event.clientY, window.innerHeight, 28);
    $(".floating").css("transform", "rotateX(" + card_y / 1 + "deg) rotateY(" + card_x + "deg)");
    $(".floating").css("box-shadow", -card_x + "px " + card_y / 1 + "px 55px rgba(0, 0, 0, .55)");
    $(".svg").css("filter", "drop-shadow(" + -shadow_x + "px " + shadow_y / 1 + "px 4px rgba(0, 0, 0, .6))");
    $(".text").css("text-shadow", -text_shadow_x + "px " + text_shadow_y / 1 + "px 6px rgba(0, 0, 0, .8)");
});
function getTransformValue(v1, v2, value) {
    return ((v1 / v2 * value - value / 2) * 1).toFixed(1);
}
$(function () {
    setTimeout(function () {
        $("body").removeClass("active");
    }, 2200);
});