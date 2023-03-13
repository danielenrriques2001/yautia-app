import { useContext } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { PomodoroContext } from '../../components/context/PomodoroSettingProvider'

const CountdownAnimation = ({pomodoro, animate, children}) => {

  const { stopAnimate } = useContext(PomodoroContext)


    return (
      <CountdownCircleTimer
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
        key={pomodoro}
        isPlaying = {animate}
        duration={pomodoro * 60}
        size={250}
        trailColor = {'#fff'}
        trailStrokeWidth = {35}
        strokeWidth = {35}
        onComplete={ () => {

        }}
      >
      
        {children}
       
      </CountdownCircleTimer>
    )
}

export default CountdownAnimation;

