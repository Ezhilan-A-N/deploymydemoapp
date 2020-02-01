import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { CircularComponent } from './circular/circular.component';
import { QuickComponent } from './quick/quick.component';

 

@NgModule({
  declarations: [
    AppComponent,
   // DetailsComponent,
    HeaderComponent,
   NotificationsComponent,
   ProfileComponent,
   CircularComponent,
   QuickComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
