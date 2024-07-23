// polymorphic component... a wrapper component without knowing what element it will wrap

import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

type ContainerProps<T extends ElementType> = {
    // ElementType is some valid indicator or identifier of the element
    as?: T
    children: ReactNode
} & ComponentPropsWithoutRef<T>

// C is just being used as a placeholder like T as we don't know what the element type will be
export default function Container<C extends ElementType>({as, children, ...props}: ContainerProps<C>) {
    const Component = as || 'div'
    return (
        <Component {...props}>{children}</Component>
    )
}