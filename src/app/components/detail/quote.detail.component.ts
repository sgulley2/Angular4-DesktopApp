import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrderHeader } from '../../services/onlinesales.service';


@Component({
  selector: 'app-reico-quote-detail',
  templateUrl: './quote.detail.component.html',
  styleUrls: [
      './quote.detail.component.scss',
      '../../../../node_modules/primeng/resources/themes/omega/theme.css',
      '../../../../node_modules/primeng/resources/primeng.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})
export class QuoteDetailComponent {
    title = 'Online Sale';
    order: OrderHeader;

    constructor(
        private route: ActivatedRoute) {
            this.order = JSON.parse(this.route.snapshot.paramMap.get('quote')).data;
    }
}
