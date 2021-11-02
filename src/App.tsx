import React, { useState, useEffect } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { items } from './data/items'
import { categories } from './data/categories'
import { getCurrentMounth} from './helpers/dateFilter'

export default function App () {
  const [List, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [CurrentMonth, setCurrentMounth] = useState(getCurrentMounth())

  useEffect(() => {

  },[List, CurrentMonth])
  return(
    <C.Container>
        <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header> 
        <C.Body>
           
          {/* Area de Informações */}

          {/* Area de inserção */}

          {/* Tabela de itens */}

        </C.Body>  
    </C.Container>
  )
}