import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import '../CSS/styles.css'

export default function Form() {
    const [formData, setFormData] = useState({ name: '', email: '', pass: '' })
    const { name, email, pass } = formData

    //    //change listiner ..fist Aproach
    //    const onChangeForName = (e) =>{
    //         setFormData(

    //            {name: e.target.value,email,pass}
    //         )

    //     }
    //     const onChangeForEmail = (e) =>{
    //         setFormData(

    //             {name,email: e.target.value,pass}

    //         )

    //     }
    //     const onChangeForPassword = (e) =>{

    //         setFormData(

    //             {name,email,pass: e.target.value}
    //         )

    //     }

    //2nd approach
    const onChangeHandeler = (e) => {
        let fildName = e.target.name; //get element name
        // switch (fildName) {
        //     case 'name': setFormData({
        //         name: e.target.value, email, pass
        //     })
        //         break;
        //     case 'email': setFormData(
        //         { name, email: e.target.value, pass }
        //     )
        //         break;
        //     case 'password': setFormData(
        //         { name, email, pass: e.target.value }
        //     )
        //         break;
        // }
        //..or..
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmitForm = (e) => {
        console.log(formData)
        e.preventDefault()
    }
    const onClickResetBtn = () => {
        console.log("resetBtn clicked");
        setFormData(
            { name: '', email: '', pass: '' }
        )
    }
    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <div><lable for="name">Name: </lable>
                    <input type="text" name="name" onChange={onChangeHandeler} value={name} required />
                </div>
                <div><lable for="email">Email: </lable>
                    <input type="email" name="email" onChange={onChangeHandeler} value={email} required />
                </div>
                <div><lable for="password">Password: </lable>
                    <input type="password" name="pass" onChange={onChangeHandeler} value={pass} required />
                </div>

                <div>
                    <button type="submit">Submit</button>
                    <button type="reset" onClick={onClickResetBtn}>Reset</button>
                </div>
            </form>
        </div>
    )
}
