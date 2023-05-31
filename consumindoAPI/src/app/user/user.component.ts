import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userList: any;
  constructor(private httpClient: HttpClient) {
    this.userList=[];
  }

  ngOnInit(): void {
    this.getUserList()
  }

  getUserList() {
    this.httpClient.get('http://localhost:8010/pessoa/v1').subscribe((result: any)=>
    {
      this.userList=result;
    })
  }
}
