var kon_Europa: string ="Europe";
var eu_18: number = 4209.3;
var eu_08: number = 4965.7;

var kon_NorthAmerika: string = "North America";
var na_18: number = 6035.6;
var na_08: number = 6600.4;

var kon_SouthAmerika: string = "South America";
var sa_18: number = 1261.5;
var sa_08: number = 1132.6;

var kon_Afrika: string ="Africa";
var af_18: number = 1235.5;
var af_08: number = 1028;

var kon_Asia: string ="Asia";
var as_18: number = 16274.1;
var as_08: number = 12954.7;

var kon_Australia: string ="Australia";
var au_18: number = 2100.5;
var au_08: number = 1993;

var ges_18: number = eu_18 + af_18 + sa_18 + na_18 + as_18 + au_18;

window.addEventListener("load", function () {
    document.querySelector(".Kon_Europa").addEventListener("click", function () {Emission(kon_Europa, eu_18, eu_08)});
    document.querySelector(".Kon_Northamerica").addEventListener("click", function () {Emission(kon_NorthAmerika, na_18, na_08)});
    document.querySelector(".Kon_Southamerica").addEventListener("click", function () {Emission(kon_SouthAmerika, sa_18, sa_08)});
    document.querySelector(".Kon_Africa").addEventListener("click", function () {Emission(kon_Afrika, af_18, af_08)});
    document.querySelector(".Kon_Asia").addEventListener("click", function () {Emission(kon_Asia, as_18, as_08)});
    document.querySelector(".Kon_Australia").addEventListener("click", function () {Emission(kon_Australia, au_18, au_08)});
});

function Emission(kon: string, kon_18: number, kon_08: number) {
    document.querySelector(".Konti").innerHTML = kon;
    document.querySelector(".emi_number").innerHTML = kon_18.toString();
    document.querySelector(".Konti_1").innerHTML = kon;
    document.querySelector(".total").innerHTML = (kon_18*100/ges_18).toFixed(2) + " %";
    document.querySelector(".growth").innerHTML = ((kon_18-kon_08)/kon_08*100).toFixed(2) + " %";
    document.querySelector(".change_absolut").innerHTML = (kon_18-kon_08).toFixed(2).toString();
  
    document.querySelector("#chart").setAttribute("style", "height: " + ((kon_18 / ges_18) * 100) + "%" );
};
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

// S??d Amerika
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
