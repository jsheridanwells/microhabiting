import { Component } from '@angular/core';
import { Hello, HelloService } from './hello.service';
import { OnInit } from '@angular/core/core';

@Component({
  selector: 'mh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hellos: Hello[] = [];

  constructor(
    private helloService: HelloService
  ) {
  }

  ngOnInit() {
    this.getHellos();
  }

  getHellos() {
    this.helloService.getHellos().subscribe((res: Hello[]) => {
      this.hellos = res;
    });
  }

  addHello(msg: string): void {
    const hello = new Hello(msg);
    this.helloService.postHello(hello).subscribe(res => {
      this.getHellos();
    })
  }

}
