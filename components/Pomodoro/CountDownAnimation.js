import { useContext, useState } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { PomodoroContext } from '../../components/context/PomodoroSettingProvider'

const CountdownAnimation = ({pomodoro, animate, children}) => {

  const [started, setStarted] = useState(false);


  const { stopAnimate, executing, setCurrentTimer, startTimer } = useContext(PomodoroContext);

    return (
      <CountdownCircleTimer
        colors={['#9DCEC7', '#9EBBBA', '#0369A0', '#B28FBE', '#EC1802']}
        colorsTime={[pomodoro * 60, pomodoro * 60 / 2, pomodoro * 60 / 3, pomodoro * 60 / 4, 0]}
        key={pomodoro}
        isPlaying = {animate}
        duration={pomodoro * 60}
        size={250}
        trailStrokeWidth = {5}
        strokeWidth = {25}
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

