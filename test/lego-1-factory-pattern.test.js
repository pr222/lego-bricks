/**
 * Tests for the lego-1-factory-pattern module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import * as legoMaker1 from '../src/lego-1-factory-pattern.js'

const expect = chai.expect
describe('Factory Pattern -----------------------', () => {
  // ------------------------------------------------------------------------------
  //  createLegoBrick
  // ------------------------------------------------------------------------------
  describe('factory method', () => {
    it('Passing no values should return {x: 2, y: 4, color: \'red\', toString: [Function], render: [Function]}', () => {
      const obj = legoMaker1.createLegoBrick()
      expect(obj).to.have.property('x', 2)
      expect(obj).to.have.property('y', 4)
      expect(obj).to.have.property('color', 'red')
      expect(obj).to.have.property('toString').that.is.a('function')
      expect(obj).to.have.property('render').that.is.a('function')
    })

    it('Passing 10, 3 and  \'blue\' should return {x: 10, y: 3, color: \'blue\', toString: [Function], render: [Function]}', () => {
      const obj = legoMaker1.createLegoBrick(10, 3, 'blue')
      expect(obj).to.have.property('x', 10)
      expect(obj).to.have.property('y', 3)
      expect(obj).to.have.property('color', 'blue')
      expect(obj).to.have.property('toString').that.is.a('function')
      expect(obj).to.have.property('render').that.is.a('function')
    })
  })

  // ------------------------------------------------------------------------------
  //  toString
  // ------------------------------------------------------------------------------
  describe('toString', () => {
    it('Passing 5 and 2, toString() should return \'® ® ® ® ®\\n® ® ® ® ®\'', () => {
      const result = legoMaker1.createLegoBrick(5, 2).toString()
      expect(result).to.eql('® ® ® ® ®\n® ® ® ® ®')
    })

    it('Passing 3 and 3, toString() should return \'® ® ®\\n® ® ®\\n® ® ®\'', () => {
      const result = legoMaker1.createLegoBrick(3, 3).toString()
      expect(result).to.eql('® ® ®\n® ® ®\n® ® ®')
    })
  })
})
