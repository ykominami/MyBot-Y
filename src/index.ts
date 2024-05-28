import { doGet, doPost, getData, testData, testData2, testData3 } from "./Code";

declare const global: {
  [x: string]: unknown;
};

global.testData3 = testData3;
global.testData2 = testData2;
global.testData = testData;
global.doGet = doGet;
global.doPost = doPost;
global.getData = getData;
