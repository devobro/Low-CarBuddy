import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TrendingDataService } from './trending-data.service';


@Component({
  selector: 'app-trending-data',
  templateUrl: './trending-data.component.html',
  styleUrls: ['./trending-data.component.css']
})
export class TrendingDataComponent implements OnInit, OnDestroy {
  
  private subscription: Subscription;

  constructor(private tdService: TrendingDataService) { }

  ngOnInit() {
    
  }

  onEditItem() {
    
  }

  ngOnDestroy() {
    
  }

}
