/* global describe, it, test, expect */
// change require to imports
import * as files from '../src/files'
import * as mealCalendarMethods from '../src/index'

const methodsList = {
  getMealCalendar: mealCalendarMethods.__find('mealCalendar', mealCalendarMethods.files),
  getFVGLMC: mealCalendarMethods.__find('firstVeganGLMC', mealCalendarMethods.files)
}

describe('testing static data files returns array', () => {
  const testFileIsNotEmpty = (method) => {
    it('method ' + method + '()', () => {
      var result = methodsList[method]
      expect(result).not.toBe('')
    })
  }
  testFileIsNotEmpty('getMealCalendar')
  testFileIsNotEmpty('getFVGLMC')
})

describe('testing static data files returns array', () => {
  test('getMealCalendar should return some data', () => {
    var result = mealCalendarMethods.getMealCalendar()
    expect(result).not.toBe('')
  })

  // @TODO yes, it's a bad name
  test('getFVGLMC should return data from second file', () => {
    var result = mealCalendarMethods.getFVGLMC()
    expect(result).not.toBe('')
  })
})