import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'
import React, { useCallback, useContext } from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]

  const enableInput = useCallback((event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }, [])

  const handleChange = useCallback((event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }, [])

  const getStatus = useCallback((): string => {
    return '🔴'
  }, [])

  const getTitle = useCallback((): string => {
    return error
  }, [error])

  return (
    <div className={Styles.inputWrap}>
        <input { ...props } data-testid={props.name} readOnly onFocus={enableInput} onChange={handleChange} />
        <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}
