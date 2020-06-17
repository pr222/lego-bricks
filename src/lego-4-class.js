/**
 * Module for lego part 4.
 *
 * @module src/lego-4-class
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellen Nu <en999zz@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Represents a lego brick.
 *
 */
export class LegoBrick {
  /**
   * Creates an instance of LegoBrick.
   *
   * @param {number} [x=2] - The horizontal number of knobs of the brick.
   * @param {number} [y=4] - The vertical number of knobs of the brick.
   * @param {string} [color='red'] - The brick's color.
   * @memberof LegoBrick
   */
  constructor (x = 2, y = 4, color = 'red') {
    this.x = x
    this.y = y
    this.color = color
  }

  /**
   * Renders the object to the console.
   */
  render () {
    console.log(this.toString())
  }

  /**
   * Returns a string representing the object.
   *
   * @returns {string} - A string representing the object.
   */
  toString () {
    return `${' ®'.repeat(this.x).trim()}\n`.repeat(this.y).trim()
  }
}
