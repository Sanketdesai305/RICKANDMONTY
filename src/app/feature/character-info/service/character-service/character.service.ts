import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private readonly httpClient: HttpClient) { }

  getAllCharacters(): Observable<any> {
    const url = "https://rickandmortyapi.com/api/character";
    return this.httpClient.get(url);
  }

  getCharacterById(id: number): Observable<any> {
    const url = "https://rickandmortyapi.com/api/character/"+id;
    return this.httpClient.get(url);
  }
}
