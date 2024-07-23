import { ComponentPropsWithoutRef, FormEvent, useRef, useImperativeHandle, forwardRef } from "react"

export type FormHandle = {
    clear: () => void
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
    // unknown means we don't know what the value will be ahead of time
    onSave: (value: unknown) => void
}

const Form = forwardRef<FormHandle, FormProps>(function Form(
    {onSave, children, ...otherProps}, ref) {

    const form = useRef<HTMLFormElement>(null)

    useImperativeHandle(ref, () => {
        return {
            clear() {
                console.log('CLEARING')
                form.current?.reset()
            }
        }
    })

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        // FormData allows us to gather all of the values that have been inputted and group them together
        const formData = new FormData(event.currentTarget)
        // simplifies the FormData object
        const data = Object.fromEntries(formData)
        onSave(data)
        form.current?.reset()
    }

    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={form}>
            {children}
        </form>
    )
})

export default Form