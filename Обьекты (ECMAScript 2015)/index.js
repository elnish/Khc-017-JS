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
   _play: false,
   get model() {
      return this._model;
   },
   set model(model) {
      this._model = model;
   },
   ternOn: function() {
      this._play == true;
      return 'play'
    },
    ternOff: function() {
      this._play == false;
      return 'stop'
    }
};


console.log( mp3.ternOn() );
console.log( mp3.ternOff() );
console.log( mp3.model );
mp3.model = "Nokia";
console.log( mp3.model );