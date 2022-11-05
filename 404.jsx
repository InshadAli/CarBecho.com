import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ErrorPage = () => {
  const router =  useRouter()

  // function for useRouter to redirect on home page.
  function handleRouter(){
    router.push('/')
  }

  // when we want to redirect page automatically after 5 Seconds. we will use UseEffect() Hook.
  useEffect(()=>{
    setTimeout(() => {
      router.push('/')
    }, 5000);
  })

  return (
    <>
    <div style={{textAlign:'center'}}>
        <h1>Opps Something went Wrong...</h1>
        {/* using href to redirect on another Page. */}
        {/* <Link href={'/'}><button style={{color:'red', background:'skyblue'}} >Go Back to Homepage</button></Link> */}
        
        {/* using useRouter to redirect on another Page. */}
        {/* <button onClick={()=>router.push('/')} style={{color:'red', background:'skyblue'}} >Go Back to Homepage</button> */}
        
        {/* using Function for useRouter to redirect on another Page. */}
        <button onClick={handleRouter} style={{color:'red', background:'skyblue', cursor:'pointer'}} >Go Back to Homepage</button>
    </div>
    </>
  )
}

export default ErrorPage