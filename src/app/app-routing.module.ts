import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './formulario/empleados/empleados.component';

const routes: Routes = [
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.routes').then(m => m.FormularioModule)
  },
  { path: '', redirectTo: '/formulario/empleados', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/formulario/empleados' } // Ruta para manejar rutas no existentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
