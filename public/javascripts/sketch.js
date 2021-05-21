let colors;
let capture;

//delayer
let track = true;
let wait = 0;
let lock = false;

let trackingData;

function setup() {
  createCanvas(innerHeight,innerHeight);

  capture = createCapture(VIDEO); //capture the webcam
  capture.position(0,0) ;//move the capture to the top left
  capture.style('opacity',0.5);// use this to hide the capture later on (change to 0 to hide)...
  capture.id("myVideo"); //give the capture an ID so we can use it in the tracker below.
  capture.size(1920,1080);

  //add new color
    tracking.ColorTracker.registerColor('white', function(r, g, b) {
    var threshold = 30,
      dx = r - 255,
      dy = g - 255,
      dz = b - 255;
    if ((r - g) >= threshold && (b - g) >= threshold) {
      return true;
    }
    return dx * dx + dy * dy + dz * dz < 19600;
  });

    colors = new tracking.ColorTracker(['white']);

  tracking.track('#myVideo', colors); // start the tracking of the colors above on the camera in p5

  //start detecting the tracking
  colors.on('track', function(event) { //this happens each time the tracking happens
      trackingData = event.data // break the trackingjs data into a global so we can access it with p5
  });

}

function draw() {
  stroke(255,255,0);
  strokeWeight(4);

  // console.log(trackingData);
  if(trackingData){ //if there is tracking data to look at, then...
    for (let i = 0; i < trackingData.length; i++) { //loop through each of the detected colors
detect(i);
      // console.log( trackingData[i] )   //rect(trackingData[i].x,trackingData[i].y,trackingData[i].width,trackingData[i].height)
    }
  }
  if (lock === true){
    wait++;
    if (wait === 60){
      //mono(0);
      wait = 0;
      track = true;
      lock = false;
      console.log("new allowed");
    }
  }
  //test();
}

function detect(j){
  //console.log("detect");
  //track
  if (track === true){
  rect(trackingData[j].x,trackingData[j].y,50,50);
  console.log("x ",trackingData[j].x,"y",trackingData[j].y);
  lock = true;
  track = false;
  }
}




/*
function json(){
  let async = require("async");

  async.parallel([
      function(callback){
      console.log("one");
      callback();
      },
        function(callback){
          console.log("two");
          callback();
        }
      ],
      function(err, result){
          console.log("finished");
      })

  let obj = {
    table: []
  };
  obj.table.push({id: 1, square:2, webPreferences: {
      nodeIntegration: true
    }});
  let json = JSON.stringify(obj);
  let fs = require('fs');
  fs.writeFile('myfile.json', json, 'utf8', callback);

}
*/