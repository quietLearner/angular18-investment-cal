import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { type InvestmentInput } from './investment-input.model';
import { InvestmentResult } from './investment-result.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  // investmentResults: InvestmentResult[] = [];
  // single is function?
  // investmentResults = signal<InvestmentResult[]>([]);
  // onCalculateInvestmentResults(data: InvestmentInput) {
  //   const { initialInvestment, annualInvestment, expectedReturn, duration } =
  //     data;
  //   const annualData = [];
  //   let investmentValue = initialInvestment;
  //   for (let i = 0; i < duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //     investmentValue += interestEarnedInYear + annualInvestment;
  //     const totalInterest =
  //       investmentValue - annualInvestment * year - initialInvestment;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment * year,
  //     });
  //   }
  //   // this.investmentResults = annualData;
  //   this.investmentResults.set(annualData);
  // }
}
