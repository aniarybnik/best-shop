import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: AdminComponent,
        // children: [
        //     {
        //         path: '',
        //         component: MainPageComponent,
        //     },
        // ]
    },
    
]

export const AdminRouting: ModuleWithProviders = RouterModule.forChild(routes)