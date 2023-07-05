import { useSelector, type TypedUseSelectorHook, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from 'app/store/appStore'

export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
