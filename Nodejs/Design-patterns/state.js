const { request } = require("express");

const readline = require('readline')
let rs = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let State = Object.freeze({
   offHook: 'off Hook',
   connecting : 'connecting',
   connected : ' connected',
   onHold : ' on hold',
   onHook : ' on hook'
});

let trigger = Object.freeze({
    callDialed : 'dial a number',
    hungUp : ' hang up',
    callConnected : ' call is connected',
    placeOnHold : ' placed on hold',
    takenOffHold: ' taken off hold',
    leftMessage: ' leave a message'
})

//Rules for after which trigger you wanna go on which state
let rules = {};
rules[State.offHook]=[{
    trigger: trigger.callDialed,
    State: State.connecting
},
//  ManyRules .....
];
// rules[State.connecting]=[{
// array of rules
// }];
let state = State.offHook
let exitState = State.onHook

let getinput = function(){

}
// call input function