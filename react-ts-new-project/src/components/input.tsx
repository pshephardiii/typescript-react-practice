// this is a wrapper component that's meant to be reused over and over

type InputProps = {
    label: string;
    id: string;
}

export default function Input({label, id}: InputProps) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" />
        </p>
    )
}