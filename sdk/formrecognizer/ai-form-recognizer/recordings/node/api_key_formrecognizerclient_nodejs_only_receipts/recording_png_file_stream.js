let nock = require('nock');

module.exports.hash = "b9a20d6d323f90719f60c4144a9715e7";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/v2.1-preview.2/prebuilt/receipt/analyzeResults/7974e8d4-3a01-4b4b-8d35-eaa7bd93318f',
  'x-envoy-upstream-service-time',
  '692',
  'apim-request-id',
  '7974e8d4-3a01-4b4b-8d35-eaa7bd93318f',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Thu, 19 Nov 2020 15:49:31 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/prebuilt/receipt/analyzeResults/7974e8d4-3a01-4b4b-8d35-eaa7bd93318f')
  .reply(200, {"status":"running","createdDateTime":"2020-11-19T15:49:31Z","lastUpdatedDateTime":"2020-11-19T15:49:32Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '131',
  'apim-request-id',
  'cdd369bc-16c8-4a68-a309-946a93398607',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Thu, 19 Nov 2020 15:49:32 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/prebuilt/receipt/analyzeResults/7974e8d4-3a01-4b4b-8d35-eaa7bd93318f')
  .reply(200, {"status":"running","createdDateTime":"2020-11-19T15:49:31Z","lastUpdatedDateTime":"2020-11-19T15:49:32Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '47',
  'apim-request-id',
  'bd24a37f-fefa-4a7b-9034-5002e77977a4',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Thu, 19 Nov 2020 15:49:32 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/prebuilt/receipt/analyzeResults/7974e8d4-3a01-4b4b-8d35-eaa7bd93318f')
  .reply(200, {"status":"succeeded","createdDateTime":"2020-11-19T15:49:31Z","lastUpdatedDateTime":"2020-11-19T15:49:34Z","analyzeResult":{"version":"2.1.0","readResults":[{"page":1,"angle":0.2511,"width":1688,"height":3000,"unit":"pixel"}],"documentResults":[{"docType":"prebuilt:receipt","pageRange":[1,1],"fields":{"ReceiptType":{"type":"string","valueString":"Itemized","confidence":0.659},"MerchantName":{"type":"string","valueString":"Contoso Contoso","text":"Contoso Contoso","boundingBox":[349.3,241.3,1058,284.4,1033.5,687.1,324.8,644],"page":1,"confidence":0.516},"MerchantAddress":{"type":"string","valueString":"123 Main Street Redmond, WA 98052","text":"123 Main Street Redmond, WA 98052","boundingBox":[319.9,689.9,750.7,697.5,747.8,865.6,317,858],"page":1,"confidence":0.986},"MerchantPhoneNumber":{"type":"phoneNumber","text":"123-456-7890","boundingBox":[306,1005,617,1012,615,1069,305,1064],"page":1,"confidence":0.99},"TransactionDate":{"type":"date","valueDate":"2019-06-10","text":"6/10/2019","boundingBox":[304,1224,506,1224,504,1289,303,1288],"page":1,"confidence":0.985},"TransactionTime":{"type":"time","valueTime":"13:59:00","text":"13:59","boundingBox":[518,1225,628,1228,627,1290,517,1289],"page":1,"confidence":0.968},"Items":{"type":"array","valueArray":[{"type":"object","valueObject":{"Name":{"type":"string","valueString":"8GB RAM (Black)","text":"8GB RAM (Black)","boundingBox":[370.7,1781.5,731,1785,730.3,1854,370,1850.6],"page":1,"confidence":0.916},"TotalPrice":{"type":"number","valueNumber":999,"text":"$999.00","boundingBox":[939,1784.6,1134.4,1788.3,1133,1863,937.6,1859.3],"page":1,"confidence":0.559}}},{"type":"object","valueObject":{"Quantity":{"type":"number","valueNumber":1,"text":"1","boundingBox":[321,2021,348,2020,349,2084,322,2084],"page":1,"confidence":0.858},"Name":{"type":"string","valueString":"SurfacePen","text":"SurfacePen","boundingBox":[360,2020,626,2014,628,2077,362,2083],"page":1,"confidence":0.858},"TotalPrice":{"type":"number","valueNumber":99.99,"text":"99.99","boundingBox":[1007,2028,1127,2028,1126,2091,1007,2091],"page":1,"confidence":0.386}}}]},"Subtotal":{"type":"number","valueNumber":1098.99,"text":"1098.99","boundingBox":[963,2260,1136,2254,1137,2320,966,2325],"page":1,"confidence":0.964},"Tax":{"type":"number","valueNumber":104.4,"text":"$104.40","boundingBox":[942.6,2367.5,1132,2363.7,1133.4,2434.2,944,2438],"page":1,"confidence":0.713},"Total":{"type":"number","valueNumber":1203.39,"text":"1203.39","boundingBox":[955,2594,1123,2611,1115,2678,949,2661],"page":1,"confidence":0.774}}}]}}, [
  'Content-Length',
  '2561',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '105',
  'apim-request-id',
  '17f37b9e-1aa4-4889-a699-18ed027d19bd',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Thu, 19 Nov 2020 15:49:37 GMT'
]);