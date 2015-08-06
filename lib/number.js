'use strict';

// FUNCTIONS //

var exp = Math.exp;


// MGF //

/**
* FUNCTION: mgf( x, lambda )
*	Evaluates the moment-generating function (MGF) for a Poisson distribution with mean parameter `lambda` at a value `t`.
*
* @param {Number} t - input value
* @param {Number} lambda - mean parameter
* @returns {Number} evaluated MGF
*/
function mgf( t, lambda ) {
	return exp( lambda * ( exp(t) - 1 ) );
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
