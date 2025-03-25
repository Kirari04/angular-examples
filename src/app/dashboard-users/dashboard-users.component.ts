import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { catchError, Observable, Observer, Subscription, throwError } from 'rxjs';
import { AdminmenuComponent } from "../components/adminmenu/adminmenu.component";

@Component({
  selector: 'app-dashboard-users',
  imports: [AdminmenuComponent],
  templateUrl: './dashboard-users.component.html',
  styleUrl: './dashboard-users.component.css'
})

@Injectable({
  providedIn: 'root'
})
export class DashboardUsersComponent {
  Arr = Array;

  private apiUrl = "https://jsonplaceholder.typicode.com/users"
  users: User[] = [];
  isLoading = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getData().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      },
      complete: () => {
        console.log('User fetching completed.'); // Optional
        setTimeout(() => {
          this.isLoading = false;
        }, 800)
      }
    });
  }

  getData(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

}


export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}