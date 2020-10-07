'use strict';

function Device( name ) {
   this._name = name;
   this._state = false;
   
}

Device.prototype.getName = function () {
   return this._name;
};

Device.prototype.getState = function () {
   return this._state;
};

Device.prototype.on = function () {
   this._state = true;
};

Device.prototype.off = function () {
   this._state = false;
};

/** 1. RobotVC **/
function RobotVC(name) {
   Device.call(this, name);
   this._charge = 100;
}

RobotVC.prototype = Object.create(Device.prototype);
RobotVC.prototype.constructor = RobotVC;


RobotVC.prototype.getCharge = function () {
   return this._charge;
};

RobotVC.prototype.chargeUp = function () {
   if ( this._charge < 100 ) {
      this._charge = 100;
   }
};

RobotVC.prototype.start = function () {
   this.on();
   this._charge -= 20;
};

/** 2. Alarm **/

function Alarm(name) {
   Device.call(this, name);
   this._password = 12345678;
   this._isWarningSignalOn = false;
}

Alarm.prototype = Object.create(Device.prototype);
Alarm.prototype.constructor = Alarm;


Alarm.prototype.setPassword = function (password) {
   var numbers = /^[0-9]+$/;
   if( String(password).match(numbers) ) {
      this._password = password;
   } else {
      this._password = NaN;
   }
};

Alarm.prototype.getPassword = function () {
   return this._password;
};

Alarm.prototype.signalOn = function () {
   this._isWarningSignalOn = true;
};

Alarm.prototype.signalCheck = function () {
   return this._isWarningSignalOn;
};

Alarm.prototype.doorOpend = function (password) {
   if ( this._state = true) {
      this.signalOn();
      if( password  == this._password ) {
         return this._isWarningSignalOn = false;
      } else {
         return this._isWarningSignalOn = true;
      }
   }
};


/** 3. Smart House **/

function SmartHouse(name) {
   this._name = name;
   this._devices = [];
}

SmartHouse.prototype.getName = function () {
   return this._name;
};

SmartHouse.prototype.addDevice = function (device) {
   this._devices.push(device);
};

SmartHouse.prototype.getDevices = function () {
   return this._devices;
};

SmartHouse.prototype.getDeviceByName = function (deviceName) {
   var deviceByName;
   this.getDevices().forEach(item => {
      if (item.getName() == deviceName) {
         deviceByName = item;
      }
   });
   return deviceByName;

};

SmartHouse.prototype.deleteDeviceByName = function (deviceName) {
   this.getDevices().forEach((item, i) => {
      if (item.getName() == deviceName) {
         this.getDevices().splice(i, 1);
      }
   });


};

SmartHouse.prototype.onAllDevice = function () {
   this._devices.forEach(item => {
       item.on();
   });
};

SmartHouse.prototype.offAllDevice = function () {
   this._devices.forEach(item => {
       item.off();
   });
};

var house = new SmartHouse('SweetHome');

console.log(house.getName());

house.addDevice(new RobotVC('Xiaomi'));
house.addDevice(new Alarm('AJAX'));

house.onAllDevice();

console.log("state " + house.getDeviceByName('Xiaomi').getState());
house.getDeviceByName('Xiaomi').start();
console.log(house.getDeviceByName('Xiaomi').getCharge());

house.getDeviceByName('AJAX').setPassword(123456789);
console.log(house.getDeviceByName('AJAX').getPassword());
house.getDeviceByName('AJAX').doorOpend(12334);
console.log(house.getDeviceByName('AJAX').signalCheck());


console.log(house.getDevices());

house.deleteDeviceByName('Xiaomi');

console.log(house.getDevices());

house.offAllDevice();
