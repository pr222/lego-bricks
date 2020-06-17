/**
 * Module for lego part 2.
 *
 * @module src/lego-2-constructor-pattern
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellen Nu <en999zz@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns an object representing a lego brick.
 *
 * @param {number} [x=2] - The horizontal number of knobs of the brick.
 * @param {number} [y=4] - The vertical number of knobs of the brick.
 * @param {string} [color='red'] - The brick's color.
 */
export function LegoBrick (x = 2, y = 4, color = 'red') {
  /**
   * The horizontal number of knobs of the brick.
   *
   * @type {number}
   */
  this.x = x

  /**
   * The vertical number of knobs of the brick.
   *
   * @type {number}
   */
  this.y = y

  /**
   * The color of the brick.
   *
   * @type {string}
   */
  this.color = color

  /**
   * Renders the object to the console.
   */
  this.render = function () {
    console.log(this.toString())
  }

  /**
   * Returns a string representing the object.
   *
   * @returns {string} - A string representing the object.
   */
  this.toString = function () {
    return `${' ®'.repeat(this.x).trim()}\n`.repeat(this.y).trim()
  }
}
