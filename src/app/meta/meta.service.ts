import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MetaService {

  
  private metaEndPoint = 'http://localhost:5000';
  private authEndPoint = 'http://localhost:5001'

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getUser(id: string): Observable<any> {
    return this.httpClient.get<any>(this.metaEndPoint+'/auth/register').pipe(delay(5000));
  } 

  getToken(id: string): Observable<any> {
    const body = { user: id, password: 'Nothing' };
    return this.httpClient.post<any>(this.authEndPoint+'/auth/register', body).pipe(delay(5));
  } 

  validateToken(token: string): Observable<any> {
    const header = new HttpHeaders().set("Authorization", "Bearer " + token+"1");
    return this.httpClient.get<any>(this.metaEndPoint+'/auth/validate', { headers: header}).pipe(delay(1));
  }
}
