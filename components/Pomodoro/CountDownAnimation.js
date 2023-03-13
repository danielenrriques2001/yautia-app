import { useContext } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingsContext } from '../../components/context/PomodoroSettingProvider'

const CountdownAnimation = ({pomodoro, timer, animate, children}) => {

  const { stopAnimate } = useContext(SettingsContext)


    return (
      <CountdownCircleTimer
        colors={['#378a27', '#5d0c6e', '#e81341', '#A3B030']}
        colorsTime={[5, 10, 10, 3]}
        key={pomodoro}
        isPlaying = {animate}
        duration={timer * 60}
        size={250}
        trailColor = {'#fff'}
        trailStrokeWidth = {35}
        strokeWidth = {35}
        onComplete={ () => {
          stopAnimate()
          
        }}
      >
        {children}
       
      </CountdownCircleTimer>
    )
}

export default CountdownAnimation;

