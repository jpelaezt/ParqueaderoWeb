import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


import { AppComponent } from './app.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ListClientesComponent } from './pages/list-clientes/list-clientes.component';
import { HeaderComponent } from './template/header/header.component';
import { TarifaComponent } from './pages/tarifa/tarifa.component';
import { ListTarifasComponent } from './pages/list-tarifas/list-tarifas.component';
import { ComprobanteComponent } from './pages/comprobante/comprobante.component';
import { ListComprobantesComponent } from './pages/list-comprobantes/list-comprobantes.component';
import { ListVehiculosComponent } from './pages/list-vehiculos/list-vehiculos.component';
import { ListComprobantesPagadosComponent } from './pages/list-comprobantes-pagados/list-comprobantes-pagados.component';



@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ListClientesComponent,
    HeaderComponent,
    TarifaComponent,
    ListTarifasComponent,
    ComprobanteComponent,
    ListComprobantesComponent,
    ListVehiculosComponent,
    ListComprobantesPagadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
