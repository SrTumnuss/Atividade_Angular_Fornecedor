import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotaComponent } from './components/rota/rota.component';
import { FornecedorDetailComponent } from './components/fornecedor-detail/client-detail.component';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';

export const routes: Routes = [

{path: '', component: HomeComponent},
{path:'nova-rota', component: RotaComponent},
{path: 'fornecedor/:id', component: FornecedorDetailComponent},
{path: 'fornecedor', component: FornecedorComponent}, 
{path: '**', component: HomeComponent}



];
