import { Util } from "./util"

import {
  ItemArray, StringOrNull
} from "./@types/index.d"

export class Item {
  itemArray: ItemArray;
  constructor() {
    this.itemArray = {};
  }
  add(name: string, url: StringOrNull): void {
    this.itemArray[name] = { url: url, name: name };
    // const value = this.itemArray[name].url;
    // Util.log(`Item add ${value}`);
  }
  getArray(): ItemArray {
    return this.itemArray;
  }
}

// export default Item;