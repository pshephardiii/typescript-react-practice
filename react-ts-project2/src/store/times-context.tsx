import { createContext } from 'react'

// Context provides a way to pass data through the component tree without having to pass props down manually at every level
// Can contain methods that can manipulate context value

type Timer = {
    name: string;
    duration: number
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[]
}

// merging the state with methods
type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimers: () => void,
    stopTimers: () => void
}

const TimersContext = createContext<TimersContextValue | null>(null)