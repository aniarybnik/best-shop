import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { MainPageComponent } from './admin/main-page/main-page.component';
import { UsersListComponent } from './admin/users-list/users-list.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: MainPageComponent,
            },
            {
                path: 'users',
                component: UsersListComponent,
            }
        ]
    },
];

export const AdminRouting: ModuleWithProviders = RouterModule.forChild(routes);
