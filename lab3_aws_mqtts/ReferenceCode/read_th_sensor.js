// source file add by fanjiang.pei@intel

var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

mraa.addSubplatform(mraa.GROVEPI,"0");

var sensor1 = require('jsupm_th02');
var th02 = new sensor1.TH02();

function read_sensor(){
   //get sensor data
   temp = th02.getTemperature();
   humi = th02.getHumidity();
   var timestamp = Math.floor(new Date()/1000);
   var result = {'temperature':temp,'humidity':humi, 'timestamp':timestamp};
   console.log(result)
   return result;
}

// export the function for other module use
module.exports = read_sensor
