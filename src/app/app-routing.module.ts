import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { RegistersComponent } from './registers/registers.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path  : "search", component : SearchComponent
  },
  {
    path : "all-users", component : AllUsersComponent
  },
  {
    path : "register", component : RegistersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
