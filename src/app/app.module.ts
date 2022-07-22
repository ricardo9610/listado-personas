import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoggingServices } from './LoggingServices.services';
import { PersonasService } from './personasService';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [LoggingServices,
              PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
