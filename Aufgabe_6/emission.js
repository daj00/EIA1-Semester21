var kon_Europa = "Europe";
var eu_18 = 4209.3;
var eu_08 = 4965.7;
var kon_NorthAmerika = "North America";
var na_18 = 6035.6;
var na_08 = 6600.4;
var kon_SouthAmerika = "South America";
var sa_18 = 1261.5;
var sa_08 = 1132.6;
var kon_Afrika = "Africa";
var af_18 = 1235.5;
var af_08 = 1028;
var kon_Asia = "Asia";
var as_18 = 16274.1;
var as_08 = 12954.7;
var kon_Australia = "Australia";
var au_18 = 2100.5;
var au_08 = 1993;
var ges_18 = eu_18 + af_18 + sa_18 + na_18 + as_18 + au_18;
window.addEventListener("load", function () {
    document.querySelector(".Kon_Europa").addEventListener("click", function () { Emission(kon_Europa, eu_18, eu_08); });
    document.querySelector(".Kon_Northamerica").addEventListener("click", function () { Emission(kon_NorthAmerika, na_18, na_08); });
    document.querySelector(".Kon_Southamerica").addEventListener("click", function () { Emission(kon_SouthAmerika, sa_18, sa_08); });
    document.querySelector(".Kon_Africa").addEventListener("click", function () { Emission(kon_Afrika, af_18, af_08); });
    document.querySelector(".Kon_Asia").addEventListener("click", function () { Emission(kon_Asia, as_18, as_08); });
    document.querySelector(".Kon_Australia").addEventListener("click", function () { Emission(kon_Australia, au_18, au_08); });
});
function Emission(kon, kon_18, kon_08) {
    document.querySelector(".Konti").innerHTML = kon;
    document.querySelector(".emi_number").innerHTML = kon_18.toString();
    document.querySelector(".Konti_1").innerHTML = kon;
    document.querySelector(".total").innerHTML = (kon_18 * 100 / ges_18).toFixed(2) + " %";
    document.querySelector(".growth").innerHTML = ((kon_18 - kon_08) / kon_08 * 100).toFixed(2) + " %";
    document.querySelector(".change_absolut").innerHTML = (kon_18 - kon_08).toFixed(2).toString();
    document.querySelector("#chart").setAttribute("style", "height: " + ((kon_18 / ges_18) * 100) + "%");
}
;
/*
// EU
   { document.getElementById ("eu").addEventListener("click", function(){
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.getElementById("absoluteEmiEu").innerHTML ="" + europa_18;
    document.getElementById("emiText").innerHTML = "Emission absolute of Europe in 2018";
    document.getElementById("total").innerHTML = "" + (europa_18*100/ges_2018).toFixed(2) + " %";
    document.getElementById("steigung").innerHTML = "" + ((europa_18-europa_08)/europa_08*100).toFixed(2) + " %";
    document.getElementById("change_total").innerHTML = "" + (europa_18-europa_08).toFixed(2);
    document.getElementById("graph").setAttribute('style', 'height:' + (europa_18*100/ges_2018) + '%');
})

// Nord Amerika
document.getElementById("na").addEventListener("click", function(){
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in North America";
    document.getElementById("absoluteEmiEu").innerHTML = "" + northAmerika_18;
    document.getElementById("emiText").innerHTML = "Emission absolute of North America in 2018";
    document.getElementById("total").innerHTML = "" + (northAmerika_18*100/ges_2018).toFixed(2) + " %";
    document.getElementById("steigung").innerHTML = "" + ((northAmerika_18-northAmerika_08)/northAmerika_08*100).toFixed(2) + " %";
    document.getElementById("change_total").innerHTML = "" + (northAmerika_18-northAmerika_08).toFixed(2);
    document.getElementById("graph").setAttribute('style', 'height:' + (northAmerika_18*100/ges_2018) + '%');
})

// Süd Amerika
document.getElementById("sa").addEventListener("click", function(){
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in South America";
    document.getElementById("absoluteEmiEu").innerHTML = "" + southAmerica_18;
    document.getElementById("emiText").innerHTML = "Emission absolute of South America in 2018";
    document.getElementById("total").innerHTML = "" + (southAmerica_18*100/ges_2018).toFixed(2) + " %";
    document.getElementById("steigung").innerHTML = "" + ((southAmerica_18-southAmerica_08)/southAmerica_08*100).toFixed(2) + " %";
    document.getElementById("change_total").innerHTML = "" + (southAmerica_18-southAmerica_08).toFixed(2);
    document.getElementById("graph").setAttribute('style', 'height:' + (southAmerica_18*100/ges_2018) + '%');
})

// Afrika
document.getElementById("af").addEventListener("click", function(){
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.getElementById("absoluteEmiEu").innerHTML = "" + africa_18;
    document.getElementById("emiText").innerHTML = "Emission absolute of Africa in 2018";
    document.getElementById("total").innerHTML = "" + (africa_18*100/ges_2018).toFixed(2) + " %";
    document.getElementById("steigung").innerHTML = "" + ((africa_18-africa_08)/africa_08*100).toFixed(2) + " %";
    document.getElementById("change_total").innerHTML = "" + (africa_18-africa_08).toFixed(2);
    document.getElementById("graph").setAttribute('style', 'height:' + (africa_18*100/ges_2018) + '%');
})

// Asien
document.getElementById("as").addEventListener("click", function(){
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.getElementById("absoluteEmiEu").innerHTML = "" + asia_18;
    document.getElementById("emiText").innerHTML = "Emission absolute of Asia in 2018";
    document.getElementById("total").innerHTML = "" + (asia_18*100/ges_2018).toFixed(2) + " %";
    document.getElementById("steigung").innerHTML = "" + ((asia_18-asia_08)/asia_08*100).toFixed(2) + " %";
    document.getElementById("change_total").innerHTML = "" + (asia_18-asia_08).toFixed(2);
    document.getElementById("graph").setAttribute('style', 'height:' + (asia_18*100/ges_2018) + '%');
})

// Australien
document.getElementById("au").addEventListener("click", function(){
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.getElementById("absoluteEmiEu").innerHTML = "" + australia_18;
    document.getElementById("emiText").innerHTML = "Emission absolute of Australia in 2018";
    document.getElementById("total").innerHTML = "" + (australia_18*100/ges_2018).toFixed(2) + " %";
    document.getElementById("steigung").innerHTML = "" + ((australia_18-australia_08)/australia_08*100).toFixed(2) + " %";
    document.getElementById("change_total").innerHTML = "" + (australia_18-australia_08).toFixed(2);
    document.getElementById("graph").setAttribute('style', 'height:' + (australia_18*100/ges_2018) + '%');
})
*/
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