import { useRef, type FormEvent } from 'react'

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}

export default function NewGoal({onAddGoal}: NewGoalProps) {

    // HTML Input Element is a typeScript type
    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        // exclamation point makes clear that the value will never be null... but need to be certain, because app will crash if it is null
        const enteredGoal = goal.current!.value
        const enteredSummary = summary.current!.value

        // resets form inputs on submit
        event.currentTarget.reset()
        onAddGoal(enteredGoal, enteredSummary)
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>
                <label>Your goal</label>
                <input id="goal" type="text" ref={goal} />
            </p>
            <p>
                <label>Short Summary</label>
                <input id="summary" type="text" ref={summary} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}