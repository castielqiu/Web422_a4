import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header-component.component';
import { FooterComponent } from './footer-component/footer-component.component';
import { HomeComponent } from './home-component/home-component.component';
import { BlogComponent } from './blog-component/blog-component.component';
import { PostComponent } from './post-component/post-component.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';
import { PostCardComponent } from './post-card-component/post-card-component.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { PostDataComponent } from './post-data/post-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    PageNotFoundComponent,
    PostCardComponent,
    SearchWidgetComponent,
    LatestPostsComponent,
    CategoriesComponent,
    TagsComponent,
    PostDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
