import Styles from './spinner-styles.scss'
import React from 'react'

type Props = React.HTMLAttributes<HTMLElement>

export const Spinner: React.FC<Props> = (props: Props) => {
  return (
        <div {...props} className={[Styles.spinner, props.className].join(' ')}>
            <div/><div/><div/><div/>
        </div>
  )
}
