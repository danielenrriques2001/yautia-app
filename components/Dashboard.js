import { NavigationItemLink, LinkNavigationContainer } from '@/public/styles'
import {GiTomato, GiStabbedNote, GiTakeMyMoney} from 'react-icons/gi'
import {RiTodoFill} from 'react-icons/ri'
import {SiMinds} from 'react-icons/si'
const Dashboard = () => {
  return (
    <LinkNavigationContainer ColumnNumber = {2} Gap = {2} >
        <NavigationItemLink  BGColor = {'#EC2A4A'} href='/services/pomodoro'>Pomodoro Timer <GiTomato/> </NavigationItemLink>
        <NavigationItemLink  BGColor = {'#BF185D'} href='/services/appointment'>Appointment Administrator <GiStabbedNote/> </NavigationItemLink>
        <NavigationItemLink  BGColor = {'#04A94B'} href='/services/budget'>Budget Tracker <GiTakeMyMoney/> </NavigationItemLink>
        <NavigationItemLink  BGColor = {'#C4BE32'} href='/services/tasks'>To-do List <RiTodoFill/> </NavigationItemLink>
        <NavigationItemLink  BGColor = {'#324ECF'} href='/services/articles'>Learn More... <SiMinds/> </NavigationItemLink>
    </LinkNavigationContainer>
  )
}

export default Dashboard


