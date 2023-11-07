import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product.interface';
import { CRUDServiceService } from 'src/app/service/crud-service.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = false;
  constructor(private crud: CRUDServiceService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.crud.getProducts().subscribe((res)=>{
      this.products = res;
      this.loading = false;
    })
  }
}
