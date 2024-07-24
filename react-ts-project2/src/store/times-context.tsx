import { createContext, useContext, useReducer, type ReactNode } from 'react'

// Context provides a way to pass data through the component tree without having to pass props down manually at every level
// Can contain methods that can manipulate context value

export type Timer = {
    name: string;
    duration: number
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[]
}

const initialState: TimersState = {
    isRunning: true,
    timers: []
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

type StartTimersAction = {
    type: 'START_TIMERS'
}

type StopTimersAction = {
    type: 'STOP_TIMERS'
}

type AddTimerAction = {
    type: 'ADD_TIMER',
    payload: Timer
}

// action object
type Action = StartTimersAction | StopTimersAction | AddTimerAction

function timersReducer(state: TimersState, action: Action): TimersState {
    if (action.type === 'START_TIMERS') {
        return {
            ...state, 
            isRunning: true
        }
    }
    if (action.type === 'STOP_TIMERS') {
        return {
            ...state,
            isRunning: false
        }
    }
    if (action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [
                ...state.timers,
                {
                    name: action.payload.name,
                    duration: action.payload.duration
                }
            ]
        }
    }

    return state
}

export default function TimersContextProvider({children}: timersContextProviderProps) {

    // just like useState, but used when the state is more complex and when there are multiple triggers to induce the state
    const [timersState, dispatch] = useReducer(timersReducer, initialState)

    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData) {
            dispatch({ type: 'ADD_TIMER', payload: timerData })
        },
        startTimers() {
            dispatch({ type: 'START_TIMERS' })
        },
        stopTimers() {
            dispatch({ type: 'STOP_TIMERS' })
        }
    }
    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}