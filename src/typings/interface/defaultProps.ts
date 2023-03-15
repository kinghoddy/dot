import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dispatch } from "react";

export interface ScreenDefaultProps {
  navigation: NativeStackNavigationProp<any, any>;
  // | NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}

export type FortuneTypes = {
  date: number;
  text: string;
};

export interface FortuneStateProps {
  data: FortuneTypes[];
  error: string | null;
  loading: boolean;
}

export interface FortuneActionProps {
  type: string;
  payload?: any;
}

export interface FortuneContext {
  fortuneDispatch: Dispatch<FortuneActionProps>;
  fortuneState: FortuneStateProps;
}
