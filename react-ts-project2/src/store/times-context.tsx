import { createContext, useContext, type ReactNode } from 'react'

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

// custom hook
export function useTimersContext() {
    const timersCtx = useContext(TimersContext)
    if (timersCtx === null) {
        throw new Error('TimersContext is null - that should not be the case')
    }
    return timersCtx
}

type timersContextProviderProps = {
    children: ReactNode
}

const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer() {

    },
    startTimers() {

    },
    stopTimers() {

    }
}
export default function TimersContextProvider({children}: timersContextProviderProps) {
    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}