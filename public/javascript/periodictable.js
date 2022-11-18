var pt = require('periodic-table');
 
// entire dataset
var allElements = pt.all();
 
// single elements by name
var he = pt.elements.Helium;
 
// single elements by symbol
var he = pt.symbols.He;
 
// single elements by atomic number
var he = pt.numbers[2];
 
var util = require('periodic-table/util');
 
// atomic mass of molecule
// atomicMass("[Element][Number] [Element][Number] ...")
// parenthesis around elements not supported..yet
var waterMass = util.atomicMass("H2 O");
var organicMass = util.atomicMass("C12 H22 O11");