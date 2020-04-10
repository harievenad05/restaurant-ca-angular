import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/order.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderItemsComponent } from '../order-items/order-items.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(public service: OrderService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      order_id: null,
      order_no: Math.floor(100000+Math.random()*900000).toString(),
      customer_id: 0,
      pay_method: '',
      grand_total: 0
    }
    this.service.orderItems=[];
  };

  addOrEditOrderItem(orderItemIndex, orderId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {orderItemIndex, orderId}
    this.dialog.open(OrderItemsComponent, dialogConfig);
  };

  onDeleteOrderItem(orderItemId: number, index: number){
    this.service.orderItems.splice(index, 1)
  }

}
