import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
    <form novalidate [formGroup]="sfrm" class="calform">
      <input type="text" formControlName="name" />
      <button type="submit">submit</button>
    </form>
    <a [routerLink]="['/next']">next</a>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  sfrm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.sfrm = this.fb.group({
      name: [""]
    });
  }

  confirm() {
    return this.sfrm || !this.sfrm.dirty;
  }
}
