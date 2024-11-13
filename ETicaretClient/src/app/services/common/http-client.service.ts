import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private httpClient: HttpClient, @inject("baseUrl") private baseUrl: string){}

  get<T>(){

  }
  post(){
    
  }
}
