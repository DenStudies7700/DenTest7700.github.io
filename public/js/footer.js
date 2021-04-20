$(function () {
    var bar = '';
    bar += '<div class="footer">';
    bar += '<div class="footerText"> ⭐ Check Out <a href="https://dashcruft.com/kite" target="_blank">Kite</a>! </div>';
    bar += '<div class="footerText" style="font-size: 25px;"> Kite is a free AI-powered coding assistant that will help you code faster and smarter. </div>';
    bar += '</div>';
    $("#footer-area").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('footer-lol').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}