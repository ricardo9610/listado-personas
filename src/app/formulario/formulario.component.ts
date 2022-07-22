import { Component, ElementRef, EventEmitter, Output, ViewChild,  } from '@angular/core';
import { LoggingServices } from '../LoggingServices.services';
import { Persona } from '../personas.model';
import { PersonasService } from '../personasService';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>();
  //@ViewChild('nombreInput') nombreInput:ElementRef;
  //@ViewChild('apellidoInput') apellidoInput :ElementRef;

  inputNombre:String ='';
 inputApellido:String='';

 constructor( private logginServices :LoggingServices, private personasService:PersonasService){
  this.personasService.saludo.subscribe((i:number)=> alert('el indice es '+i)
  );
 }

 agregarPersona(){
  let persona1 = new Persona (this.inputNombre, this.inputApellido)
  //this.logginServices.mensajeConsola('enviamos persona con nombre: '+ persona1.nombre + ' apellido: '+persona1.apellido);
 // this.personaCreada.emit(persona1); ahora utilizamos un servicio no event binding
   this.personasService.agregarPersona(persona1);
 }

}
