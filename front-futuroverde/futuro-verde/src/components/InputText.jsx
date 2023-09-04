export default function InputText({label, id, ...props}){
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="text-slate-300">{label}</label>
            <input type="text" id={id} {...props}/>
        </div>
    )
}