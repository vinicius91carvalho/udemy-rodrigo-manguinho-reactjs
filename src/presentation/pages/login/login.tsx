import Styles from './login-styles.scss'
import { FormStatus, LoginHeader, Footer, Input } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols'
import React, { useState, useEffect } from 'react'

type Props = {
  validation: Validation
}

export const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate({
        fieldName: 'email',
        fieldValue: state.email
      })
    })
  }, [state.email])

  useEffect(() => {
    validation.validate({
      fieldName: 'password',
      fieldValue: state.password
    })
  }, [state.password])

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
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
