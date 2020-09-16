var bodyBgs = [];
var smBgs = [];

bodyBgs[0] = "url(../statics/img/us1.JPG)";
bodyBgs[1] = "url(../statics/img/us2.JPG)";
bodyBgs[2] = "url(../statics/img/us3.JPG)";
bodyBgs[3] = "url(../statics/img/us4.JPG)";
smBgs[0] = "url(../statics/img/us1-sm.jpg)";
smBgs[1] = "url(../statics/img/us2-sm.jpg)";
smBgs[2] = "url(../statics/img/us3-sm.jpg)";
smBgs[3] = "url(../statics/img/us4-sm.jpg)";

var randomBgIndex = Math.round( Math.random() *3);

$(function(){
	//判断屏幕宽度
	var winWide = window.screen.width;  //获取当前屏幕分辨率
    if(winWide <= 1024 )
    {
        $("#firstBg").css("background-image","url(../statics/img/us-sm.jpg)")
        $("#bgImg").css("background-image", smBgs[randomBgIndex])
    
    }else{
        $("#firstBg").css("background-image","url(../statics/img/us.JPG)")
        $("#bgImg").css("background-image", bodyBgs[randomBgIndex]);
    }
})

//输出随机的背景图
var tag = 0;
var flag = 0;
$("#name").blur(function(){
    var name = $("#name");
    var str = name.val();

    var reg =  /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
    if(reg.test(str)){
        name.removeClass("wrong-input");
        tag = 1;
    }else{
        name.addClass("wrong-input");
        tag = 0;
    }
})
$("#number").blur(function(){
    var number = $("#number");
    var str = number.val();

    var reg = /^2019\d{8}$/;
    if(reg.test(str)){
        number.removeClass("wrong-input");
        flag = 1;
    }else{
        number.addClass("wrong-input");
        flag = 0;
    }
})
$("#join-btn").click(function(){
    var name = $("#name").val();
    var number = $("#number").val()

    if(flag == 1 && tag == 1){

        $.ajax({
            type:"get",
            url:"/",
            dataType:"json",
            data:{
                name:name,
                number:number
            },
            success:function(data){
                if(data != 1)
                {
                    $("#name").val("");
                    $("#number").val("");
                    alert("报名成功！")
                }else{
                    alert("该学号已经报名")
                }
            },
            error:function(){
                alert("报名失败！")
            }
        })
    }else{
        alert("请填写正确的报名信息！")
    }
})