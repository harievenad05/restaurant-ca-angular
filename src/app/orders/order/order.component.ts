import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(public service: OrderService) { }

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
  }

  addOrEditOrderItem(orderItemIndex, orderId){

  }

}
