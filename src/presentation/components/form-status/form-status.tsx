import Styles from './form-status-styles.scss'
import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import React, { useContext } from 'react'

export const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <div data-testid='error-wrap' className={Styles.errorWrap}>
        { isLoading && <Spinner className={Styles.spinner} /> }
        { errorMessage && <span className={Styles.error}>Erro</span> }
    </div>
  )
}
