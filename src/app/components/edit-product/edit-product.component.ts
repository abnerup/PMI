import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editProduct: Product = {
    id:'',
    name:'',
    type:'',
    color:'',
    price:0,
  }

  constructor(
    private router : Router,
    private productservice : ProductsService,
    private route : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params) => {
        const id = params.get('id');
        if(id){
          this.productservice.getProduct(id)
          .subscribe({
            next : (product) => {
              this.editProduct = product;
            }
          });
        }
      }
    })
  }

  updateProduct(){
    this.productservice.updateProduct(this.editProduct.id,this.editProduct).subscribe({
      next:(response) => {
        this.router.navigate(['products']);
      },
      error:(error) => {
        console.log(error)
      }
    })
  }
}
