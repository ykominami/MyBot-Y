import { Infox } from "./infox";
import { SpreadSheetx } from "./spreadsheetx";
import { SSheet } from "./ssheet";
import { Util } from "./util";
import { InfoParamType, StringOrNull, MultiArrayStringType } from "./@types/index.d"

export class Booklist {
    infox: Infox
    param: InfoParamType | null
    ss_id: StringOrNull
    ss: SpreadSheetx | null
    sheet_name: string
    s_sheet: SSheet | null
    values: MultiArrayStringType
    error: { history: string[] }

    constructor(infox: Infox) {
        this.infox = infox
        this.param = null;
        this.ss_id = null
        this.ss = null
        this.s_sheet = null
        this.sheet_name = ""
        this.values = [["BookInfo"]]
        this.error = { history: ["Booklist-A-1 init"] }
    }

    getValues(param: InfoParamType, sheet_name: string) {
        let xstr: string = "";
        this.sheet_name = sheet_name
        this.values = [["empty"]]
        this.ss_id = this.infox.getSSId(param);
        xstr = this.ss_id == null ? "(null)" : this.ss_id
        Logger.log(`############### Booklist getVlues (from getSSId()) this.ss_id=${xstr}`)
        this.ss = new SpreadSheetx(this.ss_id)
        xstr = this.sheet_name == null ? "" : this.sheet_name;
        Logger.log(`############### Booklist getVlues this.sheet_name=${xstr}`)
        this.s_sheet = this.ss.getSheet(this.sheet_name)
        this.s_sheet.fetchAndSetDataRange();
        this.values = this.s_sheet.getValues(); //  as MultiArrayStringType
        if (this.values.length <= 1) {
            // Util.log(`Booklist B-1`)
            this.error.history.push(`Booklist-A-4 get_values this.values.length=${this.values.length}`)
            return [this.error.history]
        }
        else {
            // Util.log(`Booklist B-2 get_values this.values.length=${this.values.length}`)
            return this.values
            // return [ this.error.history ]
        }
    }
    getAsJson(): string {
        const json = Util.getAsJSON(this.values);
        return json;
    }
}