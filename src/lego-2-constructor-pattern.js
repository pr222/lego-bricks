/**
 * Module for lego part 2.
 *
 * @module src/lego-2-constructor-pattern
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
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
 * @param {string} [color='red'] - Color of the brick ('blue', 'red', 'green', etc.).
 */
export function LegoBrick (x = 2, y = 4, color = 'red') {
  this.x = x
  this.y = y
  this.color = color
  this.toString = function () {
    return `${'® '.repeat(this.x).trim()}\n`.repeat(this.y).trim()
  }
  this.render = function () {
    console.log(this.toString())
  }
  return this
}
