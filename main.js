song = "";

leftWristX = 0;
rightWristX = 0;

leftWristY = 0;
rightWristY = 0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song = loadSound("music.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
          
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("leftWrist x = "+leftWristX+"rightwrist x = "+rightWristX);

        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWrist y = "+leftWristY+"rightwrist y = "+rightWristY);
       
         
    }
}