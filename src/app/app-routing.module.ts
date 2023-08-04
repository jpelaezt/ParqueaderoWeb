import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientesComponent } from './pages/list-clientes/list-clientes.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { TarifaComponent } from './pages/tarifa/tarifa.component';
import { ListTarifasComponent } from './pages/list-tarifas/list-tarifas.component';
import { ListComprobantesComponent } from './pages/list-comprobantes/list-comprobantes.component';
import { ComprobanteComponent } from './pages/comprobante/comprobante.component';
import { ListComprobantesPagadosComponent } from './pages/list-comprobantes-pagados/list-comprobantes-pagados.component';
import { ListVehiculosComponent } from './pages/list-vehiculos/list-vehiculos.component';
const routes: Routes = [
    {path: "paginas/listaclientes", component: ListClientesComponent},
    {path: "paginas/nuevo-cliente", component: ClienteComponent},
    {path: "paginas/listatarifas", component: ListTarifasComponent},
    {path: "paginas/nuevo-tarifa", component: TarifaComponent},
    {path: "paginas/listacomprobantes", component: ListComprobantesComponent},
    {path: "paginas/nuevo-comprobante", component: ComprobanteComponent},
    {path: "paginas/listacomprobantespagados", component: ListComprobantesPagadosComponent},
    {path: "paginas/listavehiculos", component: ListVehiculosComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }