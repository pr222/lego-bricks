/**
 * Tests for lego-4-class module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import { LegoBrick } from '../src/lego-4-class.js'

const expect = chai.expect

describe('Class Syntax --------------------------', () => {
// ------------------------------------------------------------------------------
//  constructor
// ------------------------------------------------------------------------------
  describe('constructor', () => {
    it('instantiated object should be instance of LegoBrick', () => {
      const legoBrick = new LegoBrick()
      expect(legoBrick).to.be.an.instanceof(LegoBrick)
    })

    it('Passing no arguments should create an LegoBrick object', () => {
      const legoBrick = new LegoBrick()
      expect(legoBrick).to.have.property('x', 2)
      expect(legoBrick).to.have.property('y', 4)
      expect(legoBrick).to.have.property('color', 'red')
    })

    it('Passing 5, 2 and \'green\' should create an LegoBrick object', () => {
      const legoBrick = new LegoBrick(5, 2, 'green')
      expect(legoBrick).to.have.property('x', 5)
      expect(legoBrick).to.have.property('y', 2)
      expect(legoBrick).to.have.property('color', 'green')
    })
  })

  // ------------------------------------------------------------------------------
  //  render
  // ------------------------------------------------------------------------------
  describe('render', () => {
    it('should have render prototype function', () => {
      expect(LegoBrick.prototype).to.have.ownProperty('render')
      expect(LegoBrick.prototype.render).to.be.a('Function')
    })
  })

  // ------------------------------------------------------------------------------
  //  toString
  // ------------------------------------------------------------------------------
  describe('toString', () => {
    it('should have toString prototype function', () => {
      expect(LegoBrick.prototype).to.have.ownProperty('toString')
      expect(LegoBrick.prototype.toString).to.be.a('Function')
    })

    it('Creating an object with 5 and 2, toString() should return \'® ® ® ® ®\\n® ® ® ® ®\'', () => {
      const legoBrick = new LegoBrick(5, 2)
      const result = legoBrick.toString()
      expect(result).to.eql('® ® ® ® ®\n® ® ® ® ®')
    })

    it('Creating an object with 3 and 3, toString() should return \'® ® ®\\n® ® ®\\n® ® ®\'', () => {
      const legoBrick = new LegoBrick(3, 3)
      const result = legoBrick.toString()
      expect(result).to.eql('® ® ®\n® ® ®\n® ® ®')
    })
  })
})
