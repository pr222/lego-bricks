/**
 * Module for lego part 4.
 *
 * @module src/lego-4-class
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
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
  constructor (x, y, color) {
    this.x = 2
    this.y = 4
    this.color = 'red'
  }

  toString () {
    return `${this.x}, ${this.y}, ${this.color}`
  }

  render () {
    console.log(this.toString)
  }
}
