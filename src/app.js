/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import * as legoMaker1 from './lego-1-factory-pattern.js'
import * as LegoBrick2 from './lego-2-constructor-pattern.js'
import * as LegoBrick3 from './lego-3-constructor-prototype-pattern.js'
import * as LegoBrick4 from './lego-4-class.js'

// Testing part 1
try {
  console.log('\n- 1 -------------------\n')
  const lego = legoMaker1.createLegoBrick()
  lego.render()
} catch (e) {
  console.error('ERROR: ', e.message)
}

// Testing part 2
try {
  console.log('\n- 2 -------------------\n')
  let lego = new LegoBrick2()
  lego.render()
  console.log()

  lego = new LegoBrick2(1, 3, 'blue')
  lego.render()
} catch (e) {
  console.error('ERROR: ', e.message)
}

// Testing part 3
try {
  console.log('\n- 3 -------------------\n')
  let lego = new LegoBrick3()
  lego.render()
  console.log()

  lego = new LegoBrick3(5, 2)
  lego.render()
} catch (e) {
  console.error('ERROR: ', e.message)
}

// Testing part 4
try {
  console.log('\n- 4 -------------------\n')
  let lego = new LegoBrick4()
  lego.render()
  console.log()

  lego = new LegoBrick4(3, 2)
  lego.render()
} catch (e) {
  console.error('ERROR: ', e.message)
}
