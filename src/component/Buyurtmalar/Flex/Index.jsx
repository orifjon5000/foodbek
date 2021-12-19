import React,{useState} from "react";
import { card as data } from "../../../mock/card";
import save from "../../../assets/icons/save.svg";
import done from "../../../assets/icons/done.svg";
import cancel from "../../../assets/icons/cancel.svg";
import clock from "../../../assets/icons/clock.svg";
import user from "../../../assets/icons/user.svg";

import {
  Container,
  Wrapper,
  Info,
  Title,
  Order,
  User,
  Payme,
  Save,
} from "./style";

export const Flex = (props) => {
const [card, setCard] = useState(data)
  const onDelete = (value) => {
    const newData = Object.entries(card).map(([name, data]) => {
      data.filter((item) => item.id === value.id && item.categoria === value.categoria)
      
    })
    setCard(newData)
  }
  let name = "yangi";
  console.log(card[name]);
  return (
    <Container>
      <Wrapper>
        {Object.entries(card).map(([name, data]) => (
          <Wrapper.Column>
            <Title>{name}</Title>
            {data.map((value) => (
              <Info>
                <Order>
                  <p>
                    <span>{value.orderId}</span>
                    <img src={save} alt="dsave" />
                  </p>
                  <p>
                    <img src={clock} alt="clock" /> 00:24
                  </p>
                </Order>
                <User>
                  <block>
                    <img src={user} alt="user" /> {value.user.name}
                  </block>
                  <span>{value.user.phone}</span>
                </User>
                <Payme>
                  <p>
                    Umumiy summa:
                    <br />
                    <i>{value.total}</i>
                  </p>
                  <pi>
                    <span></span> Payme
                  </pi>
                </Payme>
                <Save>
                  <div>
                    <p>
                      {" "}
                      <span>operator:</span> {value.operator.name}
                    </p>{" "}
                    <button >
                      <img src={cancel} alt="" />{" "}
                    </button>
                  </div>
                  <div>
                    <p>
                      {value.filial.title}
                      {value.filial.location}
                    </p>{" "}
                    <button>
                      <img style={{ width: "12px" }} src={done} alt="" />
                    </button>
                  </div>
                </Save>
              </Info>
            ))}
          </Wrapper.Column>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Flex;
