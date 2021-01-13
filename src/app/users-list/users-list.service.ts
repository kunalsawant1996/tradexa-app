import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor(private http: HttpClient) { }
  getAllUsers(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/users', { observe: 'response' })
      .pipe(map(res => {
        if (res.status == 200) {
          return res;
        }
      }));
  }

}
