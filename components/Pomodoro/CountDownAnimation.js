import { useContext, useState } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { PomodoroContext } from '../../components/context/PomodoroSettingProvider'

const CountdownAnimation = ({pomodoro, animate, children}) => {

  const [started, setStarted] = useState(false);

  const { stopAnimate, executing, setCurrentTimer, startTimer } = useContext(PomodoroContext);

    return (
      <CountdownCircleTimer
        colors={['#BAF6C4', '#76eac6', '#d49b7e', '#c67f43', '#bb5865']}
        colorsTime={[pomodoro * 60, pomodoro * 60 / 2, pomodoro * 60 / 3, pomodoro * 60 / 4, 0]}
        key={pomodoro}
        isPlaying = {animate}
        duration={pomodoro * 60}
        size={250}
        trailStrokeWidth = {5}
        strokeWidth = {9}
        onComplete={ () => {

          setTimeout(() => {
            if(executing.active === 'work') {
              stopAnimate();

            if(started) {
               setCurrentTimer('long');
            } else {
              setCurrentTimer('short');
              setStarted(true)

            }
              startTimer();
            }

            if(executing.active === 'short' ) {
                setCurrentTimer('work');
              }


            if(executing.active === 'long') {
              stopAnimate();
              setCurrentTimer('work');

            }
          }, 3000);
        }}
      >
      
        {children}
       
      </CountdownCircleTimer>
    )
}

export default CountdownAnimation;

