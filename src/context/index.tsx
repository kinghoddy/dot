import { createContext, ReactNode, useReducer } from "react";
import { FortuneContext } from "../typings/interface";
import fortuneReducer, { defaultFortuneState } from "./reducers/fortuneReducer";

export const GLobalContext = createContext<FortuneContext>({
  fortuneState: defaultFortuneState,
  fortuneDispatch: () => {},
});

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [fortuneState, fortuneDispatch] = useReducer(
    fortuneReducer,
    defaultFortuneState
  );

  return (
    <GLobalContext.Provider value={{ fortuneState, fortuneDispatch }}>
      {children}
    </GLobalContext.Provider>
  );
};

export default GlobalProvider;
