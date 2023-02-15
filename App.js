import { Provider } from "react-redux";
import { MainNavigation } from "./src/navigation/mainNavigation";
import { store } from "./src/store/store";



export default function App() {
  return (
   <Provider store={store}>
   <MainNavigation />
   </Provider>
  );
}

