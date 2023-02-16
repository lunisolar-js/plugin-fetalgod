import lunisolar from 'lunisolar'

import { fetalGod } from '../src/index'

lunisolar.extend(fetalGod)

describe('test plugins-fetalGod ', () => {
  it('2022-07-08', () => {
    const lsr = lunisolar('2022-07-08')
    expect(lsr.fetalGod).toBe('倉庫棲外東南')
    expect(lsr.fetalGodData.stemPlace).toBe('倉庫')
    expect(lsr.fetalGodData.branchPlace).toBe('雞棲')
    expect(lsr.fetalGodData.description).toBe('倉庫棲外東南')
    expect(lsr.fetalGodData.direction).toBe('外東南')
  })
})
