import Styles from './form-status-styles.scss'
import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import React, { useContext } from 'react'

export const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)
  return (
    <div data-testid='error-wrap' className={Styles.errorWrap}>
        { state.isLoading && <Spinner className={Styles.spinner} /> }
        { errorState.main && <span className={Styles.error}>Erro</span> }
    </div>
  )
}
