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
    // this.helloService.getHello().subscribe((res: Hello) => {
    //   this.helloMessage = res.message;
    // });
    this.hellos = this.generateTestHellos();
  }

  generateTestHellos(): Hello[] {
    return [
      new Hello('hello'),
      new Hello('is it'),
      new Hello('me you re'),
      new Hello('looking for'),
    ];
  }

  addHello(msg: string): void {
    this.hellos.push(new Hello(msg));
  }
}
