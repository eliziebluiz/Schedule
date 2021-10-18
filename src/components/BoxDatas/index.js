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
  ItensLegenda,
  SubTitlePrimary,
  TitlePrimary,
  BoxDatasInfos,
  ImgElipses,
} from "./styles";
import { useState } from "react";

import calendar from "../../assets/calendar.svg";

import Logo from "../../assets/Logo.svg";

import ElipseRed from "../../assets/Ellipse4.svg";

import ElipseBlue from "../../assets/Ellipse3.svg";

import ElipseYellow from "../../assets/Ellipse5.svg";

import moment from "moment";
import Swal from "sweetalert2";
import Tool from "../ToolTip";

function insertData(
  datas,
  setDatas,
  dataInput,
  time,
  setDataInput,
  setTime,
  name
) {
  const timeJob = time.split(":");

  const dataInitialJob = moment(dataInput)
    .hours(timeJob[0])
    .minutes(timeJob[1]);

  const dataFinalJob = moment(dataInitialJob).add(1, "hours");

  const InitialDataIguals = (data, dataStart, dataFinal) => {
    return (
      data.isSameOrAfter(dataStart, "minute") &&
      data.isSameOrBefore(dataFinal, "minute")
    );
  };

  const filter = datas.findIndex((d) =>
    InitialDataIguals(dataInitialJob, d?.dataInitialJob, d?.dataFinalJob)
  );

  if (filter === -1) {
    setDatas((state) => [...state, { dataInitialJob, dataFinalJob }]);
    setDataInput("");
    setTime("");
  } else {
    Swal.fire(
      `${name}, você não tem o poder de estar em dois lugares ao mesmo tempo.`
    );
  }
}

export default function BoxDatas({ name }) {
  const [datas, setDatas] = useState([]);
  const [dataInput, setDataInput] = useState("");

  const [time, setTime] = useState("");

  const yearAtual = moment(new Date()).locale("pt-br").format("YYYY");

  function defineStatus(job) {
    const data = moment();

    const dataAtual12Hours = moment(data).add(12, "hours");

    if (job.dataInitialJob.isBefore(data, "minutes")) {
      return { title: "Já inicíou", elipse: ElipseRed };
    } else if (job.dataInitialJob.isBefore(dataAtual12Hours, "minutes")) {
      return { title: "Próximo do início", elipse: ElipseYellow };
    } else {
      return { title: "Para o futuro", elipse: ElipseBlue };
    }
  }

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
              min={`${yearAtual}-01-01`}
              max={`${yearAtual}-12-31`}
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
                  setTime,
                  name
                )
              }
              disabled={time === "" || dataInput === ""}
            >
              <ImgIcon src={calendar} /> Agendar
            </ButtonSubmit>
          </BoxInputs>
          {/* {JSON.stringify(datas)} */}
          <BoxInternalInfoDatas>
            <ItensLegenda>
              <ImgElipses src={ElipseBlue} alt="Elipse Blue" />
              <ImgElipses src={ElipseRed} alt="Elipse Red" />
              <ImgElipses src={ElipseYellow} alt="Elipse Yellow" />
            </ItensLegenda>
            <BoxDatasInfos>
              {datas
                .sort((a, b) => a.dataInitialJob - b.dataInitialJob)
                .map((item, index) => (
                  <InfoDatas key={index}>
                    <Tool toolTipText={defineStatus(item)?.title}>
                      <span style={{ marginRight: "10px" }}>
                        <img src={defineStatus(item)?.elipse} alt="Elipse" />
                      </span>
                    </Tool>
                    {`${item.dataInitialJob.format("DD/MMM")} das ${
                      item.dataInitialJob.format("mm") === "00"
                        ? item.dataInitialJob.format("HH[h]")
                        : item.dataInitialJob.format("HH[h]mm")
                    }`}{" "}
                    {"às "}
                    {item.dataFinalJob.format("mm") === "00"
                      ? item.dataFinalJob.format("HH[h]")
                      : item.dataFinalJob.format("HH[h]mm")}
                  </InfoDatas>
                ))}
            </BoxDatasInfos>
          </BoxInternalInfoDatas>
        </BoxInfoTitle>
      </BoxInfoPerfil>
      <BoxHeader>
        <ImgLogo src={Logo} />
      </BoxHeader>
    </>
  );
}
