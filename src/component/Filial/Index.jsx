import React, { useState } from "react";
import { card } from "../../mock/card";
import Drawer from "../Drawer/Index";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";
import { Container, Wrapper, Info, Navbar } from "./style";

const key = "AIzaSyBOTobVJK_w18yvP0_EOFM_e4DTpseCowU";

export const Filial = () => {
  const [products] = useState(Object.entries(card));
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  console.log(card);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: key,
    id:"main"
  });
  return (
    <Container open={open}>
      <Navbar>
        <Drawer open={open} onClos={onClose}>
          <form action="">
            <h2>Yangi Kategoriya Qo'shish</h2>
            <label htmlFor="text">Kategoriya nomi uz</label>
            <input type="text" id="text" placeholder="uz" />
            <label htmlFor="text">Kategoriya nomi ru</label>
            <input type="text" id="text" placeholder="ru" />
          </form>
          <h4>Bosh Kategoriya Kirtitish</h4>
          <select name="drinks" id="davlat" size="1">
            <option value="Uzbekistan">Dena</option>
            <option value="Turkey">yuppi</option>
            <option value="Egypt">gazvoda</option>
            <option value="South Korea">shirinchoy</option>
          </select>

          <div>
            {isLoaded &&
            <GoogleMap
              id="main"
              mapContainerStyle={{
                width: "400px",
                height: "400px",
              }}
              center={{
                lat: 41.311081,
                lng: 69.240562,
              }}
              zoom={10}
            />}
          </div>

          <button>Saqlash</button>
        </Drawer>
        <Navbar.Item onClick={() => setOpen(!open)}>
        <Navbar.Plus>+</Navbar.Plus>
        </Navbar.Item>
        <Navbar.Input>
          <input type="text" />
        </Navbar.Input>
        <Navbar.Tools>icon</Navbar.Tools>
      </Navbar>
      <Navbar.Link>
        <li>MAXSULOTLAR</li>
        <li>KATEGORIYA</li>
        <li>NARXI</li>
        <li>QO'SHIMCHA</li>
        <li>ACTION</li>
      </Navbar.Link>
      <Wrapper>
        {products.map(([key, value], index) => (
          <all>
            {value.map((obj) => (
              <Info>
                {/* <h4>{value.filial.location}</h4> */}
                <h4>{obj.filial.location}</h4>
                <h4>{obj.filial.location}</h4>
                <h4>{obj.filial.title}</h4>
                <h4>09:00 - 20:00</h4>
                <h4>
                  {" "}
                  <i class="fas fa-map-marker-alt"></i>
                  <i class="fas fa-pen"></i>
                  <i class="fas fa-trash-alt"></i>
                </h4>
              </Info>
            ))}
          </all>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Filial;
