// source file created by fanjiang.pei@intel

//node.js deps

//npm deps

//app deps
const deviceModule = require('/usr/local/lib/node_modules/aws-iot-device-sdk/device');
const read_sensor = require('./read_th_sensor');

//begin module
const my_topic = 'type/your/topic/here';
const interval = 5000; // 5000ms

const device = deviceModule({
   keyPath: 'your_key.private.key',
   certPath: 'your_cert.cert.pem',
   caPath: 'root-CA.crt',
   clientId: 'your_id',
   region: 'your_region',
   baseReconnectTimeMs: 4000,
   keepalive: 0,
   protocol: 'mqtts',
   port: 8883,
   host: 'your_host.iot.your_region.amazonaws.com.cn',
   debug: true
});

//// uncomment following code block to subscribe to the MQTTs topic $my_topic, and print the mesgs on arrive. 
//device.subscribe(my_topic);
//device.on('message', function(topic, payload) {
//      console.log('message', topic, payload.toString());
//  });

// publish sensor data every $interval.
var timeout = setInterval(function() {
   device.publish(my_topic, JSON.stringify(
      read_sensor() ));
}, interval);

device.on('connect', function() {
      console.log('connect');
   });  
device.on('close', function() {
      console.log('close');
   });
device.on('reconnect', function() {
      console.log('reconnect');
   });
device.on('offline', function() {
      console.log('offline');
   });
device.on('error', function(error) {
      console.log('error', error);
   });
