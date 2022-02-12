import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'homepage', component: HomePageComponent},
  {path:'user',component:UserComponent},
  {path:'repository', component:RepositoryComponent},
  { path:'**', component:NotFoundComponent},
  
  { path: '', redirectTo:"/home-page", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
