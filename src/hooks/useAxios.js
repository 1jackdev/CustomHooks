import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useAxios = (url) => {
  const [cards, setCards] = useState([]);
  const addCard = async (restOfUrl="") => {
    try {
      const response = await axios.get(`${url}${restOfUrl}`);
      setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
    } catch (err) {
      console.error(err);
    }
  };

  return [cards, addCard];
};

export default useAxios;
