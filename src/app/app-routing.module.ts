import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TodosComponent} from "./components/todos/todos.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {EditComponent} from "./components/edit/edit.component";

const rotes: Routes = [
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {
    path: '', component: MainPageComponent, children: [
      {path: 'todos', component: TodosComponent},
      {path:'edit/:id', component:EditComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {
}
