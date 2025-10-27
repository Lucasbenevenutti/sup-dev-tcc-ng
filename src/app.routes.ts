import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';


export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    { path: '**', redirectTo: '/notfound' },

];
