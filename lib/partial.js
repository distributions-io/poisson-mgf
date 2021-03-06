'use strict';

// FUNCTIONS //

var exp = Math.exp;


// PARTIAL //

/**
* FUNCTION: partial( lambda )
*	Partially applies mean parameter `lambda` and returns a function for evaluating the moment-generating function (MGF) for a Poisson distribution.
*
* @param {Number} lambda - mean parameter
* @returns {Function} MGF
*/
function partial( lambda ) {

	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment-generating function (MGF) for a Poisson distribution.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {
		return exp( lambda * ( exp(t) - 1 ) );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
