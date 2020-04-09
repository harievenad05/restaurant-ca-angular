import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderItem } from '../../shared/order-item.model';
import { ItemService } from '../../shared/item.service';
import { Item, ItemData } from '../../shared/item.model';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss']
})
export class OrderItemsComponent implements OnInit {

  formData: OrderItem;
  dataReceived: ItemData;
  itemList: Item[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    private itemService: ItemService
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

}
