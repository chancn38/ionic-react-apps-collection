import React from 'react'

const LogoTitle: React.FC = () => {
    return (
        <div className='login-header'>
            <img className='login-logo' src='../assets/images/logo-dark.png' alt='' />
            <div>
                <h1 className='login-title ion-no-margin'>Welcome back!</h1>
                <p className='login-subTitle ion-no-margin'>Enter your email address and password to start managing your tasks.</p>
            </div>
        </div>
    )
}

export default LogoTitle
