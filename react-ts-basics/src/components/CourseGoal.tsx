import { type ReactNode } from 'react'
// ReactNode type should be set for children of object
// also there's a type PropsWithChildren

type CourseGoalProps = {
    title: string;
    children: ReactNode;
}

export default function CourseGoal({ title, children }: CourseGoalProps ) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button>Delete</button>
        </article>
    )
}