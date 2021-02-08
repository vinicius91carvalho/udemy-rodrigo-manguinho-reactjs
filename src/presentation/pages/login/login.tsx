import Styles from './login-styles.scss'
import { FormStatus, LoginHeader, Footer, Input } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import React, { useState } from 'react'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

export const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className={Styles.form}>
            <h2>Login</h2>
            <Input type="email" name="email" placeholder="Digite seu e-mail" />
            <Input type="password" name="password" placeholder="Digite sua senha"/>
            <button data-testid="submit" disabled className={Styles.submit} type="submit">Entrar</button>
            <span className={Styles.link}>Criar conta</span>
            <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}
