import { useContext, useState } from "react";
import { CONTEXT } from "../../libs/constants";
import AddListCurrency from "../AddListCurrency/AddListCurrency";
import AddNewCurrency from "../AddNewCurrency/AddNewCurrency";
import ModalComponent from "../ModalComponent/ModalComponent";

function NewCurrencies() {
  const [visible, setVisible] = useState(false);
  const { listCurrencies, setListCurrency } = useContext(CONTEXT);
  return (
    <>
      <AddNewCurrency setVisible={setVisible} />
      <ModalComponent visible={visible} setVisible={setVisible}>
        <AddListCurrency
          listCurrencies={listCurrencies}
          setListCurrency={setListCurrency}
        />
      </ModalComponent>
    </>
  );
}

export default NewCurrencies;
