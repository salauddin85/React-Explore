import React from 'react';

const ReusableForm = ({formtitle, submitbtnText, handleSubmit}) => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data ={
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data);
        // Handle form submission logic here
    }
    return (
        <div>
                <h2 className='text-3xl font-bold underline text-amber-600 mb-3 p-4'>{formtitle}</h2>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit">{submitbtnText}</button>
                </form>
        </div>
    );
};

export default ReusableForm;