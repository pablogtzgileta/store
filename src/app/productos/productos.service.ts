import {Injectable} from '@angular/core';
import {Producto} from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private lastId = 1;

  productos: Producto[] = [
    new Producto(this.lastId++, 'Modelo S', 'Tesla', 'Automovil', 450000, 1),
    new Producto(this.lastId++, 'Modelo 3', 'Tesla', 'Automovil', 780800, 1),
    new Producto(this.lastId++, 'Modelo X', 'Tesla', 'Automovil', 850000, 1),
    new Producto(this.lastId++, 'Modelo Y', 'Tesla', 'Automovil', 155000, 1)
  ];

  private carrito: Producto[] = [];

  constructor() {
  }

  getProductos(): Producto[] {
    return this.productos.slice();
  }

  getCarrito(): Producto[] {
    return this.carrito.slice();
  }

  addCarrito(product: Producto[]) {
    this.carrito = product;
  }

}
