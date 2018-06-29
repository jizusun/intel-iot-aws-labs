
var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

mraa.addSubplatform(mraa.GROVEPI,"0");

//add your code here
var sensor1 = require('jsupm_th02');
var th02 = new sensor1.TH02();

function read_sensor()
{
	//get sensor data
	temp = th02.getTemperature();
	humi = th02.getHumidity();
	return {'temperature':temp,'humidity':humi};
}
function periodicActivity() {
	//read sensor
	var sensor_value = read_sensor();
	console.log(sensor_value);
};

setInterval(periodicActivity, 1000); //call the periodicActivity function every second
