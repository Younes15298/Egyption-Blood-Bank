
const Button = ({
    type,
    id,
    className,
    value,
    onClick
}) => {

    return (
        <>
            <button onClick={onClick} type={type} id={id} className={className}>{value}</button>
        </>
    )
}

export default Button;