var Kontinent_Afrika ="Afrika";
var Kontinent_SouthAmerika = "South Amerika";
var Kontinent_Europa ="Europa";
var Kontinent_NorthAmerika = "Nord Amerika";
var Kontinent_Asia ="Asien";
var Kontinent_Australia ="Australien";

var Africa_08: number = 1028;
var Africa_18: number = 1235.5

var SouthAmerica_08: number = 1132.6;
var SouthAmerica_18: number = 1261.5;

var Europa_08: number = 4965.7;
var Europa_18: number = 4209.3
 
var NorthAmerika_08: number = 6600.4;
var NorthAmerika_18: number = 6035.6;

var Asia_08: number = 12954.7;
var Asia_18: number = 16274.1;

var Australia_08: number = 1993;
var Australia_18: number = 2100.5;

var Ges_2018: number = Africa_18 +  SouthAmerica_18 + Europa_18 + NorthAmerika_18 + Asia_18 + Australia_18;
 
console.log('Die Emission von ' + Kontinent_Afrika + ' ist: ' + Africa_18 + ' kg CO2');
console.log('Die Emission von ' + Kontinent_SouthAmerika + ' ist: ' + SouthAmerica_18 + ' kg CO2');
console.log('Die Emission von ' + Kontinent_Europa + ' ist: ' + Europa_18 + ' kg CO2');
console.log('Die Emission von ' + Kontinent_NorthAmerika + ' ist: ' + NorthAmerika_18 + ' kg CO2');
console.log('Die Emission von ' + Kontinent_Asia + ' ist: ' + Asia_18 + ' kg CO2');
console.log('Die Emission von ' + Kontinent_Australia + ' ist: ' + Australia_18 + ' kg CO2');

console.log('Relativ zur Gesamtemission der Welt verursacht ' + Kontinent_Afrika + ' damit ' + (Africa_18 * 100/ Ges_2018) + ' %');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + Kontinent_SouthAmerika + ' damit ' + SouthAmerica_18 * 100/Ges_2018 + ' %');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + Kontinent_Europa + ' damit ' + Europa_18 * 100/Ges_2018 + ' %');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + Kontinent_NorthAmerika + ' damit ' + NorthAmerika_18 * 100/Ges_2018 + ' %');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + Kontinent_Asia + ' damit ' + Asia_18 * 100/Ges_2018 + ' %');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + Kontinent_Australia + ' damit ' + Australia_18 * 100/Ges_2018 + ' %');


console.log('Für ' + Kontinent_Afrika + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (Africa_18-Africa_08)/Africa_08*100 + ' % verändert');
console.log('Für ' + Kontinent_SouthAmerika + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (SouthAmerica_18-SouthAmerica_08)/SouthAmerica_08*100 + ' % verändert');
console.log('Für ' + Kontinent_Europa + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (Europa_18-Europa_08)/Europa_08*100 + ' % verändert');
console.log('Für ' + Kontinent_NorthAmerika + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (NorthAmerika_18-NorthAmerika_08)/NorthAmerika_08*100 + ' % verändert');
console.log('Für ' + Kontinent_Asia + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (Asia_18-Asia_08)/Asia_08*100 + ' % verändert');
console.log('Für ' + Kontinent_Australia + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (Australia_18-Australia_08)/Australia_08*100 + ' % verändert');


console.log('2018 im Vergleich zu 2008 sind das in ' + Kontinent_Afrika + ' ' + (Africa_18-Africa_08) + ' kg CO2');
console.log('2018 im Vergleich zu 2008 sind das in ' + Kontinent_SouthAmerika + ' ' + (SouthAmerica_18-SouthAmerica_08) + ' kg CO2');
console.log('2018 im Vergleich zu 2008 sind das in ' + Kontinent_Europa + ' ' + (Europa_18-Europa_08) + ' kg CO2');
console.log('2018 im Vergleich zu 2008 sind das in ' + Kontinent_NorthAmerika + ' ' + (NorthAmerika_18-NorthAmerika_08) + ' kg CO2');
console.log('2018 im Vergleich zu 2008 sind das in ' + Kontinent_Asia + ' ' + (Asia_18-Asia_08) + ' kg CO2');
console.log('2018 im Vergleich zu 2008 sind das in ' + Kontinent_Australia + ' ' + (Australia_18-Australia_08) + ' kg CO2');