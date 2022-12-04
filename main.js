function startTime() {
  // if (document.getElementById("twelvehour").checked == true){
  //   const today = new Date();
  //   let h = today.getHours();
  //   let m = today.getMinutes();
  //   let s = today.getSeconds();
  //   let ap;
  //   if (h >= 12) {ap = "PM"};
  //   if (h < 12) {ap = "AM"};

  //   m = checkTime(m);
  //   s = checkTime(s);
  //   h = thour(h);
  //   // ap = apcheck(ap);
  //   document.getElementById('time').innerHTML =  h + ":" + m;
  //   // document.getElementById('time').innerHTML =  h + ":" + m + ":" + s + " " + ap;
  //   //console.log(h + ":" + m + ":" + s + " " + ap)
  // };
  // if (document.getElementById("twelvehour").checked == false){
  
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let muonth = today.getMonth();
  let d = today.getDate();
  let w = today.getDay();
  let fggh = today.getFullYear();
  const date = new Date(fggh, muonth, d);  // 2009-11-10
  var dateStr = date;
  var day = getDayName(dateStr, "en-US");

  const month = date.toLocaleString('default', { month: 'long' });
  console.log(month);
  document.getElementById('Dinfo').innerHTML = day + " , " + d + " " + month;

// h = 17;
  if (h >= 7) {
    if (h <= 16){
    document.getElementById('Bbody').style = "background-image: url(wallpaper/new/SAND.jpg);"
    document.getElementById('Bbody').style = "background-image: url(wallpaper/new/SAND.jpg);"
    document.getElementById('lockscreen').style = "background-image: url(wallpaper/new/SAND.jpg);"

  } else {
    document.getElementById('Bbody').style = "background-image: url(wallpaper/new/SANDN.jpg);"
    document.getElementById('lockscreen').style = "background-image: url(wallpaper/new/SANDN.jpg);"
  }
  } else {
    document.getElementById('Bbody').style = "background-image: url(wallpaper/new/SANDN.jpg);"
    document.getElementById('lockscreen').style = "background-image: url(wallpaper/new/SANDN.jpg);"
  };

  m = checkTime(m);
  s = checkTime(s);
  if (h > 12) { h = "0" + (h - 12) };

  document.getElementById('time').innerHTML = h + ":" + m;
  // document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
  startTime();
  
  setTimeout(startTime, 1000);
}
startTime();

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}
function thour(i) {
  if (i > 12) { i = i - 12 }; // 12 hour clock
  return i;
}
function getDayName(dateStr, locale) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: 'long' });
}
var dateStr = '05/23/2014';
var day = getDayName(dateStr, "en-US");



function passup(){
  document.getElementById('time').style="padding-top: 2%; font-size: 60px;" ;
  document.getElementById('Dinfo').style="font-size: 25px;" ;
  document.getElementById('Linfo').style="float: left; transition: .3s;";
  document.getElementById('lockscreen').style = "background-color: rgba(0,0,0, .4); /*filter: blur(5px);*/";

}