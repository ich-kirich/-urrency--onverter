import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllCurrencies } from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import { AllCurrencies } from "../../types/types";
import ConverterBlock from "../ConverterBlock/ConverterBlock";
import Loader from "../Loader/Loader";
import ViewError from "../ViewError/ViewError";

function ConvertPage() {
  const [currenciesNames, setCurrenciesNames] = useState<AllCurrencies>({});

  const [fetchCurrencies, isAllCurrLoading, isErrorAllCurr] = useFetching(
    async () => {
      const response = await getAllCurrencies();
      setCurrenciesNames({ ...response.data });
    },
  );

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div>
      {isErrorAllCurr ? (
        <ViewError>{isErrorAllCurr}</ViewError>
      ) : (
        <Box>
          {isAllCurrLoading ? (
            <Loader />
          ) : (
            <ConverterBlock currenciesNames={currenciesNames} />
          )}
        </Box>
      )}
    </div>
  );
}

export default ConvertPage;
