interface props {
    className?: string
}

export const Input = () => {
    return (
        <input class={cn('input', className)} type={type} enterkeyhint="Send" />
    )
}