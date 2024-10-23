import {Route, Routes} from "@angular/router";

export default[
    {
        path: 'empleados',
        loadComponent:()=>import('./empleados.component').then(m => m.EmpleadosComponent)
    },
]as Routes