import { ComponentPropsWithoutRef } from "react"

// the additional prop conditions help typeScript recognize which type is which
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never
}

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string
}

// type predicate: a more specific type

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
    return 'href' in props
}

export default function Button(props: ButtonProps | AnchorProps) {

    // check if inputted props include an href, which will be the case with anchor tags but not buttons
    if (isAnchorProps(props)) {
        return (
            <a className="button" {...props}></a>
        )
    }

    return (
        <button className="button" {...props}></button>
    )
}