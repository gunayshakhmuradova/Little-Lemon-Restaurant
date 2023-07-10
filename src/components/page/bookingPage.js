import Heading from "../section/reservePages/heading";
import ReservationForm from "../section/reservePages/bookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../BookingApi";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}