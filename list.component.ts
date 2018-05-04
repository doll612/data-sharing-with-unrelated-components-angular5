import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/...';

@Component({
  selector: 'app-listComponent',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent{

constructor(private sharedService: SharedService) {
    
  }
  
  ngOnInit() {
    this.sharedService.currentMessage.subscribe(message => {
      this.list = [];
      this.list = message
    })
    
    }
