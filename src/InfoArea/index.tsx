import * as C from './styles'
import { formatCurrentMouth }  from '../helpers/dateFilter'
import { ResumeItem } from '../components/ResumeItem/index'
 
type Props = {
    CurrentMouth: string
    onMonthChange: (newMouth: string) => void
    income: number;
    expense: number
}

export const InfoArea = ({ CurrentMouth, onMonthChange, income, expense }: Props) => {
    const handlePrevMouth = () => {
        let [year, month] = CurrentMouth.split('-')  
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)     
        currentDate.setMonth( currentDate.getMonth() - 1 ) 
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMouth = () => {
        let [year, month] = CurrentMouth.split('-')  
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)     
        currentDate.setMonth( currentDate.getMonth() + 1 ) 
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }
    return(
        <C.Container>
            <C.MouthArea>
                <C.MouthArrow onClick={handlePrevMouth}>⬅️</C.MouthArrow>
                    <C.MouthTitle>{formatCurrentMouth(CurrentMouth)}</C.MouthTitle>
                <C.MouthArrow onClick={handleNextMouth}>➡️</C.MouthArrow>
            </C.MouthArea>
            <C.ResumeArea>
                <ResumeItem title='Receitas' value={income}></ResumeItem>
                <ResumeItem title='Despesas' value={expense}></ResumeItem>
                <ResumeItem title='Balanço' value={income - expense} 
                color={(income - expense) < 0 ? 'red' : 'green'}></ResumeItem>
            </C.ResumeArea>
        </C.Container>
    )
}
