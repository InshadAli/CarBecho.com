import React, { useEffect, useState } from 'react'

export default function Crud() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [users, setUsers] = useState([])
    const [toggle, setToggle] = useState(true)
    const [isEdited, setIsEdited] = useState(null)

    function handleSubmit(e){
        e.preventDefault();
        let form = {id: new Date().getTime(), name, email}
        if(!form){
            return
        }
        else if(form && !toggle){
            setUsers(
                users.map(user=>{
                    if(user.id === isEdited){
                        return {...user, name:name, email:email}
                    }
                    return user
                })
            )
            setToggle(true)
            setIsEdited(null)
            setName('')
            setEmail('')
        }
        else{
            setUsers([...users, form])
            setEmail('')
            setName('')
        }
    }

    useEffect(()=>{
        localStorage.setItem('users', JSON.stringify(users))
    },[users])

    useEffect(()=>{
        const data = localStorage.getItem('users')
        const newData = JSON.parse(data)
        setUsers(newData)
    },[])

    const removeUser = (id)=>{
        const removedUser = users.filter(user=>{
            return user.id !== id
        })
        setUsers(removedUser)
    }

    const editUser = (id)=>{
        const findUser = users.find((user)=>{
            return id===user.id
        })
        setName(findUser.name)
        setEmail(findUser.email)
        setToggle(false)
        setIsEdited(id)
    }   

  return (
    <div className='container'>
        <h1 className='text-center'>This is a Crud Application</h1>
        <hr/>
        <form className='d-flex flex-column align-items-center'>
            <input name='name'value={name} onChange={(e)=>{setName(e.target.value)}} className='w-25 m-2 p-2 rounded-1 border' type='text' placeholder='Your Full Name'/>
            <input name='email'value={email} onChange={(e)=>{setEmail(e.target.value)}} className='w-25 m-2 p-2 rounded-1 border' type='text' placeholder='Your Email'/>
            { toggle ? 
            <button onClick={handleSubmit} className='btn btn-outline-primary'>Add</button>
            :
            <button onClick={handleSubmit} className='btn btn-outline-primary'>Update</button>
            }
        </form>
        <hr/>
        <div className='container'>
            { users && users.length > 0 
            ? 
            <div className='d-flex flex-column align-items-center'>
                {
                    users.map((user)=>{
                        return(
                            <div className='border rounded-2 w-50 m-1 p-2' key={user.id}>
                                <h4>User Name : {user.name}</h4>
                                <h4>User Email : {user.email}</h4>
                                <button onClick={()=>editUser(user.id)} className='btn btn-outline-primary'>Edit</button>
                                <button onClick={()=>{removeUser(user.id)}} className='btn btn-outline-danger ms-2'>Remove</button>
                            </div>
                        )
                    })
                }
            </div>
            : <h1 className='text-center'>No Data Available</h1>
        }
        </div>
    </div>
  )
}
