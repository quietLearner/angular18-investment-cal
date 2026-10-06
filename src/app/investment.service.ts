import { Injectable, signal } from '@angular/core';
import type { InvestmentInput } from './investment-input.model';
import { InvestmentResult } from './investment-result.model';
// “This class is a service that Angular can create and inject, and there should normally be one shared instance for the whole application.”

// means Angular registers the service with the application's root injector.
// So you can inject it into components without manually putting it in a providers array:
@Injectable({ providedIn: 'root' })
export class InvestmentService {
  investmentResults = signal<InvestmentResult[]>([]);
  //   readonly results = this.investmentResults.asReadonly();

  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.investmentResults.set(annualData);
  }
}
