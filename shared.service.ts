import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class VesselVisitService {
  constructor(private apiService: CommonApiService) { }
   
  updateVisitList =  new Array();
  
  private messageSource = new BehaviorSubject<any>(this.updateVisitList);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: any) {
   
      console.log("service",message);
    this.messageSource.next(message)
  }
}
