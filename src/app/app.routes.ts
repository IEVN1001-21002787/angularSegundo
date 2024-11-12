import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/features/auth.routes')
    },
    {
        path: 'formulario',
        loadChildren: () => import('./formulario/empleados/emp.routes')
    },
    {
        path: 'res',
        loadChildren: () => import('./formulario/resistencia/res.routes')
    },
    
];
