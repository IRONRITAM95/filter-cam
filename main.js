noseX =0 ;
noseY =0 ;

function preload(){
clown_nose = loadImage("PHOTO FILTERS img.png")
}

function setup(){
canvas= createCanvas(300,300);
canvas.center() ;
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video , ModelLoaded);
poseNet.on('pose', posegot);
}

function ModelLoaded(){
    console.log("posenet is initialized")
}

function posegot(results){
    if(results.length > 0){
      console.log(results)
      noseX = results[0].pose.nose.x-15 ;
      noseY = results[0].pose.nose.y-15 ;
    }
}

function draw(){
image(video, 0,0 ,300 ,300);
image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
 save("SNAPCHAT 2.0") ;
}