$(function () {
  //Desktop navbar
  var bar = '';
  bar += '<header class="site-header sticky-top py-1 animate__animated animate__fadeInDown animate__faster">';
  bar += '<nav class="container d-flex flex-column flex-md-row justify-content-between animate__animated animate__fadeIn animate__fast">';

  bar += '<a class="py-2 d-none d-md-inline-block" href="/">Home</a>';
  bar += '<a class="py-2 d-none d-md-inline-block" href="/support">Support</a>';
  bar += '<a class="py-2 d-none d-md-inline-block" href="/smp" id="noclick">SMP</a>';
  bar += '<a class="py-2 d-none d-md-inline-block" href="/staffapps">Staff Application</a>';
  bar += '<a class="py-2 d-none d-md-inline-block" href="/bobux">Bobux</a>';
  bar += '<a class="py-2 d-none d-md-inline-block" href="/contact">Contact</a>';

  bar += '</nav>';
  bar += '</header>';

  //Phone navbar
  bar += '<div id="navbar-phone">';

  bar += '<div id="navbar-phone-head">';
  bar += '<div id="navbar-phone-head-txt" onclick="location.href=`/`;">DashCruft</div>';
  bar += '<div id="navbar-phone-lol" onclick="openNav()">';
  bar += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 20" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <line x1="4" y1="6" x2="20" y2="6"></line> <line x1="4" y1="12" x2="20" y2="12"></line> <line x1="4" y1="18" x2="20" y2="18"></line></svg>';
  bar += '</div>';
  bar += '</div>';

  bar += '<div id="openthedamnnavbarkiddo" class="navbar-phone-container">';
  bar += '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';
  bar += '<a href="/">Home</a>';
  bar += '<a href="/support">Support</a>';
  bar += '<a href="/smp" id="noclick">SMP</a>';
  bar += '<a href="/staffapps">Staff Apps</a>';
  bar += '<a href="/bobux">Bobux</a>';
  bar += '<a href="/contact">Contact</a>';
  bar += '</div>';
  
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