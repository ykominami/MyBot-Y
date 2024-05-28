import { SpreadSheetx } from "./spreadsheetx";
import { Util } from "./util";
import { SSheet } from "./ssheet"
import {
  MultiArrayStringType, MultiArrayStringOrNullType
} from "./@types/index.d"

export class BookmarkTable {
  url: string;
  sheetName: string;
  ssx: SpreadSheetx;
  s_sheet: SSheet;
  constructor(url: string, sheetName: string) {
    this.url = url;
    this.sheetName = sheetName;
    Logger.log("############### BookmarkTable constructor call SpreadSheetx() without arg");
    this.ssx = new SpreadSheetx();
    this.ssx.openByUrl(this.url);
    this.s_sheet = this.ssx.getSheet(this.sheetName);
    // Util.log(`BookmarkTable url=${url}|sheetName=${sheetName}`)
  }
  reform(values: MultiArrayStringType): MultiArrayStringOrNullType {
    Util.log(`X BookmarkTable reform value.size=${values.length}`)
    const values1: MultiArrayStringType = Util.remove_left_blank_cols(values);
    Util.log(`Y BookmarkTable reform value.size=${values.length}`)
    const values2: MultiArrayStringOrNullType = Util.remove_under_the_blank_row(values1);
    Util.log(`Z BookmarkTable reform value.size=${values.length}`)
    return values2;
  }
  // getValues(): any[][] | null {
  getValues() {
    this.s_sheet.fetchAndSetDataRange();

    const values = this.s_sheet.getValues(); // as MultiArrayStringType;

    Util.log(`A BookmarkTable getValues value.size=${values.length}`)
    const x: MultiArrayStringOrNullType = this.reform(values)
    Util.log(`B BookmarkTable getValues value.size=${values.length}`)

    return x
  }
}

// export default BookmarkTable;