auto();

console.show();

// var postpone = rawInput("全局延迟设定(建议1-5，越低越快，越高越稳定但慢 官方Q群：565157555");

// postpone=postpone*1000;

postpone = 2000;

launch("com.taobao.taobao");

sleep(5000);

/*

setScreenMetrics(device.width, device.height);

click(685,210);

*/

desc("搜索").findOne().click();

sleep(postpone);

id("searchEdit").findOne().setText("双十一");

sleep(postpone);

id("searchbtn").findOne().click();

sleep(postpone*2);



var enter=desc("进入").findOne();

click(enter.bounds().centerX(),

enter.bounds().centerY());

sleep(postpone*2);

text("活动链接").findOne().click();

sleep(postpone*2);

text("赚喵币").findOne().click();

sleep(postpone*2);

while (true) {

    var golook = text("去浏览").findOnce();

    if (golook) {

        golook.click();

        sleep(23000);

        back();

        sleep(500);

    } else{
      console.log("已无去浏览任务");
      break;
    }

        

}



while (true) {

    var golook = text("去完成").findOnce(1);

    if (golook) {

        golook.click();

        sleep(16000);

        back()

        sleep(3000);

        sleep(1000);
        continue

    } else

        break;

}

console.log("浏览任务已经完成");

indexInParent(0).text("关闭").findOne().click();

sleep(postpone);

console.log("开始升级");

var merge = textContains("喂猫升级").findOne();

while (true) {

    merge.click();

    sleep(postpone);

    var receive = textContains("开心收下").findOnce();

    if (receive) {

        receive.click();

        //sleep(postpone);

    }

    var non_enough=text("哎哟，喵币不足啦").findOnce();

    if(non_enough){

        indexInParent(3).text("关闭").findOne().click();

        break;

        }

    var decoration=text("领取成就勋章").findOnce();

    if(decoration){

        indexInParent(4).text("关闭").findOne().click();

        break;

        }

}

console.log("执行完毕，开始拍猫");



// var num=rawInput("输入拍猫次数（中途不可退，次数别太多）");
var num = 10;

while(num--){



text("我的猫，点击撸猫").findOne().click();

sleep(200);

}