import CourseGoal from "./components/CourseGoal";
import goalsImg from './assets/goals.jpg'
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type handleGoalState = {
  title: string;
  description: string;
  id: number;
}
export default function App() {

  const [goals, setGoal] = useState <handleGoalState[]>([])
  function handleAddGoal(goal:string, summary:string){
    const newGoal : handleGoalState = {
      title: goal,
      description: summary,
      id: Math.random()
    }
    setGoal(goals=>[...goals, newGoal])

  }
  function handleDeleteGoal(id:number){
    setGoal(goals=>goals.filter(goal=>goal.id !== id))
  }
  console.log(goals);
  
  return (
    <main>
      <Header image={{src: goalsImg , alt:'A list of goals'}}>
<h1>Your Course Goals</h1>
      </Header>
      
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList onDelete={handleDeleteGoal} goals={goals}/>
    </main>
  )
}
