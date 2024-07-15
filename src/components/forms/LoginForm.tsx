
import { toaster } from 'evergreen-ui'
import { default as React, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import LoadingButton from '../button/LoadingButton'
import InputField from '../input/InputField'

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const history = useHistory();
  
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors }
  } = useForm()
  const [isLoading, setIsLoading] = useState(false)

  const clickSubmit = async (data: any) => {
    setIsLoading(true);
    if (data.email === 'admin' && data.password === 'admin') {
      login();
      setTimeout(()=>{
        history.push('/');
      },1000);
    }else{
      toaster.danger('These credentials do not match our records.', {
        duration: 3
      });
      setIsLoading(false)
    }
  }

  return (
    <>
      <form className='login-form' onSubmit={handleSubmit(clickSubmit)}>
        {/* Username input Field */}
        <InputField
          placeholder='Email'
          type='text'
          name='email'
          register={register}
          errors={errors}
          control={control}
        />
        {/* Password Input  Field*/}
        <InputField
          placeholder='Password'
          type='password'
          name='password'
          register={register}
          errors={errors}
          control={control}
        />
        <LoadingButton loading={isLoading} loadingType='circular' type='submit' className='login-btn'> Login </LoadingButton>
      </form>
    </>
  )
}

export default LoginForm
