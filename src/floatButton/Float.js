import React, { useEffect, useState } from 'react'
import { GoMoveToTop } from "react-icons/go";
import './Float.css'

export default function Float() {

    const [float, setFloat] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? setFloat(true) : setFloat(false)
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {
                float && (

                    <GoMoveToTop className='float'
                        onClick={scrollUp} >
                        {/* <GoMoveToTop /> */}

                    </GoMoveToTop>

                )
            }
        </div>
    )
}
