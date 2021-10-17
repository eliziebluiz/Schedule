import {
  // BoxGeral,
  BoxHeader,
  BoxInfoPerfil,
  // BoxInfos,
  BoxInfoTitle,
  BoxInputs,
  BoxInternalInfoDatas,
  ButtonSubmit,
  ImgIcon,
  ImgLogo,
  InfoDatas,
  Input,
  Item,
  ItensLegenda,
  SubTitlePrimary,
  TitlePrimary,
} from "./styles";
import { useState } from "react";

import calendar from "../../assets/calendar.svg";

import Logo from "../../assets/Logo.svg";

import moment from "moment";
import Swal from "sweetalert2";

function liberaStatus(dataInput) {
  const data = moment(new Date());
  const dataEntrada = moment(new Date(dataInput));

  console.log(dataEntrada);
  const durationTime = moment.duration(data.diff(dataEntrada)).asHours();
  console.log(durationTime);
}

function insertData(datas, setDatas, dataInput, time, setDataInput, setTime) {
  // console.log(datas);
  // const filter = datas.filter((item) => item.dataInput === dataInput);

  const filter = datas.findIndex((d) => d.dataInput === dataInput);

  const filterHora = datas.findIndex((d) => d.time === time);

  liberaStatus(dataInput);

  if (filter === -1) {
    setDatas((state) => [...state, { dataInput, time }]);
    setDataInput("");
    setTime("");
  } else if (filterHora === -1) {
    setDatas((state) => [...state, { dataInput, time }]);
    setDataInput("");
    setTime("");
  } else {
    Swal.fire(
      "Yuji, você não tem o poder de estar em dois lugares ao mesmo tempo."
    );
  }
}

export default function BoxDatas({ name }) {
  const [datas, setDatas] = useState([]);
  const [dataInput, setDataInput] = useState("");

  const [time, setTime] = useState("");

  return (
    <>
      <BoxInfoPerfil>
        <BoxInfoTitle>
          <TitlePrimary>Bem-vindo(a), {name}</TitlePrimary>
          <SubTitlePrimary>
            Adicione seus jobs a agenda e gerencie sua rotina
          </SubTitlePrimary>
          <BoxInputs>
            <Input
              placeholder="Selecione uma data..."
              type="date"
              min="2021-01-01"
              max="2021-12-31"
              value={dataInput}
              onChange={(e) => setDataInput(e.target.value)}
            />
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <ButtonSubmit
              onClick={() =>
                insertData(
                  datas,
                  setDatas,
                  dataInput,
                  time,
                  setDataInput,
                  setTime
                )
              }
              disabled={time === "" || dataInput === ""}
            >
              {console.log(dataInput)}
              <ImgIcon src={calendar} /> Agendar
            </ButtonSubmit>
          </BoxInputs>
          <BoxInternalInfoDatas>
            <ItensLegenda>
              <Item>.</Item>
              <Item>.</Item>
              <Item>.</Item>
            </ItensLegenda>
            <BoxDatas>
              {datas.map((item, index) => (
                <InfoDatas key={index}>
                  {item.dataInput} | {item.time}
                </InfoDatas>
              ))}
            </BoxDatas>
          </BoxInternalInfoDatas>
        </BoxInfoTitle>
      </BoxInfoPerfil>
      <BoxHeader>
        <ImgLogo src={Logo} />
      </BoxHeader>
    </>
  );
}
