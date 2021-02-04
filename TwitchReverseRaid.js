function main (){
if (window.location.href.indexOf('?referrer=raid') > -1) {
  window.history.back();
  //console.log("Raid reversed");
}}
setInterval(main, 60000);
