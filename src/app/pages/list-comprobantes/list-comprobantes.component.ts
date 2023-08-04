import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import { Cabecera } from 'src/app/domain/cabecera';
import { Cobro } from 'src/app/domain/cobro';
import { ComprobantesService } from 'src/app/services/comprobantes.service';

@Component({
  selector: 'app-list-comprobantes',
  templateUrl: './list-comprobantes.component.html',
  styleUrls: ['./list-comprobantes.component.css']
})
export class ListComprobantesComponent {
  listadoComprobantesWS: any;
  cobro: Cobro = new Cobro();
  fecha: String = '';
  control: number = 0;
  control2: number = 2;
  control3: number = 0;
  control4: number = 0;
  constructor( private clienteService: ComprobantesService,
    private router: Router){
      console.log('listadoComprobantesWS', this.listadoComprobantesWS)
      this.listadoComprobantesWS =this.clienteService.getAll()
    }
    ngOnInit(): void {
      this.listadoComprobantesWS =this.clienteService.getAll()
    }
    listarcomprobante(){
      this.listadoComprobantesWS =this.clienteService.getAll()
    }

    /*eliminar(cliente: Cliente){
      console.log(cliente.cedula)
      this.clienteService.delete(cliente.cedula).subscribe(data => {
       console.log("rsultado Ws delete", data)
       
      });
      //this.cliente = new Cliente()
      //this.router.navigate(['paginas/nuevo-contacto'], params)      
      this.router.navigate(['paginas/nuevo-cliente'])
    }*/

    
    

    editar(cabecera: Cabecera){
      console.log(cabecera)
      this.cobro.codigo = cabecera.codigo
      this.fecha = new Date().toISOString()
      this.control = this.fecha.length
      this.control4 = this.control
      //this.control3 = this.sumar(this.control4,this.control2)
      console.log(this.control3)
      //this.control2 = this.control -2
      this.cobro.fechahora = new Date().toISOString().replace('T',' ')
      //this.fecha.substring(0,24).replace('T',' ')
      console.log(this.cobro)
      this.clienteService.save1(this.cobro).subscribe(data => {
        console.log("rsultado Ws save", data)
        if (data.codigo != 1111) {
          alert(data.mensaje)
        } else {
          this.cobro = new Cobro()
          this.router.navigate(['paginas/listacomprobantespagados'])
        }
      });
    }
      /*let params: NavigationExtras = {
        queryParams: {
          cliente: cliente
          //,
          //cedula: '0104997041'
        }
      }
      this.router.navigate(['paginas/nuevo-cliente'], params)*/
    }
