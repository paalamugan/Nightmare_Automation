import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cilentside';
desc:Description=new Description('');
constructor(private testservice:TestServiceService){}
  nightmare(event){
    if(this.desc.description !=''){
     this.testservice.goto(this.desc)
    .subscribe((response) => {
      this.desc.description="";
     console.log(response);
    });
  }else{
    alert("please type any text and click");
  }
}
}
export class Description{
constructor(public description:string){}
}
