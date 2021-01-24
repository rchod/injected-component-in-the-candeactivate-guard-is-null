import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { HelloComponent } from "./hello.component";

@Injectable({
  providedIn: "root"
})
export class DeactivateGuard implements CanDeactivate<HelloComponent> {
  canDeactivate(component: HelloComponent): boolean {
    console.log(component);
    if (component && !component.confirm()) {
      if (
        confirm(
          "You have unsaved changes! If you leave, your changes will be lost."
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
}
