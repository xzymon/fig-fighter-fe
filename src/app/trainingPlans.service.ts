import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, tap} from "rxjs";
import {TrainingPlan} from "./trainingPlan.model";
import {TrainingPlansGetRequest} from "./trainingPlansGetRequest.model";

@Injectable({
  providedIn: "root"
})
export class TrainingPlansService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  fetchTrainingPlans() : Observable<TrainingPlansGetRequest> {
    return this.http
      .get<TrainingPlansGetRequest>('http://localhost:8080/api/v1/trainingPlan/')
      .pipe(tap((value) => {
        console.log(typeof value)
      }));
  }
}
