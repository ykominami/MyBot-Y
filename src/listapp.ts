import { Appenv } from "./appenv"
import { Dayx } from "./dayx"
import { Infolistx } from "./infolistx"
import { Item } from "./item"
import { BookmarkTable } from "./bookmarktable"
import {
  IItem, StringOrNull
} from "./@types/index.d"
import { Util } from "./util"

export class Listapp {
  constructor() {

  }
  getData(): { [index: string]: IItem } {
    const appEnv = new Appenv();
    const dayx = Dayx.today();
    const infolistx = new Infolistx(appEnv, dayx);
    infolistx.make();

    const item = new Item();

    let name: string = appEnv.getDayStr();
    let url: StringOrNull = appEnv.getUrl();
    if (name != null) {
      item.add(name, url);
    }

    name = "chrom bmk";
    let xstr = "";
    const value = appEnv.getBmId();
    xstr = value == null ? "" : value;
    url = `chrome://bookmarks/?id=${xstr}`;
    item.add(name, url);

    name = `Dynalist ${appEnv.getYearMonthStr()}`;
    url = appEnv.getDynalistUrl();
    item.add(name, url);

    this.get_list_from_bookmarktable(item, appEnv);

    name = `XYA ${appEnv.getYearMonthStr()}`;
    url = appEnv.getDynalistUrl();
    item.add(name, url);

    return item.getArray();
  }

  get_list_from_bookmarktable(item: Item, appEnv: Appenv): void {
    const bkurl = appEnv.getBookmarkListUrl();
    const sheetName = appEnv.getBookmarkListSheetName();
    const bt = new BookmarkTable(bkurl, sheetName);
    item.add(sheetName, bkurl);

    const values = bt.getValues();
    if (values != null) {
      for (const elem of values) {
        let name: StringOrNull = elem[0];
        let url: StringOrNull = elem[1];
        //if (name !== null && url !== null) {
        //  item.add(str_0, str_1);
        //}

        if (name === null) {
          name = "";
        }
        if (url === null) {
          url = "";
        }
        item.add(name, url);
        Util.log(`listapp get_list_from_bookmarktable name=${name} url=${url}`)
      }
    }
    else {
      Util.log("listapp get_list_from_bookmarktable values=null")
    }
  }
}
