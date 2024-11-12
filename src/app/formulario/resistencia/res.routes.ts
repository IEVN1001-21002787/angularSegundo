import {Route, Routes} from "@angular/router";

export default[
    {
        path: 'resistencia',
        loadComponent:()=>import('./resistencia.component')
    },
]as Routes