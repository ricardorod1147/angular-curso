import { NgModule } from "@angular/core";
import { CounterComponent } from "./componjents/counter/counter.component";


@NgModule({
  declarations:[
    CounterComponent
  ],
  exports: [
    CounterComponent,
  ]
})
export class CounterModule {

}
