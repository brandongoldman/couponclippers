function sleep(t) {  
  const start = Date.now();
  while (Date.now() - start < t);
}
 
var interval = setInterval(function(){
    var buttons = $("button.gray-btn:contains('CLIP')");
    var nextLink = $("button.gray-btn:contains('Next')");
    var btn = $(buttons.splice(0, 1));
    console.log("Clicking: " + buttons.length + " ", btn);
    btn.trigger( "click" );
    if (buttons.length === 0 && nextLink.length === 0 ) {
        console.log("Done");
        clearInterval(interval);
    } else if (buttons.length === 0) {
        nextLink.trigger( "click" );
        sleep(3000);
    }
}, 500);
