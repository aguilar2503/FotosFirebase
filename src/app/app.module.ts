import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { APP_ROUTES } from './app.routes';
import { CargaImagenesService } from './services/carga-imagenes.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';


@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    CargaComponent,
    NgDropFilesDirective,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [CargaImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
