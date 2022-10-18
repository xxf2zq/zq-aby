import React, { memo, useState } from 'react'

import filterdata from '@/assets/data/filter_data.json'
import ClassNames from 'classnames'

import { AllFilterWrapper } from './style'
const index = memo(() => {
  const [selectitems, setselectitems] = useState<string[]>([])
  const additem = (item: string) => {
    const newitems = [...selectitems]
    if (newitems.includes(item)) {
      const index = newitems.findIndex((i) => i === item)
      newitems.splice(index, 1)
    } else {
      newitems.push(item)
    }
    setselectitems(newitems)
  }
  return (
    <AllFilterWrapper>
      {filterdata.map((item) => {
        return (
          <div
            className={ClassNames('item', {
              active: selectitems.includes(item),
            })}
            key={item}
            onClick={() => additem(item)}
          >
            {item}
          </div>
        )
      })}
    </AllFilterWrapper>
  )
})

export default index
