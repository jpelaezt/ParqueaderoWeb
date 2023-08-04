import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router){

  }
  listar(){
    this.router.navigate(['paginas/listaclientes'])
  }
  nuevo(){
    this.router.navigate(['paginas/nuevo-cliente'])
  }
  listarTarifa(){
    this.router.navigate(['paginas/listatarifas'])
  }
  tarifa(){
    this.router.navigate(['paginas/nuevo-tarifa'])
  }
  listarcomprobante(){
    this.router.navigate(['paginas/listacomprobantes'])
  }
  comprobante(){
    this.router.navigate(['paginas/nuevo-comprobante'])
  }
  listarcomprobanteP(){
    this.router.navigate(['paginas/listacomprobantespagados'])
  }

  listarVehiculo(){
    this.router.navigate(['paginas/listavehiculos'])
  }
}
