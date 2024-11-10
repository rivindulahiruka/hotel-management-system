import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HaderComponent } from './common/hader/hader.component';
import { FooterComponent } from './common/footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import * as AOS from 'aos';
import { RoomDetailsComponent } from './room-details/room-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HaderComponent, FooterComponent, BannerComponent,RoomDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit {
  title = 'hotel-management-system';
  ngOnInit() {
    AOS.init({
      offset: 120,       
      duration: 600,    
      easing: 'ease-in-out', 
      delay: 100,        
      once: true,        
      mirror: false      
    });
  }
}
