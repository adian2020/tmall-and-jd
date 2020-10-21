auto.waitFor();
var height = device.height;
var width = device.width;
// console.log("\n设备宽" + width + "\n" + "设备高" + height + "\n" + "手机型号" + device.model + "\n安卓版本" + device.release)
setScreenMetrics(width, height);

console.show()
if (!auto.service) {
  console.log('无障碍服务未启动！退出！')
  exit()
}

toast('开始完成喵币任务...')
console.log('按音量下键停止')

lingqu();

function lingqu() {
    app.launchApp("手机淘宝");
    console.log("打开淘宝")
    sleep(6000);
    click(600, 1235);//进入活动页
    sleep(6000);



    // click(900, 1320);
    // console.log("领金币")
    // id("_KivZw5").findOne().click();//点猫  领金币
    // //浏览15秒领金币
    // sleep(1500);
    // while(text("去喂猫 赚更多喵币").exists()) {
    //   console.log("!11");
    //     text("去喂猫 赚更多喵币").findOne().click();
    //     }



    click(920, 2100);
    console.log("点击赚喵币")
    sleep(1500);
    if (text("签到").exists()) {
        text("签到").findOne().click();
        sleep(1600);
        console.log("签到成功")
    }
    sleep(1500);
    while (text("去浏览").exists()) {
        console.log("存在去浏览");
        text("去浏览").findOnce().click();
        sleep(1500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(2500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(10000);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(8000);
        back();
        sleep(1600);
    }
    while (text("去完成").findOnce(1)) {
        //要支持的动作
        console.log("存在可点击任务");
        text("去完成").findOnce(1).click();
        sleep(2500);
        swipe(width / 2, height - 600, width / 2, 0, 500);
        sleep(3500);
        swipe(width / 2, height - 600, width / 2, 0, 500);
        sleep(10000);
        swipe(width / 2, height - 600, width / 2, 0, 500);
        sleep(9000);
        back();
        sleep(1000);
    }
    while (textMatches("去搜素").exists()) {
      //要支持的动作
      console.log("存在可点击任务");
      textMatches("去搜索").findOne().click();
      sleep(2500);
      swipe(width / 2, height - 600, width / 2, 0, 500);
      sleep(3500);
      swipe(width / 2, height - 600, width / 2, 0, 500);
      sleep(10000);
      swipe(width / 2, height - 600, width / 2, 0, 500);
      sleep(9000);
      back();
      sleep(1000);
  }
   

  console.log("执行完毕，开始拍猫");
  sleep(1000)
  indexInParent(0).text("关闭").findOne().click();


  // var num=rawInput("输入拍猫次数（中途不可退，次数别太多）");
  var num = 300;
  
  while(num--){
  
  text("我的猫，点击撸猫").findOne().click();
  
  sleep(300);
  
  }

    console.log("s所有可执行任务结束");
    exit();

}
