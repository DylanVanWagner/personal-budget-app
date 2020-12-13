import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import ExpenseSchema from '../models/expense';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private userID = this.authenticationService.getUid();
  private dbPath = '/data/' + this.userID + '/expense';

  expense: AngularFireList<ExpenseSchema> = null;

  constructor(private db: AngularFireDatabase, private authenticationService: AuthenticationService) {
    this.authenticationService = authenticationService;
    this.expense = this.db.list(this.dbPath);
    console.log(this.userID);
    this.db = db;
    console.log(this.dbPath);
  }

  public getAll(): AngularFireList<ExpenseSchema> {
    return this.expense;
  }

  create(expense: ExpenseSchema): any {
    return this.expense.push(expense);
  }

  update(uid: string, value: any): Promise<void> {
    return this.expense.update(uid, value);
  }

  delete(uid: string): Promise<void> {
    return this.expense.remove(uid);
  }

  deleteAll(): Promise<void> {
    return this.expense.remove();
  }
}
