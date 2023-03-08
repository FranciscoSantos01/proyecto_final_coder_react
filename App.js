import { Provider } from "react-redux";
import { MainNavigation } from "./src/navigation/mainNavigation";
import { store } from "./src/store/store";
import  {init} from '../food-delivery/src/db'

init().then(()=> console.log('database works')).catch(err=> console.log(err))

export default function App() {
  return (
   <Provider store={store}>
   <MainNavigation />
   </Provider>
  );
}

