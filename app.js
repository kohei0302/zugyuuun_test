ZGN(function()
{
  // 17番ピンで動作させます
  var ledPin = '1';

  // TerminalのGPIOインスタンスを取得します
  var gpio = ZGN.term('1').gpio;

  // 指定ピンを出力に設定
  gpio.pinMode(ledPin, ZGN.OUTPUT);

  // ONボタンをクリック
  $(document).on('click', '#on', function() {
    gpio.digitalWrite(ledPin, ZGN.HIGH, function (){
      console.log('HIGH');
    }); // 点灯
  });

  // OFFボタンをクリック
  $(document).on('click', '#off', function() {
    gpio.digitalWrite(ledPin, ZGN.LOW, function (){
      console.log('LOW');
    }); // 消灯
  });

  setInterval(function() {
    gpio.digitalRead(ledPin, function (data){
      console.log(data);
    }); // 消灯
  }, 100);
});
