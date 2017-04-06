/**
 * Created by Administrator on 2017/1/15 0015.
 */



var sssel=document.getElementById("ss-select");
var lis=sssel.getElementsByTagName("li");
var match=document.getElementById("match-body");
var box=match.getElementsByClassName("box");


for(var i=0;i<lis.length;i++)
{
    lis[i].index=i;
    lis[i].onmouseover=function(){
        for(var j=0;j<lis.length;j++)
        {
            box[j].style.display="none";
            lis[j].className="";
        }
        this.className="current";
        box[this.index].style.display="block";
    }
}
var addmore=document.getElementById("video-bottom");
var videolis=document.getElementById("video-line").getElementsByTagName("li");
var videobox=document.getElementsByClassName("videobox")
for(var i=0;i<videolis.length;i++)
{
    videolis[i].index=i;
    videolis[i].onmouseover=function(){
        for(var j=0;j<videolis.length;j++)
        {
            videolis[j].className=""
            videobox[j].style.display="none";
        }
        this.className="current";
        videobox[this.index].style.display="block";
    }

}
addmore.onclick=function(){
    this.innerHTML="<a href='http://www.baidu.com' target='_blank' style='color: #303030'>显示更多视频</a>"
    document.getElementById("video-core-body").style.height="auto";
}




