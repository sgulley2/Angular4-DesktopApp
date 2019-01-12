import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { OnlineSalesService, OnlineSales, OrderHeader } from '../../services/onlinesales.service';


@Component({
  selector: 'app-reico-quotes',
  templateUrl: './quote.component.html',
  styleUrls: [
      './quote.component.scss',
      '../../../../node_modules/primeng/resources/themes/omega/theme.css',
      '../../../../node_modules/primeng/resources/primeng.min.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class QuoteComponent
  implements OnInit {

    title = 'View Listed Quote Requests';
    loading = true;
    orderHeaders: OrderHeader[];

    constructor(private salesService: OnlineSalesService,
        private router: Router) {}

    ngOnInit() {
        this.salesService.getOnlineSales()
            .subscribe((sales: OnlineSales) => {
                this.orderHeaders = sales.order_headers;
                this.loading = false;
            }, () => { this.loading = false; });
    }

    quoteDetails(quote): void {
        this.router.navigate(['/quote-details', {quote: JSON.stringify(quote)}]);
    }
}
