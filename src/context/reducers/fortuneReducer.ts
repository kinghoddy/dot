import { FortuneActionProps, FortuneStateProps } from "../../typings/interface";

export default function fortuneReducer(
  state: FortuneStateProps,
  { type, payload }: FortuneActionProps
): FortuneStateProps {
  switch (type) {
    case "LOADING":
      return { ...state, loading: true, error: null };
    case "ERROR":
      return { ...state, loading: false, error: payload };
    case "SET_FORTUNE":
      return { ...state, loading: false, data: payload };
    default:
      return state;
  }
}

export const defaultFortuneState: FortuneStateProps = {
  data: [],
  loading: false,
  error: null,
};
