
import { DeepMap, FieldError } from 'react-hook-form'
import { ComponentProps } from 'react'
import { IonButton } from '@ionic/react'

export interface InputFieldProps {
  type?: string
  name: string
  placeholder?: string
  register?: any // register function from useForm
  defaultValue?: any
  errors?: DeepMap<any, FieldError>
  // clearErrors: (name?: string | string[]) => void
  control: any
}


export interface LoadingButtonProps extends Omit<ComponentProps<typeof IonButton>, 'onClick'> {
  onClick?: () => void
  loading?: boolean
  type?: "button" | "submit" | "reset" | undefined
  loadingType?: "bubbles" | "circles" | "circular" | "crescent" | "dots" | "lines" | "lines-sharp" | "lines-sharp-small" | "lines-small" | undefined
  loadingText?: string
}