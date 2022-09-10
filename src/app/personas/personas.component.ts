import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingServices } from '../LoggingServices.services';
import { Persona } from '../personas.model';
import { PersonasService } from '../personasService';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas:Persona[]=[];
  
  constructor(
              private personasService:PersonasService,
              private router:Router){}
  
  
  ngOnInit(): void {

    this.personas = this.personasService.personas;
   
  }
  agregar(){
    this.router.navigate(['personas/agregar '])
  }



}
