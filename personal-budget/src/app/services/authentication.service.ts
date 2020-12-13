import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {
  user: Observable<firebase.default.User>;
  public errMsg: any = '';
  private uid: string;

  getUid(): string {
    return this.uid;
  }

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    console.log(this.user.subscribe(user =>
      this.uid = user.uid));
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Signed Up!', value);
        this.router.navigate(['dashboard']);
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
        this.errMsg = err.message;
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Logged In!');
        this.router.navigate(['dashboard']);
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
        this.errMsg = err.message;
      });
  }

  logout() {
    this.firebaseAuth.signOut();
    this.router.navigate(['']);
  }
}
