canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=20;
rover_y=20;
background_image="mars.jpg";
rover_image="rover.png";
function add(){
    img=new Image();
    img.onload=uploadbackground;
    img.src=background_image;
    rover_img=new Image();
    rover_img.onload=uploadrover;
    rover_img.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="37"){
    left();
    console.log("left");
    }
    if(keyPressed=="38"){
        up();
        console.log("up");
        }
        if(keyPressed=="39"){
            right();
            console.log("right");
            }
            if(keyPressed=="40"){
                down();
                console.log("down");
                }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrrow is pressed"+"x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrrow is pressed"+"x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrrow is pressed"+"x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrrow is pressed"+"x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}