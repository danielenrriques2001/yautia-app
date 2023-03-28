import { NavigationItemLink, LinkNavigationContainer } from '@/public/styles'
import {GiTomato, GiStabbedNote, GiTakeMyMoney} from 'react-icons/gi'
import {RiTodoFill} from 'react-icons/ri'
import {SiMinds} from 'react-icons/si'
const Dashboard = () => {
  return (
    <LinkNavigationContainer ColumnNumber = {2} Gap = {2} >
        <NavigationItemLink  BGColor = {'#C9215A'} href='/services/pomodoro'>Pomodoro Timer <GiTomato/> </NavigationItemLink>
        <NavigationItemLink  BGColor = {'#39BF92'} href='/services/appointment'>Appointment Administrator <GiStabbedNote/> </NavigationItemLink>
        <NavigationItemLink  BGColor = {'#18C0B4'} href='/services/budget'>Budget Tracker <GiTakeMyMoney/> </NavigationItemLink>
        <NavigationItemLink  BGColor = {'#CB8951'} href='/services/tasks'>To-do List <RiTodoFill/> </NavigationItemLink>
        <NavigationItemLink  BGColor = {'#546AD1'} href='/services/articles'>Learn More... <SiMinds/> </NavigationItemLink>
    </LinkNavigationContainer>
  )
}

export default Dashboard


