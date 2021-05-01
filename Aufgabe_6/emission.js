var kontinent_Afrika = "Afrika";
var kontinent_SouthAmerika = "South Amerika";
var kontinent_Europa = "Europa";
var kontinent_NorthAmerika = "Nord Amerika";
var kontinent_Asia = "Asien";
var kontinent_Australia = "Australien";
var africa_08 = 1028;
var africa_18 = 1235.5;
var southAmerica_08 = 1132.6;
var southAmerica_18 = 1261.5;
var europa_08 = 4965.7;
var europa_18 = 4209.3;
var northAmerika_08 = 6600.4;
var northAmerika_18 = 6035.6;
var asia_08 = 12954.7;
var asia_18 = 16274.1;
var australia_08 = 1993;
var australia_18 = 2100.5;
var ges_2018 = africa_18 + southAmerica_18 + europa_18 + northAmerika_18 + asia_18 + australia_18;
// EU
document.getElementById("eu").addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.getElementById("absoluteEmiEu").innerHTML = "" + europa_18;
    document.getElementById("emiText").innerHTML = "Emission absolute of Europe in 2018";
    document.getElementById("total").innerHTML = "" + (europa_18 * 100 / ges_2018).toFixed(2) + " %";
    document.getElementById("steigung").innerHTML = "" + ((europa_18 - europa_08) / europa_08 * 100).toFixed(2) + " %";
    document.getElementById("change_total").innerHTML = "" + (europa_18 - europa_08).toFixed(2);
    document.getElementById("graph").setAttribute('style', 'height:' + (europa_18 * 100 / ges_2018) + '%');
});
// Nord Amerika
document.getElementById("na").addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in North America";
    document.getElementById("absoluteEmiEu").innerHTML = "" + northAmerika_18;
    document.getElementById("emiText").innerHTML = "Emission absolute of North America in 2018";
    document.getElementById("total").innerHTML = "" + (northAmerika_18 * 100 / ges_2018).toFixed(2) + " %";
    document.getElementById("steigung").innerHTML = "" + ((northAmerika_18 - northAmerika_08) / northAmerika_08 * 100).toFixed(2) + " %";
    document.getElementById("change_total").innerHTML = "" + (northAmerika_18 - northAmerika_08).toFixed(2);
    document.getElementById("graph").setAttribute('style', 'height:' + (northAmerika_18 * 100 / ges_2018) + '%');
});
// Süd Amerika
document.getElementById("sa").addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in South America";
    document.getElementById("absoluteEmiEu").innerHTML = "" + southAmerica_18;
    document.getElementById("emiText").innerHTML = "Emission absolute of South America in 2018";
    document.getElementById("total").innerHTML = "" + (southAmerica_18 * 100 / ges_2018).toFixed(2) + " %";
    document.getElementById("steigung").innerHTML = "" + ((southAmerica_18 - southAmerica_08) / southAmerica_08 * 100).toFixed(2) + " %";
    document.getElementById("change_total").innerHTML = "" + (southAmerica_18 - southAmerica_08).toFixed(2);
    document.getElementById("graph").setAttribute('style', 'height:' + (southAmerica_18 * 100 / ges_2018) + '%');
});
// Afrika
document.getElementById("af").addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.getElementById("absoluteEmiEu").innerHTML = "" + africa_18;
    document.getElementById("emiText").innerHTML = "Emission absolute of Africa in 2018";
    document.getElementById("total").innerHTML = "" + (africa_18 * 100 / ges_2018).toFixed(2) + " %";
    document.getElementById("steigung").innerHTML = "" + ((africa_18 - africa_08) / africa_08 * 100).toFixed(2) + " %";
    document.getElementById("change_total").innerHTML = "" + (africa_18 - africa_08).toFixed(2);
    document.getElementById("graph").setAttribute('style', 'height:' + (africa_18 * 100 / ges_2018) + '%');
});
// Asien
document.getElementById("as").addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.getElementById("absoluteEmiEu").innerHTML = "" + asia_18;
    document.getElementById("emiText").innerHTML = "Emission absolute of Asia in 2018";
    document.getElementById("total").innerHTML = "" + (asia_18 * 100 / ges_2018).toFixed(2) + " %";
    document.getElementById("steigung").innerHTML = "" + ((asia_18 - asia_08) / asia_08 * 100).toFixed(2) + " %";
    document.getElementById("change_total").innerHTML = "" + (asia_18 - asia_08).toFixed(2);
    document.getElementById("graph").setAttribute('style', 'height:' + (asia_18 * 100 / ges_2018) + '%');
});
// Australien
document.getElementById("au").addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.getElementById("absoluteEmiEu").innerHTML = "" + australia_18;
    document.getElementById("emiText").innerHTML = "Emission absolute of Australia in 2018";
    document.getElementById("total").innerHTML = "" + (australia_18 * 100 / ges_2018).toFixed(2) + " %";
    document.getElementById("steigung").innerHTML = "" + ((australia_18 - australia_08) / australia_08 * 100).toFixed(2) + " %";
    document.getElementById("change_total").innerHTML = "" + (australia_18 - australia_08).toFixed(2);
    document.getElementById("graph").setAttribute('style', 'height:' + (australia_18 * 100 / ges_2018) + '%');
});
//Konsole
console.log('Die Emission von ' + (kontinent_Afrika + ' ist: ' + africa_18) + ' kg CO2');
console.log('Die Emission von ' + kontinent_SouthAmerika + ' ist: ' + southAmerica_18 + ' kg CO2');
console.log('Die Emission von ' + kontinent_Europa + ' ist: ' + europa_18 + ' kg CO2');
console.log('Die Emission von ' + kontinent_NorthAmerika + ' ist: ' + northAmerika_18 + ' kg CO2');
console.log('Die Emission von ' + kontinent_Asia + ' ist: ' + asia_18 + ' kg CO2');
console.log('Die Emission von ' + kontinent_Australia + ' ist: ' + australia_18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + kontinent_Afrika + ' damit ' + africa_18 * 100 / ges_2018 + ' %');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + kontinent_SouthAmerika + ' damit ' + southAmerica_18 * 100 / ges_2018 + ' %');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + kontinent_Europa + ' damit ' + europa_18 * 100 / ges_2018 + ' %');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + kontinent_NorthAmerika + ' damit ' + northAmerika_18 * 100 / ges_2018 + ' %');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + kontinent_Asia + ' damit ' + asia_18 * 100 / ges_2018 + ' %');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + kontinent_Australia + ' damit ' + australia_18 * 100 / ges_2018 + ' %');
console.log('Für ' + kontinent_Afrika + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (africa_18 - Africa_08) / africa_08 * 100 + ' % verändert');
console.log('Für ' + kontinent_SouthAmerika + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (southAmerica_18 - southAmerica_08) / southAmerica_08 * 100 + ' % verändert');
console.log('Für ' + kontinent_Europa + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (europa_18 - Europa_08) / europa_08 * 100 + ' % verändert');
console.log('Für ' + kontinent_NorthAmerika + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (northAmerika_18 - northAmerika_08) / northAmerika_08 * 100 + ' % verändert');
console.log('Für ' + kontinent_Asia + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (asia_18 - Asia_08) / asia_08 * 100 + ' % verändert');
console.log('Für ' + kontinent_Australia + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (australia_18 - australia_08) / australia_08 * 100 + ' % verändert');
console.log('2018 im Vergleich zu 2008 sind das in ' + kontinent_Afrika + ' ' + (africa_18 - africa_08) + ' kg CO2');
console.log('2018 im Vergleich zu 2008 sind das in ' + kontinent_SouthAmerika + ' ' + (southAmerica_18 - southAmerica_08) + ' kg CO2');
console.log('2018 im Vergleich zu 2008 sind das in ' + kontinent_Europa + ' ' + (europa_18 - europa_08) + ' kg CO2');
console.log('2018 im Vergleich zu 2008 sind das in ' + kontinent_NorthAmerika + ' ' + (northAmerika_18 - northAmerika_08) + ' kg CO2');
console.log('2018 im Vergleich zu 2008 sind das in ' + kontinent_Asia + ' ' + (asia_18 - Asia_08) + ' kg CO2');
console.log('2018 im Vergleich zu 2008 sind das in ' + kontinent_Australia + ' ' + (australia_18 - australia_08) + ' kg CO2');
//# sourceMappingURL=emission.js.map