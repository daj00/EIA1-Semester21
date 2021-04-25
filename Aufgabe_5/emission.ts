var Africa_08: number = 1028;
var Africa_18: number = 1235.5;

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

var Ges_2018: number = Africa_18 +  SouthAmerica_18 + Europa_18 NorthAmerika_18 + Asia_18 + Australia_18;
 
console.log('Die Emission von Afrika ist: ' + Africa_18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + Africa_18*100/Ges_2018 + ' %');
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (Africa_18-Africa_08)/Africa_08*100 + ' verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + (Africa_18-Africa_08) + ' kg CO2');
 
console.log('Die Emission von Süd Amerika ist: ' + SouthAmerica_18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit ' + SouthAmerica_18*100/Ges_2018 + ' %');
console.log('Für Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (SouthAmerica_18-SouthAmerica_08)/SouthAmerica_08*100 + ' verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + (SouthAmerica_18-SouthAmerica_08) + ' kg CO2');
 
console.log('Die Emission von Europa ist: ' + Europa_18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + Europa_18*100/Ges_2018 + ' %');
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (Europa_18-Europa_08)/Europa_08*100 + ' verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + (Europa_18-Europa_08) + ' kg CO2');
 
console.log('Die Emission von Nord Amerika ist: ' + NorthAmerika_18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Nord Amerika damit ' + NorthAmerika_18*100/Ges_2018 + ' %');
console.log('Für Nord Amerika hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (NorthAmerika_18-NorthAmerika_18)/NorthAmerika_18*100 + ' verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + (NorthAmerika_18-NorthAmerika_18) + ' kg CO2');
 
console.log('Die Emission von Asien ist: ' + Asia_18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + Asia_18*100/Ges_2018 + ' %');
console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (Asia_18-Asia_08)/Asia_08*100 + ' verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + (Asia_18-Asia_08) + ' kg CO2');
 
console.log('Die Emission von Australien ist: ' + Australia_18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + Australia_18*100/Ges_2018 + ' %');
console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emmission um ' + (Australia_18-Australia_08)/Australia_08*100 + ' verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + (Australia_18-Australia_08) + ' kg CO2');