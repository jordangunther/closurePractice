//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();

//Once you do that, invoke inner.

inner();


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var callNumber = callFriend();
callNumber("435-215-9248");




//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

var makeCounter = function() {
  var counter = 0;
  return function() {
    counter++;
    console.log(counter);
  }
}
  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second argument that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

function myFunc (otherFunc, numTimes) {
  var counter = 0;
  return function newFunc() {
    if (counter === numTimes) {
      otherFunc();
    }
    counter++;
  }
}

function otherFunc() {
  console.log('STAHHP');
}

//below is the function that only can be called once

function myFunc (otherFunc) {
  var counter = 1;
  return function newFunc() {
    if (counter === 1) {
      otherFunc();
    }
    counter++;
  }
}