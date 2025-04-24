import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './HelloWorld/Helloworld.component'
import {PaginaComponent} from './pagina/pagina.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldComponent, PaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
