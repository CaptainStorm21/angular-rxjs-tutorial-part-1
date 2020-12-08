import { Component, OnInit } from '@angular/core';
import {of, from} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  ngOnInit(){
    of (2, 4, 6, 8).subscribe(console.log);

    from ([10, 20, 30, 40, 50]).subscribe (
      item => console.log(`result is ${item}`),
      err => console.log(`error has occured ${err}`),
      () => console.log(`complete `)
    )

      from (['Apple 1', 'Apple 2', 'Apple 3']).subscribe (
      apple => console.log(`result is ${apple}`),
      err => console.log(`error has occured ${err}`),
      () => console.log(`complete `)
    )


  }


}
