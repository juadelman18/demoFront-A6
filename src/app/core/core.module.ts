import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';
import { HeaderComponent } from './shell/header/header.component';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigatorComponent } from './navigator/navigator.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations:
  [ ShellComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavigatorComponent
  ],
  exports: [NavigatorComponent]
})
// declarations: ,NotFoundComponent
export class CoreModule { }
