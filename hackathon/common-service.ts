import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class StudentService {

  constructor() {}

  private collegeList = new BehaviorSubject(null);
  listOfColleges = this.collegeList.asObservable();

  setSelectedColleges(listOfColleges) {
    this.collegeList.next(listOfColleges);
  }
}
