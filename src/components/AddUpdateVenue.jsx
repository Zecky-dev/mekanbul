import { useLocation } from "react-router-dom";
import Header from "./Header";
import InputWithLabel from "./InputWithLabel";
import AdminButton from "./AdminButton";

function AddUpdateVenue() {

  const { state } = useLocation();

  const isUpdate = state.type === "update"

  function deleteVenue() {
    console.log("Deleting venue")
  }

  function updateVenue() {
    console.log("Updating Venue")
  }


  return (
    <>
      <Header
        headerText={isUpdate ? `${state.name} Mekanını Güncelle` : "Mekan Ekle"}
        motto={""}
        key={"add_new_location"}
        
      />



      <InputWithLabel
        id={"mekanAdi"}
        label={"Mekan Adı"}
        type={"text"}
        value={isUpdate ? state.name : ""}
      />

      <InputWithLabel
        id={"mekanAdi"}
        label={"Mekan Adresi"}
        type={"text"}
        value={isUpdate ? state.address : ""}
      />

      <InputWithLabel
        id={"mekanAdi"}
        label={"İmkanlar"}
        type={"text"}
        value={isUpdate ? state.foodanddrink : ""}
      />

      <InputWithLabel
        id={"mekanAdi"}
        label={"Enlem"}
        type={"text"}
        value={isUpdate ? state.coordinates[0] : ""}
      />

      <InputWithLabel
        id={"mekanAdi"}
        label={"Boylam"}
        type={"text"}
        value={isUpdate ? state.coordinates[1] : ""}
      />

      <InputWithLabel
        id={"mekanAdi"}
        label={"Günler-1"}
        type={"text"}
        value={isUpdate ? state.hours[0].days : ""}
      />

      <InputWithLabel
        id={"mekanAdi"}
        label={"Açılış-1"}
        type={"text"}
        value={isUpdate ? state.hours[0].open : ""}

      />

      <InputWithLabel
        id={"mekanAdi"}
        label={"Kapanış-1"}
        type={"text"}
        value={isUpdate ? state.hours[0].close : ""}
      />

      <InputWithLabel
        id={"checkbox"}
        label={"Kapalı 1"}
        type={"checkbox"}
      />

      <InputWithLabel
        id={"mekanAdi"}
        label={"Günler 2"}
        type={"text"}
        value={isUpdate ? state.hours[1].days : ""}
      />

      <InputWithLabel
        id={"mekanAdi"}
        label={"Açılış 2"}
        type={"checkvox"}
        value={isUpdate ? state.hours[1].open : ""}
      />

      <InputWithLabel
        id={"mekanAdi"}
        label={"Kapanış 2"}
        type={"text"}
        value={isUpdate ? state.hours[1].close : ""}
      />
      
      <InputWithLabel
        id={"mekanAdi"}
        label={"Kapalı 2"}
        type={"checkbox"}
        value={isUpdate ? state.hours[1].open : ""}
      />

      <AdminButton
        onClick={isUpdate ? deleteVenue : updateVenue}
        name={isUpdate ? "Mekanı Güncelle" : "Mekan Ekle"}
        type={isUpdate ? "info" : "success"}/>

    </>
  );
}

export default AddUpdateVenue;
