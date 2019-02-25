var SMSru = require('sms_ru');
var sms = new SMSru('9633A412-60A1-7361-5B58-D56838DB5363');

sms.sms_send({
  to: '79620355515',
  text: 'Ку'
}, function(e){
  console.log(e.description);
});