import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './about/links/links.component';
import { InfoComponent } from './about/info/info.component';
import { AuthorsComponent } from './about/authors/authors.component';
import { AuthorComponent } from './about/authors/author/author.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [LinksComponent, InfoComponent, AuthorsComponent, AuthorComponent]
})
export class AboutModule { }
