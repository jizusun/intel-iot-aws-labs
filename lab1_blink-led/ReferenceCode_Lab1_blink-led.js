
var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

mraa.addSubplatform(mraa.GROVEPI,"0");

//add your code here
var myLed = new mraa.Gpio(512+4);  //LED -- D4
myLed.dir(mraa.DIR_OUT); //set the gpio direction to output
var ledState = true; //Boolean to hold the state of Led

function periodicActivity() {
    myLed.write(ledState ? 1 : 0); //if ledState is true then write a '1' (high) otherwise write a '0' (low)
    ledState = !ledState; //invert the ledState
}

setInterval(periodicActivity, 1000); //call the periodicActivity function every second
