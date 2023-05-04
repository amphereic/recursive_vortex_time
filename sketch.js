


let angle
let movetree = 5
let yesbranch = 0
let makepass = 30
let startlen = 50
let thickness = 0.09

let treeoff = 10
let videos = []
let currentVideo
function preload() {
  videos.push(createVideo("video_01.mp4"))
  videos.push(createVideo("video_02.mp4"))
  videos.push(createVideo("video_03.mp4"))
  videos.push(createVideo("video_04.mp4"))
  videos.push(createVideo("video_05.mp4"))
  videos.push(createVideo("video_06.mp4"))
  
}

function setup() {
  frameRate(20)
  createCanvas(1080, 720)
  noStroke();
  background(random(255), random(255), random(255), random(20,100))
  let playButton = createButton("press me!")
  playButton.position(50 , 670)
  playButton.style("background-color", color(random(255), random(255), random(255)))
  playButton.style("color", color(random(255), random(255), random(255)))
  playButton.style("font-size", "22px")
  playButton.mousePressed(playRandomVideo)
  currentVideo = random(videos)
  startlen = random(25,120)
  
}
function playRandomVideo() {
  if (currentVideo) {
    currentVideo.pause()
    currentVideo.hide()
  }
  currentVideo = random(videos)
  currentVideo.show()
  currentVideo.loop()
  currentVideo.position(0, 0)
  currentVideo.size(width, height)
  for (let i = 0; i < videos.length; i++) {
    if (videos[i] != currentVideo) {
      videos[i].hide()
    }
  }
}

function draw() {
  image(currentVideo,CENTER,1080,650)
  let len = random(25,120)
  let b = random(255)
  strokeWeight(len * thickness)
  stroke(color(0,0,b,random(50,80)))
  yesbranch = int(random(0,4))
  makepass += 1
  treeoff = random(-len * thickness/2,
                  len*thickness/2)
  if (makepass > 16) {
    movetree += 120
    makepass = 0
  }
  if(movetree > width - 50) {
  movetree = 75 
    for (let slw = 0; slw < 200000; slw++){
      text('hi!',0,0)
    }
   background(currentVideo,0,0,1080,720)
   
    
  }
  translate(movetree+treeoff, height * 1)
  branch(startlen)
  
}
function branch(len) {
  let b = random(255)
  line(0,0,0,-len)
  translate(0,-len)
  if (len > 10) {
    if (yesbranch === 0){
    push()
           stroke(color(0,0,b,random(50,55)))
      strokeWeight(len * thickness)
      rotate(random(-QUARTER_PI*random(1),
                    QUARTER_PI*random(1)))
      branch(len * random(0.4, 0.6))
    pop()
    
    push()
           stroke(color(0,0,b,random(50,90)))
      strokeWeight(len * thickness)
      rotate(random(-QUARTER_PI*random(1),
                    QUARTER_PI*random(1)))
      branch(len * random(0.7, 0.8))
    pop()
  }
  } else if (len <= 10){
    push()
    noStroke()
    let flower = random(1)
    if (flower < 0.10){
      fill(random(50,100),
      random(70,200),
      random(20,
      255))
    } else {
      fill(random(50,120),
          175,
          random(20,80),
          200)
    }
    if (flower < 0.2){
      fill(random(10,200),
      random(11,70),
      random(0,
      255))
    } else {
      fill(random(50,120),
          175,
          random(20,80),
          200)
    }

    ellipse(0,0, random(1,11), random(0,18))
    pop()
    
    startlen = random(50,120)
    translate(movetree+treeoff, height*0.80)
    rotate(0)
  }
  
}