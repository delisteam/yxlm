/**
 * Created by Administrator on 2017/1/5 0005.
 */
window.onload=function() {
    lunbo();
    logonBox();
}
function getClass(classname,id) {
    if (document.getElementsByClassName)
    {
        if(id) {var eleid=document.getElementById(id);return eleid.getElementsByClassName(classname);}
        else {return document.getElementsByClassName(classname);}
    }
    else
    {
        if(id)
        {
            var eleid=document.getElementById(id);
            var dom=eleid.getElementsByTagName("*");
        }
        else
        {
            var dom=document.getElementsByTagName("*");
        }
        var arr=[];
        for(var i=0;i<dom.length;i++)
        {
            var txtarr=dom[i].className.split(" ");
            for(var j=0;j<txtarr.length;j++)
            {
                if(txtarr[j]==classname)
                {
                    arr.push(dom[i])
                }
            }
        }
        return arr;
    }
}
var logonBox=function(){
    var box=document.getElementById("login-box");
    var drop=document.getElementById("all-close");
    startDrop(drop,box);
    function startDrop(current,move){
        current.onmousedown=function(event){
            var event=event||window.event;
            var x=event.clientX-move.offsetLeft -300;
            var y=event.clientY-move.offsetTop -200;
            document.onmousemove=function(event){
                var event=event||window.event;
                move.style.left=event.clientX-x+"px";
                move.style.top=event.clientY-y+"px"
            }
        }

        document.onmouseup=function(){   //鼠标弹起以后鼠标继续移动就不应该操作
            document.onmousemove=null;
        }
    }
}
var lunbo=function(){
    var zzfw3=document.getElementById("zzfw1");
    var cjwt=document.getElementById("cjwtlb");
    var box1=document.getElementById("boxanswer").getElementsByTagName("div")
    zzfw3.onmouseover=function(){
        cjwt.className="";
        this.className="current";
        box1[0].style.display="block";
        box1[1].style.display="none";
    }
    cjwt.onmouseover=function(){
        zzfw3.className="";
        this.className="current";
        box1[0].style.display="none";
        box1[1].style.display="block";
    }
    //魔法少女星光水晶
    var newlis=document.getElementById("newlis");
    var newli=newlis.children;
    for(var i=0;i<newli.length;i++)
    {
        newli[i].index=i;
        newli[i].onmouseover=function(){
           for(var j=0;j<newli.length;j++)
           {
               newli[j].firstChild.className="";
           }
            this.firstChild.className="current";
            target=-this.index*780;
        }
    }
   var pic=document.getElementById("ac-pic");

    var leader=0;var target=0;
    setInterval(function(){
        leader=leader+(target-leader)/10;
        pic.style.left=leader+"px";
    },1)


    var nav = document.getElementById("topnav").getElementsByTagName("li")
    var subnav = document.getElementById("subnav")
    for (var i = 0; i < nav.length; i++) {
        nav[i].onmouseover = function () {
            subnav.style.visibility = "visible";
        }
        subnav.onmouseover = function () {
            subnav.style.visibility = "visible"
        }
        subnav.onmouseout = function () {
            subnav.style.visibility = "hidden"
        }
    }
    var lis=document.getElementById("news").getElementsByTagName("li");
    var boxs=getClass("compre");

    for(var i=0;i<lis.length;i++)
    {
        lis[i].index=i;
        lis[i].onmouseover=function(){
            for(var j=0;j<lis.length;j++)
            {
                boxs[j].style.display="none";
                lis[j].className=""
            }
            this.className="current" ;

            boxs[this.index].style.display="block"
        }
    }
    var sv=document.getElementById("topSmallVideo")
    var stbtn=document.getElementById("sm-play")
    stbtn.onclick=function() {
        if (sv.paused) {
            sv.play();
        }
        else {
            sv.pause();
        }
    }

    function $(id){
        return document.getElementById(id);
    }

    $("all-close2").onclick=function(){
        $("login-box").style.display="none";
        $("wrap").style.display="none"

    }
    $("txt").onclick=function(){
        this.style.borderColor="#a7d2fb"
        $("password").style.borderColor="#aaaaaa"
    }
    $("txt").oninput=$("txt").onpropertychange=function(){

        if(this.value=="")
        {
            $("message").style.display="block";

        }
        else
        {
            $("message").style.display="none"
        }
    }
    $("password").onclick=function(){
        this.style.borderColor="#a7d2fb"
        $("txt").style.borderColor="#aaaaaa"
    }

    $("password").oninput=$("password").onpropertychange=function(){

        if(this.value=="")
        {
            $("pass-code").style.display="block";

        }
        else
        {
            $("pass-code").style.display="none"
        }
    }
}
function userLogin(){
    document.getElementById("txt").value=="";
    document.getElementById("message").innerHTML="支持QQ号/邮箱/手机号登录";
    document.getElementById("login-box").style.display="block";
   document.getElementById("wrap").style.display="block";
}



