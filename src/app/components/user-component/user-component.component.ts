import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';
import { user } from '../../../Models/userModel';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent implements OnInit {
  userData:user|null=null
  itemId:number|null=null
  reviewCount=0
  tags:string[]=[]
  faStar = faStar
  constructor(private userService:UserServiceService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((param:ParamMap)=>{
      this.itemId=Number(param.get('id'))
      console.log(this.itemId)
    })
    if(this.itemId!==null){
    this.userService.getUserData(this.itemId).subscribe((data:user) => {
      if(data!=null){
        this.userData=data
        this.reviewCount=this.userData.reviews.length
        console.log("Here I am getting the data")
        if(this.userData.tags && this.userData.tags.length>0)
          {
            console.log("This is the tag: ",this.userData.tags[1])
            this.tags[0]=this.userData.tags[0]
            if(this.userData.tags[1]===undefined){
            this.tags[1]="Mixed "+this.userData.tags[0]
            }
            else{
            this.tags[1]=this.userData.tags[1]
            }
          }
      }
      else{
        console.log("Data object is null")
      }
    });
    
  }
}
  
}
