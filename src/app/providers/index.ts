import compose from 'compose-function'
import { withRedux } from './with-redux'
import { withPersist } from './with-persist'
import { withRouter } from './with-router'

export const withProviders = compose(withRouter, withPersist, withRedux)
