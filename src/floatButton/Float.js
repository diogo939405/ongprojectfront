import React, { useEffect,useState } from 'react'


export default function Float() {

    const[float , setFloat] = useState(false)

    useEffect(() =>{
       window.addEventListener("scroll" , () =>{
        window.scrollY > 100 ? setFloat(true) : setFloat(false)
       })
    },[])

    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return (
        <div>
            {
                float &&(
                    <button style={{
                        position: "fixed",
                        top:"50px",
                        // left:"50px",
                        right:"50px",
                        height:"50px",
                        width:"50px",
                        fontSize:"50px"
                    }} onClick={scrollUp}>
                            ^
                    </button>
                )
            }
        </div>
    )
}
