import axios from "axios";
import type { PokeAPI_ResultPage } from "../../types/PokeAPI_DataTypes";

export const fetchItemsList = async (
  currentPageURL: string,
  setNextPageURL: (url: string) => void,
  setPreviousPageURL: (url: string) => void,
  setItemsCount: (count: number) => void,
  setItemsList: ([]: string[]) => void
) => {
  await axios
    .get(currentPageURL, { timeout: 5 * 1000 })
    .then((res) => {
      const responseData: PokeAPI_ResultPage = res.data;
      setItemsCount(responseData.count);
      setNextPageURL(responseData.next);
      setPreviousPageURL(responseData.previous);

      const nameList: string[] = [];
      responseData.results.map((result) => {
        nameList.push(result.name);
      });
      setItemsList(nameList);
    })
    .catch((err) => console.log(err));
};
