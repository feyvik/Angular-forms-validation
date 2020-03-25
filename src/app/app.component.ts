import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-forms-validation";
  registrationForm: FormGroup;
  invalidlogin: boolean = false;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      FullName: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  submitRegistrationForm() {
    this.submitted = true;
    this.loading = false;
    if (this.registrationForm.invalid) {
      return;
    }

    const addData = {
      name: this.registrationForm.controls.FullName.value,
      email: this.registrationForm.controls.email.value,
      password: this.registrationForm.controls.password.value,
      phone: this.registrationForm.controls.phone.value
    };
    this.loading = true;
    console.log(addData);
  }
}
