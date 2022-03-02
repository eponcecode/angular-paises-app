import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string ='https://restcountries.com/v3.1';
  private httpRegionParams = new HttpParams()
  .set('fields','fields=alpha3Code,name,capital,region,population,flags,alpha3Code')
  private httpParams = new HttpParams()
  .set('fields','fields=ccn3,name,capital,region,population,flags,ccn3')

  constructor(private http: HttpClient) { 
  }
  buscarNombre(termino:string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }
  buscarCapital(termino:string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }
  buscarRegion(termino:string): Observable<Country[]>{
    //const url = `${this.apiUrl}/region/${termino}`;
    const url = `https://restcountries.com/v2/regionalbloc/${termino}`;
    return this.http.get<Country[]>(url,{params: this.httpRegionParams});
  }
  buscarCodigo(termino:string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Country[]>(url);
  }
}
