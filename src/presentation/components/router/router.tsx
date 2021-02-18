import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { SignUp } from '@/presentation/pages/signup/signup'

type Props = {
  makeLogin: React.FC
}

export const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/login" exact component={makeLogin} />
            <Route path="/signup" exact component={SignUp} />
        </Switch>
      </BrowserRouter>
  )
}
