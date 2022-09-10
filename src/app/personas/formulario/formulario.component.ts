import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../personas.model';
import { PersonasService } from '../../personasService';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  inputNombre: String = '';
  inputApellido: String = '';
  index: number;
  modoEdicion:number;

  constructor(
    private router: Router,
    private personasService: PersonasService,
    private route: ActivatedRoute
  ) {
    this.personasService.saludo.subscribe((i: number) =>
      alert('el indice es ' + i)
    );
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.params['modoEdicion'];
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.inputNombre = persona.nombre;
      this.inputApellido = persona.apellido;
    }
  }

  guardarPersona() {
    let persona1 = new Persona(this.inputNombre, this.inputApellido);
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      this.personasService.modificarPersona(this.index, persona1);
    } else {
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.index){
      this.personasService.eliminarPersona(this.index)
    }
    this.router.navigate(['personas']);
    
  }
  
}

