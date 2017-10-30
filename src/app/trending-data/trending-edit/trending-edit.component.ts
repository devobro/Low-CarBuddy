import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { TrendingDataService } from '../trending-data.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-trending-edit',
  templateUrl: './trending-edit.component.html',
  styleUrls: ['./trending-edit.component.css']
})
export class TrendingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') tdForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  

  constructor(private tdService: TrendingDataService) { }

  ngOnInit() {
    this.subscription = this.tdService.startedEditing
        .subscribe(
          (index: number) => {
            this.editedItemIndex = index;
            this.editMode = true;

          }
        );
  }

  onSubmit(form: NgForm) {
  	const value = form.value
  }

  onClear() {
    this.tdForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
