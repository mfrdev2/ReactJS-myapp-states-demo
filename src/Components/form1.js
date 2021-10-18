import React,{useState} from 'react'
import '../CSS/styles.css'

export default function Form() {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[pass,setPass] = useState("")
    const onChangeForName = (e) =>{
        setName(
            e.target.value
        )

    }
    const onChangeForEmail = (e) =>{
        setEmail(
            e.target.value
        )

    }
    const onChangeForPassword = (e) =>{
        
    setPass(
            e.target.value
        )
    
    }
    
    const onSubmitForm = (e)=>{
        console.log(name  ,email ,pass)
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit ={onSubmitForm}>
            <div><lable for="name">Name: </lable>
                <input type = "text" name= "name" onChange = {onChangeForName} value={name} required/>
            </div>
            <div><lable for="email">Email: </lable>
                <input type = "email" name= "email" onChange = {onChangeForEmail} value={email} required/>
            </div>
            <div><lable for="password">Password: </lable>
                <input type = "password" name= "password" onChange = {onChangeForPassword} value={pass} required/>
            </div>

            <div>
                <button type ="submit">Submit</button>
                <button type ="reset">Reset</button>
            </div>
            </form>
        </div>
    )
}
