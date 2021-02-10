import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Authentication } from '@/domain/usecases/authentication'
import { FormStatus, LoginHeader, Footer, Input } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols'
import Styles from './login-styles.scss'

type Props = {
  validation: Validation
  authentication: Authentication
}

export const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate({ fieldName: 'email', fieldValue: state.email }),
      passwordError: validation.validate({ fieldName: 'password', fieldValue: state.password })
    })
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) {
        return
      }
      setState({ ...state, isLoading: true })
      const account = await authentication.auth({ email: state.email, password: state.password })
      localStorage.setItem('@surveys:accessToken', account.accessToken)
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form data-testid='form' onSubmit={handleSubmit} className={Styles.form}>
            <h2>Login</h2>
            <Input type="email" name="email" placeholder="Digite seu e-mail" />
            <Input type="password" name="password" placeholder="Digite sua senha"/>
            <button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} className={Styles.submit} type="submit">Entrar</button>
            <Link data-testid="signup" to="/signup" className={Styles.link}>Criar conta</Link>
            <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}
