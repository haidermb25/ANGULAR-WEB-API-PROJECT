import { UserServiceService } from './../../service/user-service.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { user } from '../../../Models/userModel';
import { UserComponentComponent } from '../user-component/user-component.component';
import { Router,RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-all-items',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule,UserComponentComponent,RouterOutlet],
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {
  itemId:number|undefined=0
  allItemPage:number=0
  faStar = faStar;
  data: user[] | null = null; // Ensure data is an array or null

  constructor(private userService: UserServiceService,private route:Router) {}

  ngOnInit(): void {
    this.userService.getAllData().subscribe((data: any) => { // Use 'any' for now
      console.log(data);
      if (data && data.products) {
        this.data = data.products; // Assuming 'products' is the array of products in your API response
      } else {
        this.data = []; // Initialize to empty array if 'products' is not found
      }
    });
  }

  //In this function we pass the id to next component
  passItemId(item:user){
      // this.itemId=item.id
      // this.allItemPage=1
      this.route.navigate(['item'],{queryParams:{id:item.id}})
  }

  //Here we change the allItemPage value to come back on this page by pressing 
  //Button on the vchild component
  changePageId(){
    this.allItemPage=0
    console.log(this.allItemPage)
  }

}
