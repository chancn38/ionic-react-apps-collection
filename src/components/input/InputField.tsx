import {
  IonIcon,
  IonInput,
  IonItem
} from '@ionic/react'
import { eye, eyeOff } from 'ionicons/icons'
import React, { useState } from 'react'
import { InputFieldProps } from '../../model/types'
import { Controller } from 'react-hook-form'

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  register,
  defaultValue,
  errors,
  placeholder,
  control
}) => {
  const getErrorMessage = (name: string) => {
    return errors[name]?.message || 'Unknown error occurred.'
  }

  const [showPass, setShowPass] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setShowPass(prevState => !prevState)
  }

  switch (type) {
    case 'text':
      return (
        <div
          className={errors[name] ? 'animate__animated animate__headShake' : ''}
        >
          <IonItem
            className={`login-input-cont ${errors[name] && 'login-input-invalid'
              }`}
            lines='none'
          >
            <Controller
              name={name}
              control={control}
              rules={{
                // pattern: {
                //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                //   message: 'Invalid email address'
                // },
                 required: `Please enter your ${name}.`
              }}

              render={({ field }) => (
                <IonInput
                  mode='ios'
                  type={type}
                  className='login-input'
                  placeholder={placeholder}
                  value={field.value}
                  onIonInput={(e: any) => field.onChange(e.detail.value!)}
                  onIonBlur={field.onBlur}

                />
              )}
            />


            {/* <IonInput
              mode='ios'
              type={type}
              className='login-input'
              placeholder={placeholder}
              onIonInput={e => {
                if (e.target.value !== '') {
                  clearErrors(name)
                }
              }}
              {...register(name, {
                required: `Please enter your ${name}.`,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address'
                }
              })}
            /> */}


          </IonItem>
          {errors[name] && <span>{getErrorMessage(name)}</span>}
        </div>
      )
    case 'password':
      return (
        <div
          className={errors[name] ? 'animate__animated animate__headShake' : ''}
        >
          <IonItem
            className={`login-input-cont ${errors[name] && 'login-input-invalid'
              }`}
            lines='none'
          >
            <Controller
              name={name}
              control={control}
              rules={{ required: `Please enter your ${name}.` }}
              render={({ field }) => (
                <IonInput
                  mode='ios'
                  type={showPass ? 'text' : 'password'}
                  className='login-input'
                  placeholder={placeholder}
                  value={field.value}
                  onIonInput={(e: any) => field.onChange(e.detail.value!)}
                  onIonBlur={field.onBlur}
                />
              )}
            />
            {/* <IonInput
              mode='ios'
              type={showPass ? 'text' : 'password'}
              className='login-input'
              placeholder={placeholder}
              onIonInput={e => {
                if (e.target.value !== '') {
                  clearErrors(name)
                }
              }}
              {...register(name, { required: `Please enter your ${name}.` })}
            /> */}
            <IonIcon
              icon={showPass ? eyeOff : eye}
              slot='end'
              onClick={togglePasswordVisibility}
            />
          </IonItem>
          {errors[name] && <span>{getErrorMessage(name)}</span>}
        </div>
      )

    default:
      return null
  }
}

export default InputField
