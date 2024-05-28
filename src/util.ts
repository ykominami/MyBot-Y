import {
    MultiArrayStringType, MultiArrayStringOrNullType, AssocArrayArray
} from "./@types/index.d"

export class Util {
    static log_init() {

    }
    static log(message: string) {
        Logger.log(message)
    }
    static print_line(lines: MultiArrayStringOrNullType): void {
        let xstr: string = "";
        if (lines != null) {
            lines.map(l => {

                l.map(x => {
                    xstr = `${x}, `;
                    Util.log(xstr);
                });
            })
            Util.log("\n");
        }
    }
    static find_blank_row(lines: MultiArrayStringOrNullType): number {
        let index = -1
        if (lines !== null) {
            index = lines.findIndex((item) => item[0] === null || item[0] === "")
        }
        return index
    }
    static find_full_row(lines: MultiArrayStringOrNullType): number {
        let index = -1
        if (lines !== null) {
            index = lines.findIndex((item) => item[0] !== null && item[0] !== "")
        }
        return index
    }

    static remove_under_the_blank_row(lines: MultiArrayStringOrNullType): MultiArrayStringOrNullType {
        let lines3: MultiArrayStringOrNullType = [[]];
        let lines2: MultiArrayStringOrNullType = [[]];
        let index_blank: number = -1;
        let index_full: number = -1;
        let index_blank_2: number = -1;

        if (lines === null) {
            Util.log("(A)")
            return [[]]
        }
        else {
            index_blank = Util.find_blank_row(lines)
            // 1 blank only
            // 3 blank, full
            // 4 blank, full, blank
            if (index_blank == 0) {
                index_full = Util.find_full_row(lines)
                // 3 blank, full
                // 4 blank, full, blank
                if (index_full > 0) {
                    const max_line = lines.length
                    lines2 = lines.slice(index_full, max_line)
                    index_blank_2 = Util.find_blank_row(lines2)
                    // 4 blank, full, blank
                    // (index_blank_2 == 0 はありえない)
                    if (index_blank_2 > 0) {
                        Util.log(`(4) index_full=${index_full} index_blank_2=${index_blank_2}`)
                        lines3 = lines2.slice(0, index_blank_2)
                    }
                    // 3 blank, full
                    else {
                        Util.log(`(3) index_full=${index_full} index_blank_2=${index_blank_2}`)
                        lines3 = lines2
                    }
                }
                // 1 blank only
                else {
                    Util.log(`(1) index_full=${index_full}`)
                    lines3 = []
                }
                //const index = lines.findIndex((item) => item[0] !== null && item[0] === "")
            }
            // 5 full, blank
            else if (index_blank > 0) {
                Util.log(`(5) index_blank=${index_blank}`)
                lines3 = lines.slice(0, index_blank)
            }
            // 2 full only
            else {
                Util.log(`(2) index_blank=${index_blank}`)
                lines3 = lines
            }
        }
        return lines3
    }

    static remove_under_the_blank_row_0(lines: MultiArrayStringOrNullType): MultiArrayStringOrNullType {
        if (lines == null) {
            return [[]]
        }
        else {
            const index = lines.findIndex((item) => item[0] !== null && item[0] !== "")
            if (index >= 0) {
                Util.log(`A1 Util remove_unser_the_bloank_row value.size=${lines.length} index=${index}`)
                const x = lines.slice(0, index);
                Util.print_line(x);
                return x;
            }
            else {
                Util.log(`B1 Util remove_unser_the_bloank_row value.size=${lines.length}`)
                Util.print_line(lines);
                return lines
            }
        }
    }
    static remove_left_blank_cols(lines: MultiArrayStringType): MultiArrayStringType {
        const index = lines[0].findIndex((item) => item != "")
        if (index > 0) {
            return lines.map((it) => it.slice(index))
        }
        else {
            return lines
        }
    }

    static getAsJSON(values: MultiArrayStringType): string {
        // Util.log(`Util.getAsJSON 1 values.length=${values.length} $values[0]=${values[0]}`)
        const array: AssocArrayArray = [{}];
        //先頭行にラベルがあるものとして、それ以降の行に各カラムにラベルをキーとして、カラムの値を値とする連想配列を作成
        for (let i = 1; i < values.length; i++) {
            // Util.log(`Util.getAsJSON 2 i=${i}`)
            array[i - 1] = {};
            for (let j = 0; j < values[0].length; j++) {
                // Util.log(`Util.getAsJSON j=${j}`)
                array[i - 1][values[0][j]] = values[i][j];
            }
        }
        //オブジェクトの変数をJSON形式に変換
        const json = JSON.stringify(array);
        return json;
    }
}