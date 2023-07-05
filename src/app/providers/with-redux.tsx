import { Provider as ReduxProvider } from 'react-redux'
import { appStore } from 'app/store/appStore'

export const withRedux = (component: () => React.ReactNode) => () =>
  <ReduxProvider store={appStore}>{component()}</ReduxProvider>
