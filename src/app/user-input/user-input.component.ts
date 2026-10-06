// import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; //[(ngModel)] requires FormsModule
import type { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // even the input type is number for initialInvestment, we are using string type because the input value is always a string. We will convert it to number when we need to use it in calculations.
  // initialInvestment = '1000';
  // annualInvestment = '2000';
  // expectedReturn = '5';
  // duration = '3';
  InitialInvestment = '1000';
  AnnualInvestment = '2000';
  ExpectedReturn = '5';
  Duration = '3';

  initialInvestment = signal<string>(this.InitialInvestment);
  annualInvestment = signal<string>(this.AnnualInvestment);
  expectedReturn = signal<string>(this.ExpectedReturn);
  duration = signal<string>(this.Duration);

  // @Output() calculate = new EventEmitter<InvestmentInput>();

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    // this.calculate.emit({
    //   initialInvestment: parseFloat(this.initialInvestment()),
    //   annualInvestment: parseFloat(this.annualInvestment()),
    //   expectedReturn: parseFloat(this.expectedReturn()),
    //   duration: parseInt(this.duration()),
    // });

    this.investmentService.calculateInvestmentResults({
      initialInvestment: parseFloat(this.initialInvestment()),
      annualInvestment: parseFloat(this.annualInvestment()),
      expectedReturn: parseFloat(this.expectedReturn()),
      duration: parseInt(this.duration()),
    });

    // reset the form
    this.initialInvestment.set(this.InitialInvestment);
    this.annualInvestment.set(this.AnnualInvestment);
    this.expectedReturn.set(this.ExpectedReturn);
    this.duration.set(this.Duration);
  }
}
