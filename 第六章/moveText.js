var dom,x,y,finalx=300,finaly=300;

Array.prototype.notempty = function() {
    var arr = [];
    this.map(function(val, index) {
        //过滤规则为，不为空串、不为null、不为undefined，也可自行修改
        if (val !== "" && val != undefined) {
            arr.push(val);
        }
    });
    return arr;
}

function initText()
{
    var s=prompt("以(x,y)的形式输入起始坐标");
    var e=prompt("以(x,y)的形式输入终点坐标");
    dom = document.getElementById('theText').style;
    var x=dom.left;
    var y= dom.top;
    positions = s.split(/[()（）,]/).notempty();
    positione = e.split(/[()（）,]/).notempty();
    console.log(positions);
    console.log(positione);
    x= positions[0];
    y= positions[1];
    finalx = positione[0];
    finaly = positione[1];
    moveText(x,y);
}

function moveText(x,y){
    if(x!=finalx)
    {
        if(x>finalx)
            x--;
        else if(x<finalx)
            x++;
    }
    if(y!=finaly)
    {
        if(y>finalx)
            y--;
        else if(y<finaly)
            y++;
    }
    if((x!=finalx)||(y!=finaly)) {
        dom.left = x+ "px";
        dom.top = y+"px";
        setTimeout("moveText("+x+","+y+")",1);
    }


}