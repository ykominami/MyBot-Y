interface StartPointOfYearArray {
  [index: string]: number;
}
export { StartPointOfYearArray };

type DataRangex = { x: number; y: number; height: number; width: number };
export { DataRangex };

type AssocValue = null | string;
export { AssocValue };

interface AssocArray {
  [index: string]: AssocValue;
}
export { AssocArray };

type StringOrNull = string | null;

//interface StartPointOfYearArray {
//  [index: number]: number;
//}
type ThreeItemsOrNull = [number, number, number] | [null, null, null];

interface ThreeItemsAssocArray {
  [index: number]: [ThreeItemsOrNull];
}
export { ThreeItemsOrNull, ThreeItemsAssocArray };

interface IItem {
  url: StringOrNull;
  name: string;
}

interface ItemArray {
  [index: string]: IItem;
}
export { IItem, ItemArray };

interface AssocArray {
  // (文字型のキー):  string
  [index: string]: string
}

///
///
///
///

type AssocArrayArray = [AssocArray]

export { AssocValue, AssocArray, StringOrNull, AssocArrayArray };

//interface StartPointOfYearArray {
//  [index: number]: number;
//}

type DirectionArray = {
  // (文字型のキー):  string
  [index: string]: string
}

type TransferData = {
  sheetName: string
  data: DirectionArray
}

export { DirectionArray, TransferData };
// ==========================================================================
//

interface ItemxType {
  index: number;
  value: StringOrNull;
}
// type ItemxArrayType = [ItemxType] | never[] | []; 
type ItemxArrayType = ItemxType[];
interface SearchItemType {
  searches: ItemxArrayType;
  value: ItemxType;
}
// type SheetOrNull = GoogleAppsScript.Spreadsheet.Sheet | null
type SsOrNull = GoogleAppsScript.Spreadsheet | null

export { ItemxType, ItemxArrayType, SearchItemType, SsOrNull };

type MultiArrayStringType = (string)[][]
type MultiArrayStringOrNullType = MultiArrayStringType | null

type GASHtmlTextOutputType = GoogleAppsScript.HTML.HtmlOutput | GoogleAppsScript.Content.TextOutput

interface InfoParamType {
  sheet_name: StringOrNull;
  kind: StringOrNull;
  kind2: StringOrNull;
  year: StringOrNull;
}
export { MultiArrayStringType, MultiArrayStringOrNullType, GASHtmlTextOutputType, InfoParamType };
