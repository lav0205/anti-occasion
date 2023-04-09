import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit{

  songs: any;
  constructor() { }

  ngOnInit(): void {

  }
  playSong(){
    let audio = new Audio();
    audio.src = "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3";
    audio.load();
    audio.play();
  }

  two(){
    let audio = new Audio();
    audio.src = "https://www.youtube.com/watch?v=YlUKcNNmywk";
    audio.load();
    audio.play();
  }

  three(){
    let audio = new Audio();
    audio.src = "";
    audio.load();
    audio.play();
  }

  four(){
    let audio = new Audio();
    audio.src = "";
    audio.load();
    audio.play();
  }

  five(){
    let audio = new Audio();
    audio.src = "";
    audio.load();
    audio.play();
  }

  six(){
    let audio = new Audio();
    audio.src = "";
    audio.load();
    audio.play();
  }

  seven(){
    let audio = new Audio();
    audio.src = "";
    audio.load();
    audio.play();
  }

  eight(){
    let audio = new Audio();
    audio.src = "";
    audio.load();
    audio.play();
  }

  nine(){
    let audio = new Audio();
    audio.src = "https://gaana.com/song/apna-banale";
    audio.load();
    audio.play();
  }

  ten(){
    let audio = new Audio();
    audio.src = "";
    audio.load();
    audio.play();
  }

  a(){
    let audio = new Audio();
    audio.src = "";
    audio.load();
    audio.play();
  }

  b(){
    let audio = new Audio();
    audio.src = "";
    audio.load();
    audio.play();
  }

  c(){
    let audio = new Audio();
    audio.src = "";
    audio.load();
    audio.play();
  }

  d(){
    let audio = new Audio();
    audio.src = "";
    audio.load();
    audio.play();
  }

  e(){
    let audio = new Audio();
    audio.src = "";
    audio.load();
    audio.play();
  }

  f(){
    let audio = new Audio();
    audio.src = "";
    audio.load();
    audio.play();
  }

  g(){
    let audio = new Audio();
    audio.src = "";
    audio.load();
    audio.play();
  }

  h(){
    let audio = new Audio();
    audio.src = "C:/Users/DELL/Downloads/Muskurane Ki Wajah Tum Ho_128-(DJMaza).mp3";
    audio.load();
    audio.play();
  }
}
