import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
  {path:'home-page', component: HomePageComponent},
  {path:'Repository', component:RepositoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
