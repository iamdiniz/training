import { Injectable } from '@angular/core';
import { Entitie } from '../entities/model/entitie';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  private readonly API = 'api/training';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Entitie[]>(this.API)
      .pipe(
        first(),
        // delay(5000),
        tap(entities => console.log(entities))
      );
  }

  save(record: Entitie) {
    return this.httpClient.post<Entitie>(this.API, record).pipe(first());
    //console.log(record);
  }

}
