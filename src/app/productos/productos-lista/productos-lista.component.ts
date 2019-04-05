import {Component, OnInit} from '@angular/core';
import {Producto} from '../Producto';
import {ProductosService} from '../productos.service';
import {ActivatedRoute, Router} from '@angular/router';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {

  products: Producto[];
  carrito: Producto[];
  productList: boolean;
  product: Producto[] = [];
  count = 0;

  constructor(
    private productService: ProductosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.products = this.productService.getProductos();
    this.carrito = this.productService.getCarrito();
    this.productList = this.router.url.slice(1) === 'productos';
  }

  productHandler(action, product) {
    if (action) {
      this.product.push(product);
      this.count++;
    } else {
      this.product.splice(this.product.findIndex(sProduct => sProduct.id = product.id), 1);
      this.count--;
    }
  }

  addToCart() {
    this.productService.addCarrito(this.product);
  }


}
