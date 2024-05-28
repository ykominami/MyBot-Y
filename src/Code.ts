// import * as Webappxy from './webapp';
import { Webapp } from "./webapp";
import { Listapp } from "./listapp";
import {
    GASHtmlTextOutputType, IItem
} from "./@types/index.d"

// import { GIO } from './giojs';
export function doGet(e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent): GASHtmlTextOutputType {
    // return Webapp.dogetx(e);
    // return Webapp.doGet_0(e);
    // return Webapp.doGet_1(e);
    const webapp = new Webapp();
    return webapp.doGetx(e);
}
export function doPost(e: GoogleAppsScript.Events.DoPost): GASHtmlTextOutputType {
    const webapp = new Webapp();
    return webapp.doPostx(e);
}
export function getData(): { [index: string]: IItem } {
    const listapp = new Listapp();
    return listapp.getData();
}
export function testData(): GASHtmlTextOutputType {
    const webapp = new Webapp();
    return webapp.testData();
}
export function testData2(): GASHtmlTextOutputType {
    const webapp = new Webapp();
    return webapp.testData2();
}
export function testData3(): void {
    const webapp = new Webapp();
    webapp.testData3();
}
