'use strict';

class Device {
   constructor(name) {
      this._name = name;
      this._state = false;
   }

   get name() {
      return this._name;
   }

   get state() {
      return this._state;
   }

   on() {
      this._state = true;
   }

   off() {
      this._state = false;
   }
}



/** 1. RobotVC **/

class RobotVC extends Device {
   constructor(name, state) {
      super(name, state);
      this._charge = 100;
   }

   get charge() {
      return this._charge;
   }

   chargeUp() {
      if ( this._charge < 100 ) {
         this._charge = 100;
      }
   }

   start() {
      if ( this._charge >= 20 ) {
         this.on();
         this._charge -= 20;
      } 
   }
}


/** 2. Alarm **/

class Alarm extends Device {
   constructor(name, state, password) {
      super(name, state);
      this._password = password;
      this._isWarningSignalOn = false;
   }

   get password() {
      return this._password;
   }

   set password(password) {
      const numbers = /^[0-9]+$/;
      if( String(password).match(numbers) ) {
         this._password = password;
      } else {
         this._password = NaN;
      }
   }

   signalOn() {
      this._isWarningSignalOn = true;
   }

   signalCheck() {
      return this._isWarningSignalOn;
   }

   doorOpend(password) {
      if ( this._state = true) {
         this.signalOn();
         if( password  == this._password ) {
            return this._isWarningSignalOn = false;
         } else {
            return this._isWarningSignalOn = true;
         }
      }
   }

}


/** 3. Smart House **/

class SmartHouse {
   constructor(name){
      this._name = name;
      this._devices = [];
   }

   get name() {
      return this._name;
   }

   addDevice(device) {
      this._devices.push(device);
   };

   get devices() {
      return this._devices;
   };

   getDeviceByName(deviceName) {
      let deviceByName;
      this.devices.forEach(item => {
         if (item.name == deviceName) {
            deviceByName = item;
         }
      });
      return deviceByName;
   };

   deleteDeviceByName(deviceName) {
      this.devices.forEach((item, i) => {
         if (item.name == deviceName) {
            this.devices.splice(i, 1);
         }
      });
   };

   onAllDevice() {
      this.devices.forEach(item => {
          item.on();
      });
   };

   offAllDevice() {
      this.devices.forEach(item => {
          item.off();
      });
   };
}


let house = new SmartHouse('SweetHome');

console.log(house.name);

house.addDevice(new RobotVC('Xiaomi', false));
house.addDevice(new Alarm('AJAX', false, 12345678));

house.onAllDevice();

console.log(`state ${house.getDeviceByName('Xiaomi').state}`);
house.getDeviceByName('Xiaomi').start();
console.log(house.getDeviceByName('Xiaomi').charge);


console.log(house.getDeviceByName('AJAX').password);
house.getDeviceByName('AJAX').doorOpend(12334);
console.log(house.getDeviceByName('AJAX').signalCheck());


console.log(house.devices);

house.deleteDeviceByName('Xiaomi');

console.log(house.devices);

house.offAllDevice();
