import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppLoaderService } from './app-loader.service';

import { AppComponent } from './app.component';

export function basicLoader() {
  return () => {
    console.log('basic loader');
    // return Promise.reject().catch(() => console.log('loader failed'));
    // return Promise.resolve().then(() => console.log('loader success'));
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('delayed init');
        resolve();
      }, 3000);
    });
  };
}
export function serviceLoader(appLoader: AppLoaderService) {
  return () => appLoader.init();
}
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: basicLoader,
      deps: [],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: serviceLoader,
      deps: [AppLoaderService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
