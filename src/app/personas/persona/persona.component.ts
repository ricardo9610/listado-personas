import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../personas.model';
import { PersonasService } from '../../personasService';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona:Persona;
  @Input() i:number;

  constructor(private personasService : PersonasService) { }

  ngOnInit(): void {
  }

  saludar(){

    this.personasService.saludo.emit(this.i)

  }

}
