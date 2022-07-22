import { Component, OnInit } from '@angular/core';
import { LoggingServices } from './LoggingServices.services';
import { Persona } from './personas.model';
import { PersonasService } from './personasService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Listado de Personas';
  personas:Persona[]=[];
  
  constructor(private loggingServices: LoggingServices,private personasService:PersonasService){}
  
  
  ngOnInit(): void {

    this.personas = this.personasService.personas;
   
  }
 
 



 
}
