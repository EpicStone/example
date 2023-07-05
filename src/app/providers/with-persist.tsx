import { PersistGate } from 'redux-persist/integration/react'
import { persistedStore } from '../store/appStore'

export const withPersist = (component: () => React.ReactNode) => () =>
  (
    <PersistGate loading={null} persistor={persistedStore}>
      {component()}
    </PersistGate>
  )
