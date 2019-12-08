let endseconds = new Date();
let d =  h = m =  s = 0;
d;
h;
m=59-endseconds.getMinutes();
s=59-endseconds.getSeconds();
let id=setInterval(sceckill,1000)
function sceckill(){
    s--;
    if(s==-1){
        s=59
        m--
    }
    if(m==-1){
        m=59
    }
    document.getElementById('d').innerHTML = d + '天';
    document.getElementById('h').innerHTML = h + '时';
    document.getElementById('m').innerHTML = m + '分';
    document.getElementById('s').innerHTML = s + '秒';
}