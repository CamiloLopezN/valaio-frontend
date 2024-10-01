import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/layouts/header/header.component';
import {FooterComponent} from './core/layouts/footer/footer.component';
import {PersonsComponent} from './pages/persons/persons.component';
import {SkillsComponent} from './pages/skills/skills.component';
import {TasksComponent} from './pages/tasks/tasks.component';
import {ButtonComponent} from './shared/ui/button/button.component';
import {InputComponent} from './shared/ui/input/input.component';
import {CardComponent} from './shared/ui/card/card.component';
import {HeaderPagesComponent} from './shared/ui/header-pages/header-pages.component';
import {TaskCreateComponent} from './pages/tasks/task-create/task-create.component';
import {TaskListComponent} from './pages/tasks/task-list/task-list.component';
import {MiloDevSvgComponent} from './shared/ui/svgs/milodev-svg/milo-dev-svg.component';
import {PersonCreateComponent} from './pages/persons/person-create/person-create.component';
import {PersonListComponent} from './pages/persons/person-list/person-list.component';
import {SkillCreateComponent} from './pages/skills/skill-create/skill-create.component';
import {SkillListComponent} from './pages/skills/skill-list/skill-list.component';
import {SearchInputComponent} from './shared/ui/search-input/search-input.component';
import { NotFoundComponent } from './shared/ui/not-found/not-found.component';
import { ModalComponent } from './shared/ui/modal/modal.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PersonsComponent,
    SkillsComponent,
    TasksComponent,
    InputComponent,
    TaskCreateComponent,
    TaskListComponent,
    MiloDevSvgComponent,
    PersonCreateComponent,
    PersonListComponent,
    SkillCreateComponent,
    SkillListComponent,
    NotFoundComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CardComponent,
        HeaderPagesComponent,
        ButtonComponent,
        SearchInputComponent,
        ModalComponent,
        FontAwesomeModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
