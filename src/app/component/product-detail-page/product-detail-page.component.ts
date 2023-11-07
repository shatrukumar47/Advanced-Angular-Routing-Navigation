import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent {
  product: any = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };
  loading:boolean = false;
  constructor(private activeRoute: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    let id: any = this.activeRoute.snapshot.paramMap.get('id');
    id = parseInt(id);
    console.log(id)
    this.loading = true;
    this.http.get(`https://fakestoreapi.com/products/${id}`).subscribe((res)=>{
      this.product = res;
      this.loading = false;
    })
  }

  handleWishlist(){

  }

  handleBuyNow(){
    
  }
}
