import { EventEmitter, Injectable } from "@angular/core";
import { LoggingServices } from "./LoggingServices.services";
import { Persona } from "./personas.model";

@Injectable()
export class PersonasService{

  personas:Persona[]=[
    new Persona('juan','perez'), 
    new Persona('ricardo','ruiz'),
    new Persona('alejandro', 'barona')
  ];

  constructor(private loggingService:LoggingServices){}

  saludo =  new EventEmitter<number>();

  agregarPersona(persona:Persona){
    this.personas.push(persona);
    this.loggingService.mensajeConsola('agregamos la persona:'+ persona.nombre)

   }
   

}

