import React from 'react'
import { makeLocalSaveAccessToken } from '@/main/factories/usecases/local-save-access-token-factory'
import { makeSignUpValidations } from './signup-validation-factory'
import { SignUp } from '@/presentation/pages/signup/signup'
import { makeRemoteAddAccount } from '@/main/factories/usecases/remote-add-account-factory'

export const makeSignUp: React.FC = () => {
  return (
        <SignUp
            addAccount={makeRemoteAddAccount()}
            validation={makeSignUpValidations()}
            saveAccessToken={makeLocalSaveAccessToken()}
        />
  )
}
