import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppLoaderService {
  constructor(private http: HttpClient) {}

  init() {
    return this.http
      .get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
      .pipe(tap((data) => console.log(data)))
    // .toPromise()
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err));
    // return Promise.resolve().then(() => console.log('service loader init'));
  }
}
