import { useRef, type FormEvent } from "react";


type NewGoalProps = {
    onAddGoal: (goal:string, summary: string)=>void
}
export default function NewGoal({onAddGoal}:NewGoalProps){
    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)
    function handleSumbit(e: FormEvent){
        e.preventDefault();
        const enteredGoal = goal.current!.value
        const enteredSummary = summary.current!.value
        onAddGoal(enteredGoal, enteredSummary)
    }
    return <form onSubmit={handleSumbit}>
        <p>

        <label htmlFor="goal">
            Your goal
        </label>
            <input id='goal' type="text" ref={goal} />
        </p>
        <p>

        <label htmlFor="summary">
            Short summary
        </label>
            <input id='summary' type="text" ref={summary}/>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
}