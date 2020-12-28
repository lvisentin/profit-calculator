import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formCalc = this.formBuilder.group({
    capital: '',
    yield: '',
    contribution: '',
    months: '',
  })

  public total: number;

  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  public calculate(): void {
    console.log(this.formCalc.value)

    const contribution = parseFloat(this.formCalc.get('contribution').value);
    const i = parseFloat(this.formCalc.get('yield').value) / 100;
    const n = parseFloat(this.formCalc.get('months').value);
    const inicial = parseFloat(this.formCalc.get('capital').value);
    console.log(contribution, inicial, i, n)

    const s = contribution * ((Math.pow((1 + i), n)) - 1) / i;
    const s2 = (inicial  * (Math.pow((1 + i), n))) + s;

    const final = s2;
    console.log(s, s2)
    this.calcContributions(contribution, inicial, i, n);
    this.calcValues(contribution, inicial, i, n);
    this.total = final;
  }

  calcContributions(contribution, inicial, i, n) {
    let annualContributions = [];
    let lastContribution = 0;
    for(let i = 1; i <= (n/12); i++) {
      const annualContribution = i == 1 ? (contribution * 12) + lastContribution + inicial: (contribution * 12) + lastContribution;
      annualContributions.push({year: i, value: annualContribution});
      lastContribution = annualContribution;
    }
    console.log(annualContributions)
  }

  calcValues(contribution, inicial, i, n) {
    let annualValues = [];
    let lastValue = 0;

    console.log(contribution, inicial, i, n)

    for(let t = 1; t <= (n/12); t++) {
      const s = contribution * ((Math.pow((1 + i), 12 * t)) - 1) / i;
      const s2 = (inicial  * (Math.pow((1 + i), 12 * t))) + s;
      annualValues.push({year: t, value: s2});
      lastValue = s2;
    }
    console.log(annualValues)
  }

}


