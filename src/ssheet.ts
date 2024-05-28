import { Util } from "./util"
import { MultiArrayStringType } from "./@types/index.d"

export class SSheet {
    sheet: GoogleAppsScript.Spreadsheet.Sheet | null;
    sheet_name: string
    dataRange: GoogleAppsScript.Spreadsheet.Range | null;
    constructor(sheet: GoogleAppsScript.Spreadsheet.Sheet | null, sheet_name: string) {
        let xstr: string = "";
        this.sheet_name = sheet_name;
        this.sheet = sheet;
        this.dataRange = null;
        if (this.sheet != null) {
            this.dataRange = this.sheet.getDataRange();
            xstr = this.dataRange == null ? "" : "valid";
            Util.log(`SSheet 1-1 constructor this.sheet_name=${this.sheet_name} this.dataRange=${xstr}`)
        }
        else {
            xstr = this.dataRange == null ? "" : "valid";
            Util.log(`SSheet 1-2 constructor this.sheet_name=${this.sheet_name} this.dataRange=${xstr}`)
        }
    }
    //   this.dataRange = { "x":15, "y": 1, "height": 100, "width":9 };
    getRange(x: number, y: number, height: number, width: number) {
        let xstr = "";
        if (this.sheet != null) {
            this.dataRange = this.sheet.getRange(x, y, height, width);
            xstr = this.dataRange == null ? "" : "valid"
            Util.log(`SSheet 2-1 getRange this.sheet_name=${this.sheet_name} this.dataRange=${xstr}`)
        }
        else {
            xstr = this.dataRange == null ? "" : "valid"
            Util.log(`SSheet 2-2 getRange this.sheet_name=${this.sheet_name} this.dataRange=${xstr}`)
        }
    }
    fetchAndSetDataRange(): void {
        let xstr = "";
        if (this.sheet != null) {
            this.dataRange = this.sheet.getDataRange();
            xstr = this.dataRange == null ? "" : "valid"
            Util.log(`SSheet 3-1 getDataRange this.sheet_name=${this.sheet_name} this.dataRange=${xstr}`)
        }
        else {
            xstr = this.dataRange == null ? "" : "valid"
            Util.log(`SSheet 3-2 getDataRange this.sheet_name=${this.sheet_name} this.dataRange=${xstr}`)
        }
    }
    getValues(): MultiArrayStringType {
        let xvalues: MultiArrayStringType = [[""]];
        if (this.dataRange != null) {
            const values = this.dataRange.getValues();
            if (values != null) {
                xvalues = values as MultiArrayStringType;
            }
        } else {
            xvalues = [["dataRange=null"]];
        }
        return xvalues;
    }
}
