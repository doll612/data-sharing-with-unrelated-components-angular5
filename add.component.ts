import { Component, OnInit} from "@angular/core";


@Component({
  selector: "app-add-details",
  templateUrl: "./add-details.component.html",
  styleUrls: ["./add-details.component.scss"]
})
export class AddDetailsComponent {

 list:any;

  constructor(private data: SharedService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.list = message)
  }
 
  newMessage() {
  this.list=['Windstorm','Bombasto','Magneta','Tornado']
    this.data.changeMessage(this.list);
  }
}
