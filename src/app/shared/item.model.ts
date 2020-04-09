export class Item {
  //item_id, item_name, item_price
  item_id: number;
  item_name: string;
  item_price: number;
}

export class ItemData {
  data: Item[];
  constructor(){
      this.data = null;
  }
}

export class ItemDataResponse {
  success: number;
  message: string;
  data: Item;
  constructor(){
    this.success = null;
    this.message = null;
    this.data = null
  }
}
