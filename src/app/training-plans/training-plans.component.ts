import {Component, OnInit} from '@angular/core';
import {TrainingPlan} from "../trainingPlan.model";
import {Subscription} from "rxjs";
import {TrainingPlansService} from "../trainingPlans.service";

@Component({
  selector: 'app-training-plans',
  templateUrl: './training-plans.component.html',
  styleUrls: ['./training-plans.component.scss']
})
export class TrainingPlansComponent implements OnInit {
  loadedPlans: TrainingPlan[];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private trainingPlansService: TrainingPlansService) {
  }

  ngOnInit() {
    this.errorSub = this.trainingPlansService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.isFetching = true;
    this.trainingPlansService.fetchTrainingPlans().subscribe({
      next: plans => {
        this.isFetching = false;
        this.loadedPlans = plans.trainingPlans;
      },
      error: error => {
        this.error = error.message;
        console.log(error);
      },
      complete: () => {
      }
    });
  }
}
