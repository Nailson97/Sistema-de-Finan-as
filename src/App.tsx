import React, { useState, useEffect } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { items } from './data/items'
import { categories } from './data/categories'
import { getCurrentMounth, filterListByMouth} from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'

export default function App () {
  const [List, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [CurrentMonth, setCurrentMounth] = useState(getCurrentMounth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList( filterListByMouth(List, CurrentMonth) )
  },[List, CurrentMonth])

  const handleMouthChange = (newMouth: string) => {
    setCurrentMounth(newMouth)
  }
  return(
    <C.Container>
        <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header> 
        <C.Body>
           
          <InfoArea CurrentMouth={CurrentMonth}
          onMonthChange={handleMouthChange}
          income={income} expense={expense}/>

          {/* Area de inserção */}

         <TableArea list={filteredList}/>

        </C.Body>  
    </C.Container>
  )
}