import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderItem } from '../../shared/order-item.model';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss']
})
export class OrderItemsComponent implements OnInit {
  formData: OrderItem;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>
  ) { }

  ngOnInit(): void {
    this.formData = {
      order_item_id: null,
      order_id: this.data.orderId,
      item_id: 0,
      item_name:'',
      quantity: 0,
      item_price: 0,
      total: 0
    }
  }

}
