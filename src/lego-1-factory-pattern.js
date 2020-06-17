/**
 * Module for lego part 1.
 *
 * @module src/lego-1-factory-pattern
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Type definitions
// ------------------------------------------------------------------------------

/**
 * Represents a lego brick.
 *
 * @typedef {object} LegoBrick
 * @property {number} x - The number of horizontal nobs.
 * @property {number} y - The number of vertical nobs.
 * @property {string} color - The brick's color.
 * @property {number} minimum - The minimum value.
 * @property {Function} obj.toString - A function returning a string representing the object.
 * @property {Function} obj.render - A function rendering the object.
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns an object representing a lego brick.
 *
 * @param {number} [x=2] - The horizontal number of knobs of the brick.
 * @param {number} [y=4] - The vertical number of knobs of the brick.
 * @param {string} [color='red'] - Color of the brick ('blue', 'red', 'green', etc.).
 * @returns {LegoBrick} obj - An object representing a lego brick.
 */
export const createLegoBrick = function (x, y, color) {
  // TODO: Write your code here.
}
