import './input.css';

const Input = ({
    type,
    id,
    className,
    placeholder
}) => {

    return (
        <>
            <div>
                <input type={type} id={id} className={className} placeholder={placeholder} />
            </div>
        </>
    )
}

export default Input;