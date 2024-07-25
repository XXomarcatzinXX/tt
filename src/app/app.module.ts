import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseApp } from 'firebase/app';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"checkin-pro-d0da8","appId":"1:270695850365:web:300cb0573b56d514ddac14","databaseURL":"https://checkin-pro-d0da8-default-rtdb.firebaseio.com","storageBucket":"checkin-pro-d0da8.appspot.com","apiKey":"AIzaSyA7oTyDDufIhiXvhoeEDcOfOM3goJyMLXU","authDomain":"checkin-pro-d0da8.firebaseapp.com","messagingSenderId":"270695850365"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())],
  bootstrap: [AppComponent],
})
export class AppModule { }
