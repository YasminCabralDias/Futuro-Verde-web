import Link from "next/link"

export default function Button({ children, element = "link", ...props }) {


    return (
        <>
            {element == 'link' ?
                <Link href="#" {...props} >
                    {children}
                </Link>
                :
                <div >
                    <input value={children} type="submit" {...props} />
                </div>
            }
        </>

    )
}