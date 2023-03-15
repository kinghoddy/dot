import "react-native-gesture-handler";
import GlobalProvider from "./src/context";
import { UIThemeProvider } from "./src/Hoddy-ui";
import AppNavigator from "./src/navigations";

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <UIThemeProvider>
        <AppNavigator />
      </UIThemeProvider>
    </GlobalProvider>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
