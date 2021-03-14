import React from 'react'
import { makeRemoteAuthentication } from '@/main/factories/usecases/remote-authentication-factory'
import { makeLocalSaveAccessToken } from '@/main/factories/usecases/local-save-access-token-factory'
import { Login } from '@/presentation/pages/login/login'
import { makeLoginValidations } from './login-validation-factory'

export const makeLogin: React.FC = () => {
  return (
        <Login
            authentication={makeRemoteAuthentication('/login')}
            validation={makeLoginValidations()}
            saveAccessToken={makeLocalSaveAccessToken()}
        />
  )
}
