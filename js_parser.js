var parser = require('fast-xml-parser');
var he = require('he');
const fs = require('fs');

const xmlData = fs.readFileSync('wordsinspace.xml', 'utf8');

var options = {
    attributeNamePrefix : "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : true,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
    tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"]
};

try{
  var jsonObj = parser.parse(xmlData,options, true);
  console.log(jsonObj.rss.channel.item);
}catch(error){
  console.log(error.message)
}