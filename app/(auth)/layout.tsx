import React from 'react'

//if you want your parent component to hold styling you can make use of 
//lay out and add children withing

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-full flex items-center justify-center'>
            {children}
        </div>
    )
}

export default AuthLayout