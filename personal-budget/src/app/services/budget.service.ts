import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import BudgetSchema from '../models/budget';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private userID = this.authenticationService.getUid();
  private dbPath = '/data/' + this.userID + '/budget';

  budget: AngularFireList<BudgetSchema> = null;

  constructor(private db: AngularFireDatabase, private authenticationService: AuthenticationService) {
    this.authenticationService = authenticationService;
    this.budget = this.db.list(this.dbPath);
    console.log(this.userID);
    this.db = db;
    console.log(this.dbPath);
  }

  public getBudget(): AngularFireList<BudgetSchema> {
    return this.budget;
  }

  create(budget: BudgetSchema): any {
    return this.budget.push(budget);
  }

  update(uid: string, value: any): Promise<void> {
    return this.budget.update(uid, value);
  }

  delete(uid: string): Promise<void> {
    return this.budget.remove(uid);
  }

  deleteAll(): Promise<void> {
    return this.budget.remove();
  }
}
