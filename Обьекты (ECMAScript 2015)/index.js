'use strict';

// 1

let tv = {
   currentChannel: 1,
   nextChannel() {
       ++this.currentChannel;
   },
   previousChannel() {
       --this.currentChannel;
   },

   setChannel(num) {
       this.currentChannel = num;
   }
};

tv.setChannel(3);
tv.previousChannel();
tv.nextChannel();
tv.nextChannel();

console.log(tv.currentChannel);

// 2

let mp3 = {
   _model: "Sony",
   _state: false,
   _volume: 0,
   get model() {
      return this._model;
   },
   set model(model) {
      this._model = model;
   },
   ternOn() {
      this._state == true;
      return 'play'
   },
   ternOff() {
      this._state == false;
      return 'stop'
   },
   louder() {
      if( this._volume !== 100 ) {
          this._volume += 20;
      } 
   },
   quieter() {
      if( this._volume > 0 ) {
         this._volume -= 20;
      } 
   },
   getVolume() {
      return this._volume;
   }
};


console.log( mp3.ternOn() );
console.log( mp3.model );
mp3.model = "Nokia";
console.log( mp3.model );
mp3.louder();
mp3.louder();
console.log( mp3.getVolume() );
console.log( mp3.ternOff() );