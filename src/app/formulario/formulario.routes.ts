import { Routes } from "@angular/router";

export default [
    {
        path: '',
        redirectTo: 'empleados',
        pathMatch: 'full'
    },
    {
        path: 'empleados',
        loadComponent: () => import('./empleados/empleados.component')
            .then(m => m.EmpleadosComponent)
    },
    // ... otras rutas
] as Routes;