import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../interface/root';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Root[]> {
    return this.http.get<Root[]>(`${this.apiUrl}`);
  }

  getUser(uuid: number = 1): Observable<Root> {
    return this.http.get<Root>(`${this.apiUrl}/<int:pk>/`);
  }

  createUser(user: Root): Observable<Root> {
    return this.http.post<Root>(`${this.apiUrl}`, user);
  }
}
