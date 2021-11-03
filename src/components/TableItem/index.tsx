import * as C from './styles'
import { Item } from '../../types/Item'

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return(
        <C.TableLine>
            <C.TableColumn>Teste</C.TableColumn>
            <C.TableColumn>{item.category}</C.TableColumn>
        </C.TableLine>
    )
}