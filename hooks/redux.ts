import { useSelector } from "react-redux";
import { useDispatch,TypedUseSelectorHook } from "react-redux";
import { AppDispatch,RootState } from "../srote/store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector