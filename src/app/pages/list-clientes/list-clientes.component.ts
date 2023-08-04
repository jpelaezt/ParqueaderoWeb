import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent 
//implements OnInit
 {
  listadoClientesWS: any;
  constructor( private clienteService: ClientesService,
    private router: Router){
      console.log('listadoClientesWS', this.listadoClientesWS)
      this.listadoClientesWS =this.clienteService.getAll()
    }
    ngOnInit(): void {
      this.listadoClientesWS =this.clienteService.getAll()
    }
    listar(){
      this.listadoClientesWS =this.clienteService.getAll()
    }

    eliminar(cliente: Cliente){
      console.log(cliente.cedula)
      this.clienteService.delete(cliente.cedula).subscribe(data => {
       console.log("rsultado Ws delete", data)
       
      });
      //this.cliente = new Cliente()
      //this.router.navigate(['paginas/nuevo-contacto'], params)      
      this.router.navigate(['paginas/nuevo-cliente'])
    }

    

    editar(cliente: Cliente){
      console.log(cliente)
      let params: NavigationExtras = {
        queryParams: {
          cliente: cliente
          //,
          //cedula: '0104997041'
        }
      }
      this.router.navigate(['paginas/nuevo-cliente'], params)
    }
}
