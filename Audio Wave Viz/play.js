var song, beats, pitch, song_time, p_pos, beat_times, info;
var pitch_times = [];
var i = 0;
var bool = false;
const noiseScale = 0.01;
var d = 0.4;
var n = 0.08;

function preload(){
  song = loadSound('assets/bensound-endlessmotion.mp3');
  // song = loadSound('assets/bensound-endlessmotion.mp3_beats_debug.mp3'); //beats debug file
  beats = loadStrings('assets/beats.txt');
  pitch = loadStrings('assets/pitch.txt');
}

function setup() {
  beat_times = float(beats);
  for(var i = 0; i < pitch.length; i++){
    pitch_times[i] = float(pitch[i].split(','));
  }
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(255,255,0);
  song.rate(1);
//  song.play();  // Changes to autoplay rules in Chrome mean this line breaks the sketch. Instead click the mouse to start playback
  fft = new p5.FFT();
  info = "Music track from www.bensound.com";
}

function draw(){
song_time = song.currentTime();

noStroke();
if(bool){
  fill(248,219,101, 15);
} else {
  fill(252,70,153,15);
}
  rect(0,0,width,height);
  if(song_time > beat_times[i]) {
    bool = !bool;
    i++;
  } else if (song_time == 0) {
    i = 0;
  }

p_pos = getPitch(song_time);
var h = map(p_pos, 0, 900, 200, height-300);

fill(22,69,125);
stroke(0);
strokeWeight(2);
wave(h, 0.2);

if (mouseY > height-40 && mouseX < 40){
  noStroke();
  fill(255);
  text(info, 20, height-20);
  }
}

function wave(y, k){
  n = n + d**2;
	strokeWeight(2);
	stroke(0);
	beginShape();
	vertex(-10, height);
	vertex(-10, y);
	for(var i = 0; i < width; i+=2){
  let noiseVal = noise((n + i) * noiseScale, (-n + y) * noiseScale, y * noiseScale);
  vertex(i * 4, noiseVal * height);
	}
  vertex(i+10, y+10);
	vertex(i+10, height+10);
	endShape(CLOSE);

}

function mousePressed(){
  if ( song.isPlaying() ) {
    song.pause();
  } else {
    song.play();
  }
}

function getPitch(time){
  var j = 0;
  var t = pitch_times[0][0];
  while (t < time){
    j++;
    t = pitch_times[j][0];
  }
  return pitch_times[j][1];
}
