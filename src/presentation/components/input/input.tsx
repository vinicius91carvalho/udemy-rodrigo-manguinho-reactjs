import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'
import React, { useCallback, useContext } from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context)
  const error = errorState[props.name]

  const enableInput = useCallback((event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }, [])

  const getStatus = useCallback((): string => {
    return '🔴'
  }, [])

  const getTitle = useCallback((): string => {
    return error
  }, [])

  return (
    <div className={Styles.inputWrap}>
        <input { ...props } readOnly onFocus={enableInput} />
        <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}
