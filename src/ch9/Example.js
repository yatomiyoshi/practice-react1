import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./modules/counter";

const Example = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Example;
