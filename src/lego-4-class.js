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
  constructor (x = 2, y = 4, color = 'red') {
    this.x = x
    this.y = y
    this.color = color
  }

  toString () {
    return `${'® '.repeat(this.x).trim()}\n`.repeat(this.y).trim()
  }

  render () {
    console.log(this.toString())
  }
}
