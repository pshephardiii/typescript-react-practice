// import { type ReactNode } from 'react'
// ReactNode type should be set for children of object
// also there's a type PropsWithChildren

type CourseGoalProps = {
    title: string;
    description: string
}

export default function CourseGoal({ title, description }: CourseGoalProps ) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button>Delete</button>
        </article>
    )
}