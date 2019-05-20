import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {MainModule} from './main/main.module';


import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {HttpService} from './services/http.service';
import {SpyInterceptor} from './services/spy.interceptor';
import {AuthInterceptor} from './services/auth.interceptor';
import {AppRoutingModule} from './app-routing/app-routing.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    MainModule,
    AppRoutingModule,
  ],
  providers: [HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpyInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
