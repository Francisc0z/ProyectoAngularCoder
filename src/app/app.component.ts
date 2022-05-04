import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoPrueba';
  subtitle="Soy un subtitulo"
  student=0;

  constructor(){
    console.log("hi jhony")
  }

  ngOnInit(){
   
  }
}
