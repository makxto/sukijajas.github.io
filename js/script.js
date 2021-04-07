var d,h,m,s,animate;

function init(){
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    clock();
};

function clock(){
    s++;
    if(s==60){
        s=0;
        m++;
        if(m==60){
            m=0;
            h++;
            if(h==24){
                h=0;
            }
        }
    }
    $('sec',s);
    $('min',m);
    $('hr',h);
    animate=setTimeout(clock,1000);
};


document.write("<center><font size=20em, style='color: white;'  'font-family: Helvetica, sans-serif;'>");
var day = new Date();
var hr = day.getHours();
if (hr >= 6 && hr < 12) {
    document.write("Good Morning");
} else if (hr == 12) {
    document.write("Good Noon");
} else if (hr >= 12 && hr <= 15) {
    document.write("Good Afternoon");
} else if (hr >= 21 && hr <= 24) {
    document.write("Good Night");
  } else if (hr >= 0 && hr <= 6) {
      document.write("Sleep Well");
} else {
    document.write("Good Evening");
}
document.write("</font></center>");

function $(id,val){
    if(val<10){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;
};

window.onload=init;
