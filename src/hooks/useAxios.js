import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = (url) => {
  const [cards, setCards] = useState([]);

  const addCard = async () => {
    try {
      const response = await axios.get(url);
      setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
    } catch (err) {
      console.error(err);
    }
  };

  return [cards, addCard];
};

export default useAxios;
