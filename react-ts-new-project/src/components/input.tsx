// this is a wrapper component that's meant to be reused over and over
// this imported... thing... lets us make it so that all possible input props can be added and dealt with
import { forwardRef, type ComponentPropsWithoutRef } from "react"

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    {label, id, ...props},
    ref
) {
    return (
        <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} {...props} ref={ref} />
        </p>
    )
})

export default Input