import { IonButton, IonSpinner } from '@ionic/react'
import React from 'react'
import { LoadingButtonProps } from '../../model/types'


const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  loading,
  loadingType = "bubbles",
  loadingText,
  onClick,
  type,
  ...rest
}) => {
  return (
    <IonButton type={type} disabled={loading} onClick={onClick} {...rest}>
      {loading ? (loadingText ? loadingText : <IonSpinner name={loadingType} />) : children}
    </IonButton>
  )
}

export default LoadingButton
