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

// 1. Выбрать первое устройство - Робот пылесос
// 2. Чертеж первого устройства
//    класс RobotVC
//       состояние
//          _name : String
//          _state : Boolean
//          _charge : Number (0 - 100 %)
//       поведение
//          getName() : String
//          getState() : Boolean
//          on() : void
//          off() : void
//          getCharge() : Number
// 	      chargeUp(): void

function RobotVC(name) {
   Device.call(this, name);
   this._isEmpty = true;
   this._charge = 100;
}

RobotVC.prototype = Object.create(Device.prototype);
RobotVC.prototype.constructor = RobotVC;


RobotVC.prototype.getCharge = function () {
   if( this._charge < 0 ) {
      this._charge = 0;
   } else if( this._charge > 100 ) {
      this._charge = 100;
   } else {
      this._charge = this._charge;
   }
   return this._charge;
};

RobotVC.prototype.chargeUp = function () {
   if ( this._charge < 100 ) {
       this._charge += 100 - this._charge;
   }
};

RobotVC.prototype.start = function () {
   this.on();
   this._charge -= 20;
};

// const vacuum = new RobotVC('Xiaomi');
// console.log(vacuum);
// vacuum.start();

// console.log(vacuum.getCharge());
// vacuum.chargeUp();
// console.log(vacuum.getCharge());

/** 1. Alarm **/


// 4. Выбрать второе устройство:
//    Сигнализацтя.
// 5. Чертеж второго устройства:
//    класс Alarm
//       состояние:
//          _name: String
//          _state: Boolean
//          _password: Number (numbers from 0 to 9)
// 	 _isWarningSignalOn: Boolean
//       поведение:
//          getName: String
//          on: void
//          off: void
//          getState: Boolean
//          setPassword(password) : Number
// 	      getPassword(): Number
//          doorOpend(): void
// 6. Набор кода для второго устройства (прототипное ООП)

function Alarm(name) {
   Device.call(this, name);
   this._password = '12345678';
   this._isWarningSignalOn = false;
}

Alarm.prototype = Object.create(Device.prototype);
Alarm.prototype.constructor = Alarm;


Alarm.prototype.setPassword = function () {
   var numbers = /^[0-9]+$/;
   var pas = prompt('Enter the password, it should contain numbers from 0 to 9', '');
   while(!pas.match(numbers)) {
      pas = prompt('Please, enter just numbers from 0 to 9', '');
   }
   this._password = pas;
};

Alarm.prototype.getPassword = function () {
   return this._password;
};

Alarm.prototype.signalOn = function () {
   this._isWarningSignalOn = true;
   console.log('Warning');
};

Alarm.prototype.doorOpend = function () {
   if ( this._state = true) {
      this.signalOn();
      var controlPas = prompt('Please, enter the password', '');
      if( controlPas  == this._password ) {
         this._isWarningSignalOn = false;
         console.log('Ok')
      } else {
         console.log('Call the police!')
      }
   }
 
};

// const alarm = new Alarm('AJAX');
// alarm.on();
// alarm.setPassword();
// alarm.doorOpend();


// 8. Чертеж класса Дом
//    класс SmartHouse
//       состояние
//          _name: String
//          _devices: [Object]
//       поведение
//          getName(): String
//          addDevice(device): void
//          getDevices(): [Object]
//          getDeviceByName(name): Object
//          deleteDeviceByName(name): void
//          offAllDevice(): void
// 9. Набор кода для класса Дом

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

console.log(house.getDeviceByName('AJAX').setPassword());
console.log(house.getDeviceByName('AJAX').getPassword());
console.log(house.getDeviceByName('AJAX').doorOpend());

console.log(house.getDevices());

house.deleteDeviceByName('Xiaomi');

console.log(house.getDevices());

house.offAllDevice();
