import React, { useState } from 'react';
import axios from 'axios';
const Form = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
    const handle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };
const [sucess, setSucess]=useState(null);
    const submit = () => {
        axios.post("http://localhost:8080/postdata",form).then(res => setSucess(res.data)).catch(err => setSucess(err.message));
    };

    return (
        <div>
            <style>
                {`
                form {
                    max-width: 400px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f0f0f0;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                h2 {
                    margin-bottom: 20px;
                    color: #333;
                }

                label {
                    display: block;
                    margin-bottom: 10px;
                    font-weight: bold;
                    color: #555;
                }

                input[type='text'],
                input[type='email'],
                input[type='tel'],
                input[type='password'] {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }

                input[type='submit'] {
                    background-color: #007bff;
                    color: white;
                    padding: 10px 15px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    transition: background-color 0.3s ease;
                }

                input[type='submit']:hover {
                    background-color: #0056b3;
                }
                `}
            </style>
            <form>
                <h2>Registration Form</h2>

                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' value={form.name} onChange={handle} placeholder='Enter your name' /><br />

                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' value={form.email} onChange={handle} placeholder='Enter your email' /><br />

                <label htmlFor='phone'>Phone:</label>
                <input type='tel' id='phone' name='phone' value={form.phone} onChange={handle} placeholder='Enter your phone number' /><br />

                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' value={form.password} onChange={handle} placeholder='Enter your password' /><br />
                <input type='submit' onClick={submit} value='Submit' />
                <h3>{sucess}</h3>
            </form>
        </div>
    );
};

export default Form;
