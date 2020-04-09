import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderItem } from '../../shared/order-item.model';
import { ItemService } from '../../shared/item.service';
import { Item, ItemData } from '../../shared/item.model';
import { NgForm } from '@angular/forms';
import { OrderService } from '../../shared/order.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss']
})
export class OrderItemsComponent implements OnInit {

  formData: OrderItem;
  dataReceived: ItemData;
  itemList: Item[];
  isValid: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    private itemService: ItemService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {

    this.itemService.getItemsList().subscribe((response: ItemData) => {
      this.dataReceived = response;
      this.itemList = this.dataReceived.data
    });
    this.resetForm()
  }

  resetForm(){
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

  updatePriceAction(event){
    if(event.selectedIndex == 0){
      this.formData.item_price = 0;
      this.formData.item_name = '';
    } else {
      this.formData.item_price = this.itemList[event.selectedIndex-1].item_price;
      this.formData.item_name = this.itemList[event.selectedIndex-1].item_name;
    }
    this.updateTotal();
  }

  updateTotal(){
    this.formData.total = parseFloat((this.formData.quantity * this.formData.item_price).toFixed(2));
  }

  onSubmitAction(form: NgForm){
    if(this.validateForm(form.value)){
      this.orderService.orderItems.push(form.value);
      this.dialogRef.close();
    }
  }

  validateForm(formData: OrderItem){
    this.isValid = true;
    if(formData.item_id == 0){
      this.isValid = false;
    } else if(formData.quantity == 0){
      this.isValid = false;
    }

    return this.isValid
  }

}
