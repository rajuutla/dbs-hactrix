import { Routes } from'@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {NewEntryComponent} from '../new-entry/new-entry.component';

export const routes:Routes = [
    {  path:'home', component: DashboardComponent},
    {  path:'submitForm', component:NewEntryComponent},   
    {  path:'', redirectTo:'/home', pathMatch:'full'}    
];