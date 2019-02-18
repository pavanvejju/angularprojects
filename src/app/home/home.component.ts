import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss']
   
})
export class HomeComponent implements OnInit {

	btnText: string	= 'Add an Item'; 
	goalText: string	=	"My First Life goal";

    goals = [];
	//goals = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];
	itemCount: number=this.goals.length;



  	constructor(private _data: DataService) { }

  	ngOnInit() { 

		//	this.itemCount	=	this.goals.length;	   
		
  	//	this._data.goal.subscribe(res=>this.goals=res);
			this._data.fetchUserbyID1().subscribe((res : any[])=>{ 
				let list	=	res;
				for(let obj in list){
				//	console.log("ressss::"+list[obj].sha);
					this.goals.push(list[obj].sha);
				
				}
			});   
			
  	}

  	addItem(){
		this.goals.push(this.goalText);
		this.goalText='';
		this.itemCount	=	this.goals.length;
		//this._data.changeGoal(this.goals);
  	}

  	 removeItem(i) {
	    this.goals.splice(i, 1);
	    //this._data.changeGoal(this.goals);
	  }

}
