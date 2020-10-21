if(!auto.service) {
  toast('无障碍服务未启动！退出！')
  exit()
}

console.show()
console.log('开始领取每日红包...')
console.log('按音量下键停止')
console.log('这部分可能会无法自动，如果异常退出手动领取就好')

device.keepScreenDim(5 * 60 * 1000)

function registerKey() {
  events.observeKey()
  events.onKeyDown('volume_down', function (event) {
      console.log('喵币任务脚本停止了')
      console.log('请手动切换回主页面')
      device.cancelKeepingAwake()
      exit()
  })
}
threads.start(registerKey)

var url = 'm.tb.cn/h.VmVshJD'

app.startActivity({
  action: "VIEW",
  data: "taobao://" + url
})
sleep(2000)

console.log('正在查找开红包按钮...')
var firstButton = idContains('J_MM_RED_COVER_1_0').findOne(15000) // 15秒等待页面加载

if (firstButton == null) {
  console.log('没找到开红包按钮，可能已经领过了')
  device.cancelKeepingAwake()
  exit()
}

sleep(2000)
firstButton.click()
sleep(2000)

// if (textContains('开宝箱')) {
//     console.log('领红包已完成')
//     device.cancelKeepingAwake()
//     exit()
// }

for (var i = 0; i < 2; i++) {
  console.log('正在再次领取...')
  var againButton = idMatches(/J_MM_RED_RESULT_1_0|J_MM_RED_INFO_1_0/).findOne(5000)
  if (againButton == null) {
      console.log('没找到再次领取的入口，退出')
      device.cancelKeepingAwake()
      exit()
  }
  sleep(2000)
  againButton.click()
}

alert('请手动点击再次领取确保没有遗漏。')

console.log('领红包已完成')
console.log('请手动切换回主页面')
device.cancelKeepingAwake()
exit()