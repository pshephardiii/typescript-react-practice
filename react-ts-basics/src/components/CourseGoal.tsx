import { type ReactNode } from 'react'
// ReactNode type should be set for children of object
// also there's a type PropsWithChildren

type CourseGoalProps = {
    id: number;
    title: string;
    children: ReactNode;
    onDelete: (id: number) => void
}

export default function CourseGoal({ title, id, children, onDelete }: CourseGoalProps ) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
}