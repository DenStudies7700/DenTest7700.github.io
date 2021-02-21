$(function () {
    var bar = '';
    bar += '<header class="site-header sticky-top py-1 animate__animated animate__fadeInDown animate__faster">';
    bar += '<nav class="container d-flex flex-column flex-md-row justify-content-between animate__animated animate__fadeIn animate__fast">';
  
    //bar += '<div class="button-box col-lg-12">';
    bar += '<i class="lol fas fa-bars fa-lg" style="margin-bottom:10px;margin-top:10px;margin-left:4px;color: #c0c0c0;" onclick="openNav()"></i>';
    //bar += '</div">';
    bar += '<a class="py-2 d-none d-md-inline-block" href="https://dashcruft.com/">Home</a>';
    bar += '<a class="py-2 d-none d-md-inline-block" href="./support">Support</a>';
    bar += '<a class="py-2 d-none d-md-inline-block" href="./smp">SMP</a>';
    bar += '<a class="py-2 d-none d-md-inline-block" href="./staffapps">Staff Application</a>';
    bar += '<a class="py-2 d-none d-md-inline-block" href="./bobux">Bobux</a>';
    bar += '<a class="py-2 d-none d-md-inline-block" href="./contact">Contact</a>';
    bar += '<button type="button" style="color: #fff;background-color: Transparent;outline:none;text-align: right;">';
    bar += '</button>';
    bar += '</nav>';
    
    bar += '</header>';
  
    bar += '<div id="mySidenav" class="sidenav">';
    bar += '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';
    bar += '<a href="https://dashcruft.com/">Home</a>';
    bar += '<a href="/support">Support</a>';
    bar += '<a href="/smp">SMP</a>';
    bar += '<a href="/staffapps">Staff Application</a>';
    bar += '<a href="/bobux">Bobux</a>';
    bar += '<a href="/contact">Contact</a>';
    bar += '</div>';
  
  
    $("#main-bar").html(bar);
  
    var id = getValueByName("id");
    $("#" + id).addClass("active");
  });
  
  function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
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