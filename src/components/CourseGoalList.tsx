import { handleGoalState } from "../App";
import CourseGoal  from "./CourseGoal";

type GoalListProps = {
    goals: handleGoalState[];
    onDelete: (id:number)=>void
}

export default function CourseGoalList({goals, onDelete}:GoalListProps){
    return(
         <ul>

    {
      goals.map(goal=>
      <li key={goal.id}>

      <CourseGoal onDelete={onDelete} title={goal.title} description={goal.description} id={goal.id} />
      </li>
      )
     }
     </ul>
    )
}