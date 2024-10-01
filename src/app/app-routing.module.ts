import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'skills',
    loadChildren: () => import('../app/core/routing/skills-routing.module').then(m => m.SkillsRoutingModule)
  },
  {
    path: 'people',
    loadChildren: () => import('../app/core/routing/persons-routing.module').then(m => m.PersonsRoutingModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('../app/core/routing/tasks-routing.module').then(m => m.TasksRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
