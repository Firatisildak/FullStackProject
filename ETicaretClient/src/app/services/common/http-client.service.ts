import { Inject, inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string){}

  get<T>(requestParameter: Partial<RequestParameters>){

    private url(requestParameter: Partial<RequestParameters>): string{
      return '';
    }

    let url: string= "";

    url='${this.baseUrl}/${controller}/${action}';

    this.httpClient.get(,)
  }
  post(){
    
  }
}


export class RequestParameters{
  controller? :string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?:string;
}