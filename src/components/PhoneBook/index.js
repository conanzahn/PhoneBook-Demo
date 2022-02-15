import React, { useState } from 'react';

import './style.scss';

function PhoneBook (props) {
    const [input, setInput] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(inputObj => ({...inputObj, [name]: value}))
        // console.log('input',input)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('onsubmit',input)

        // child component calls the parent callback func using props
        const {info, setInfo} = props
        const newInput = [...info, input]
        setInfo(newInput)
    }

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-25'>
                        <label className='label'>First Name </label>
                    </div>
                    <div className='col-75'>
                        <input 
                        className='input'
                        name='userFirstname'
                        type='firstname'
                        placeholder='Jon'
                        onChange={handleChange}/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-25'>
                        <label className='label'>Last Name </label>
                    </div>
                    <div className='col-75'>
                        <input 
                        className='input'
                        name='userLastname'
                        type='lastname'
                        placeholder='snow'
                        onChange={handleChange}/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-25'>
                        <label className='label'>Phone </label>
                    </div>
                    <div className='col-75'>
                        <input 
                        className='input'
                        name='userPhone'
                        type='phone'
                        placeholder='6666668888'
                        onChange={handleChange}/>
                    </div>
                </div>

                <div className='row button'>
                    <button type='submit' className='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default PhoneBook;