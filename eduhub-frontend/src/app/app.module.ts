import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // Add the AppRoutingModule to the imports array
    AppComponent
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  // bootstrap: [AppComponent]
})
export class AppModule { }
