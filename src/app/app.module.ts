import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/features/home/home.component';
import { MyCompComponent } from '@src/app/components/my-comp/my-comp.component';
import { AboutMeComponent } from '@src/app/features/about-me/about-me.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { ImageModalModule } from './components/image-modal/image-modal.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyCompComponent,
    AboutMeComponent,
    SiteHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    ImageModalModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
