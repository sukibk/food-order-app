
const Input = (props)=>{
    return <>
        <label htmlFor={props.id}>{props.label}</label>
        <input {...props}/>
    </>
}

export default Input;