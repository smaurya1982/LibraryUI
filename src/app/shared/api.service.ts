import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


public headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('Access-Control-Allow-Origin', '*');

public serverUrl = 'https://librarymangment20210110012425.azurewebsites.net/';
   // public serverUrl = 'https://localhost:44306/';


constructor(private http: HttpClient) { }


httpGetCall(apiUrl){
  return this.http.get(this.serverUrl + apiUrl, { headers: this.headers });
}

  httpPostCall(apiUrl, requestParam){
    return this.http.post(this.serverUrl + apiUrl, requestParam,  { headers: this.headers });
  }


  httpPutCall(apiUrl, requestParam){
    return this.http.put(this.serverUrl + apiUrl, requestParam,  { headers: this.headers });
  }

  httpDeleteCall(apiUrl){
    return this.http.delete(this.serverUrl + apiUrl,  { headers: this.headers });
  }
}
