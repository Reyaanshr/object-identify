objects = [];
states = "";
img2 = "";

function preload(){
    img2 - loadImage("tv.webp");
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Detecting objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    states = true;
}

function gotResults(error , results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}

function draw(){
    r= random(255);
        g= random(255);
        b= random(255);
        objectDetector.detect(video, gotResult);
    if(states != ""){
        for(i = 0; i < objects.length ; i++){
            percentage = floor(objects[i].confidence * 100);
            fill(r,g,b);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            nofill();
            stroke(r,g,b);
            rect(objects[i].x , objects[i].y , object[i].width , objects[i].height);
            document.getElementById("objectnumber").innerHTML = "Number of objects detected are: " + objects.length;
        }
    }
}