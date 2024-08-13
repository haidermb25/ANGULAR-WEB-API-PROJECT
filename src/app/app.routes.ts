import { Routes } from '@angular/router';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { UserComponentComponent } from './components/user-component/user-component.component';

export const routes: Routes = [
    { path: '', redirectTo: '/allItems', pathMatch: 'full' },
    { path: 'allItems',component: AllItemsComponent},
    { path: 'item',
      component: UserComponentComponent
    }
];
