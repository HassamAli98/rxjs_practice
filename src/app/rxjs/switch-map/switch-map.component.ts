import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {
constructor(private http: HttpClient){}
srcObservable = new BehaviorSubject(1);
innerObservable= of('A','B','C','D')
srcValue: number = 0 



ngOnInit(): void {
  this.srcObservable.subscribe((x)=> {
    this.srcValue = x;
  })
  this.http.get('https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5').subscribe(res => console.log(res,45))
  // this.srcObservable.pipe(
  //   switchMap( val => {
  //     console.log('Source value '+val)
  //     console.log('starting new observable')
  //     return this.innerObservable.pipe(delay(500))
  //   })
  // )
  // .subscribe(ret=> {
  //   console.log('Recd ' + ret,this.srcValue );
  // })

  
}

hitObserverable() {
  this.srcObservable.next(this.srcValue + 1)
}

}


// This example is about switch map in witch we have two obserables one is outer observable(secObservale) and 
// other is inner observable what swith map will do it will cancel the inner observable subscription if the outer observalbe emmits new value
//This case is used when we send request to backend for autoComple on wach key stroke 