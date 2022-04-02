import React from "react";
import "./Hotels.css";
import categories from "../../../assets/graphs/categories.png";
import city_hotel_adr from "../../../assets/graphs/city_hotel_adr.png";
import city_hotel_room_mismatches from "../../../assets/graphs/city_hotel_room_mismatches.png";
import Hotel_Bookings from "../../../assets/graphs/Hotel_Bookings.png";
import meals from "../../../assets/graphs/meals.png";
import no_of_repeat_customers from "../../../assets/graphs/no_of_repeat_customers.png";
import Number_of_visitors_each_month from "../../../assets/graphs/Number_of_visitors_each_month.png";
import resort_hotel_adr from "../../../assets/graphs/resort_hotel_adr.png";
import resort_hotel_room_mismatches from "../../../assets/graphs/resort_hotel_room_mismatches.png";
import rooms_assigned from "../../../assets/graphs/rooms_assigned.png";
import special_requests from "../../../assets/graphs/special_requests.png";
import Top_15_Countries from "../../../assets/graphs/Top_15_Countries.png";
import { Divider, Image } from "../../../lib";

export default function Result() {
  return (
    <>
      <Divider />
      <ol>
        <li> Couples prefers city hotel over resort hotel. </li>
        <li> For family both city and resort hotel are alike. </li>
      </ol>
      <Image
        src={categories}
        alt={"categories"}
        style={{ height: "70vh", width: "74vw" }}
      />
      <br /> <br />
      <ol>
  <li>Family and Friends can be provided with more facilities and they are ready to pay more.</li>
</ol><Image src={city_hotel_adr} alt={"city_hotel_adr"} style={{height: '70vh', width: '74vw'}} />
<br /><br />

<ol>
  <li>There are lot of mismatch all over the year thus the hotel should think of increasing the number of rooms which are more in demand.</li>
</ol><Image src={city_hotel_room_mismatches} alt={"city_hotel_room_mismatches"} style={{height: '70vh', width: '74vw'}} />
<br /><br />

<ol>
  <li>Resort hotel has less booking than City Hotel so they should try to attract more customers with offers</li>
</ol><Image src={Hotel_Bookings} alt={"Hotel_Bookings"} style={{height: '70vh', width: '74vw'}} />
<br /><br />

<ol>
  <li>More People tend to go out for eating in resort hotel than city hotel</li>
</ol><Image src={meals} alt={"meals"} style={{height: '70vh', width: '74vw'}} />
<br /><br />

<ol>
  <li>City Hotel is doing great in advertising but they are unable to match customer's expectations.</li>
</ol><Image src={no_of_repeat_customers} alt={"no_of_repeat_customers"} style={{height: '70vh', width: '74vw'}} />
<br /><br />

<ol>
  <li>More customers come in summers while less in winters. Thus they can plan offers acording to the season.</li>
</ol><Image src={Number_of_visitors_each_month} alt={"Number_of_visitors_each_month"} style={{height: '70vh', width: '74vw'}} />
<br /><br />

<Image src={resort_hotel_adr} alt={"resort_hotel_adr"} style={{height: '60vh', width: '78vw'}} />
<br /><br />

<ol>
  <li>There are lot of mismatch all over the year thus the hotel should think of increasing the number of rooms which are more in demand.</li>
</ol><Image src={resort_hotel_room_mismatches} alt={"resort_hotel_room_mismatches"} style={{height: '70vh', width: '74vw'}} />
<br /><br />

<Image src={rooms_assigned} alt={"rooms_assigned"} style={{height: '70vh', width: '74vw'}} />
<br /><br />

<ol>
  <li>People demand for special requests more in City Hotel thus they can work on it.</li>
</ol><Image src={special_requests} alt={"special_requests"} style={{height: '70vh', width: '74vw'}} />
<br /><br />

<ol>
  <li>Potugal have maximum number of visitors so we can give portugal culture-specific things.</li>
  <li>People from Sweden, Austrailia has least number of visitors thus appropriate advertising is needed.</li>
</ol>
<Image src={Top_15_Countries} alt={"Top_15_Countries"} style={{height: '70vh', width: '74vw'}} />
<br /><br />

    </>
  );
}
