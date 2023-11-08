
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides = [
    {image: 'assets/IMAGENES/imagen.jpeg', text: 'Photo 1'},
    {image: 'assets/IMAGENES/imagenlarg.jfif', text: 'Photo 2'},
    {image: 'assets/IMAGENES/imagen1.jpeg', text: 'Photo 3'},
  ]
}

