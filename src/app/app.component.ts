import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-practice';
  // a = [1,2,2,2,2,3,2,2,1,3,2,1,2,1,1,2,5,4,3,3,3,3,3]

  // obej:any  = {}

  ngOnInit(): void {
  //  this.createObject();
  // }

  // createObject() {
  //   this.a.forEach((x)=> {
  //    if (x in this.obej) {
  //      this.obej[x] = this.obej[x] + 1
  //    } else {
  //      this.obej[x] = 1
  //    }
  //    console.log(this.obej,666)
  //  })
  }
}
