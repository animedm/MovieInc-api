import { getGenres } from "./services/getters/getGenres";
import { useFetch } from "./hooks/useFetch";
import { useEffect } from "react";
import Navigations from "./navigation/Navigation";
import { save, getValueFor, deleteItem } from "./helpers/storage";
import { Provider } from "react-redux";
import {store} from './store/store';

export default function App() {
  const { data, isLoading } = useFetch(getGenres);

  useEffect(() => {
    //preloading all genres type within start application
    if (!isLoading) {
      getValueFor("genres")
        .then((genres) => {
          if (!genres) {
            save("genres", JSON.stringify(data));
          }
        })
        .catch(() => {
          save("genres", JSON.stringify(data));
        });
    }

    return () => {
      //delete genres within close application
      deleteItem("genres");
    };

  }, [isLoading]);

  return (
  <Provider store={store}>
    <Navigations />
  </Provider>);
}
