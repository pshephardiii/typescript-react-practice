// this is a wrapper component that's meant to be reused over and over
// this imported... thing... lets us make it so that all possible input props can be added and dealt with
import { ComponentPropsWithoutRef } from "react"

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>

export default function Input({label, id, ...props}: InputProps) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </p>
    )
}