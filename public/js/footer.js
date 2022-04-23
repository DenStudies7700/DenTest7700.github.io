document.addEventListener("DOMContentLoaded", () => {
    let bar = '';
    bar += '<div class="footer">';
    bar += '<div class="footerText"> ⭐ Updates Coming Soon! ⭐ </div>';
    bar += '<div class="footerText" style="font-size: 25px;"> Website is under construction. Thanks for your patience! </div>';
    bar += '</div>';
    document.getElementById("footer-area").innerHTML = bar;
});

function getValueByName(name) {
    let url = document.getElementById('footer-lol').getAttribute('src');
    let param = new Array();
    if (url.indexOf("?") != -1) {
        let source = url.split("?")[1];
        items = source.split("&");
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}