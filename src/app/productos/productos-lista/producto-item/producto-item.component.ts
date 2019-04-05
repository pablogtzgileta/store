import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Producto} from '../../Producto';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {

  @Input() product: Producto;
  @Input() productList: boolean;
  @Output() emisor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selected(event) {
    this.emisor.emit(event.target.checked);
  }
}
