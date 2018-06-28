window.onload = function () {
    let urlString, urlArray, pageHREF, menu, i, currentURL;
    urlString = document.location.href;
    urlArray = urlString.split('/');
    pageHREF = urlArray[urlArray.length - 1];
    

    if (pageHREF !== "") {
      menu = document.querySelectorAll('.site-navigation li a');
  
      for (i = 0; i < menu.length; i++) {
        currentURL = (menu[i].getAttribute('href'));
        menu[i].parentNode.className = '';
        console.log(pageHREF + " " + currentURL);
        
        if (currentURL === pageHREF) {
          menu[i].parentNode.className = 'active';
        }
      }
    };
  }