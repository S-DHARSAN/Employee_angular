import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';

  array:any =[
    {
      id: "101",
      name:"Mark",
      designation:"TL",
      address:"Chennai",
      salary:"50000"
    },
    {
      id: "102",
      name:"Antony",
      designation:"Manager",
      address:"Chennai",
      salary:"75000"
    },
    {
      id: "106",
      name:"Sathi",
      designation:"SE",
      address:"Salem",
      salary:"40000"
    },
    {
      id: "103",
      name:"Karthi",
      designation:"SE",
      address:"Erode",
      salary:"40000"
    },
    {
      id: "104",
      name:"Hari",
      designation:"AM",
      address:"Coimbatore",
      salary:"60000"
    },
    {
      id: "105",
      name:"Guru",
      designation:"SE",
      address:"Madurai",
      salary:"40000"
    }
  ];

  showMe:boolean=true
  toogle()
  {
    this.showMe=!this.showMe
  }
}
