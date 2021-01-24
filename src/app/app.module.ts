import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RouterModule, Routes } from "@angular/router";
import { DeactivateGuard } from "./deactivate.guard";
import { NextComponent } from "./next/next.component";

const routes: Routes = [
  {
    path: "home",
    component: HelloComponent,
    canDeactivate: ["canDeactivateTeam"]
  },
  { path: "next", component: NextComponent },

  { path: "", redirectTo: "/home", pathMatch: "full" }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: "canDeactivateTeam",
      useValue: (cmp: HelloComponent) => {
        console.log("==============>", cmp);
        return true;
      }
    }
  ],
  declarations: [AppComponent, HelloComponent, NextComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
