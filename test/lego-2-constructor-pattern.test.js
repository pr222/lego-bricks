/**
 * Tests for lego-2-constructor-pattern module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import { LegoBrick } from '../src/lego-2-constructor-pattern.js'

const expect = chai.expect

describe('Constructor Pattern -------------------', () => {
// ------------------------------------------------------------------------------
//  constructor
// ------------------------------------------------------------------------------
  describe('constructor', () => {
    it('instantiated object should be instance of LegoBrick', () => {
      const legoBrick = new LegoBrick()
      expect(legoBrick).to.be.an.instanceof(LegoBrick)
    })

    it('Passing no arguments should return {x: 2, y: 4, color: \'red\', toString: [Function], render: [Function]}', () => {
      const legoBrick = new LegoBrick()
      expect(legoBrick).to.have.property('x', 2)
      expect(legoBrick).to.have.property('y', 4)
      expect(legoBrick).to.have.property('color', 'red')
      expect(legoBrick).to.have.property('toString').that.is.a('function')
      expect(legoBrick).to.have.property('render').that.is.a('function')
    })

    it('Passing 5, 2 and \'green\' should return {x: 5, y: 2, color: \'green\', toString: [Function], render: [Function]}', () => {
      const legoBrick = new LegoBrick(5, 2, 'green')
      expect(legoBrick).to.have.property('x', 5)
      expect(legoBrick).to.have.property('y', 2)
      expect(legoBrick).to.have.property('color', 'green')
      expect(legoBrick).to.have.property('toString').that.is.a('function')
      expect(legoBrick).to.have.property('render').that.is.a('function')
    })
  })

  // ------------------------------------------------------------------------------
  //  toString
  // ------------------------------------------------------------------------------
  describe('toString', () => {
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
