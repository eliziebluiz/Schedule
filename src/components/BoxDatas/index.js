import { useState } from "react";
import moment from "moment";
import Swal from "sweetalert2";

import Tool from "components/ToolTip";

import * as S from "./styles";

import calendar from "assets/calendar.svg";
import Logo from "assets/Logo.svg";
import ElipseRed from "assets/Ellipse4.svg";
import ElipseBlue from "assets/Ellipse3.svg";
import ElipseYellow from "assets/Ellipse5.svg";

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
      <S.BoxInfoPerfil>
        <S.BoxInfoTitle>
          <S.TitlePrimary>Bem-vindo(a), {name}</S.TitlePrimary>
          <S.SubTitlePrimary>
            Adicione seus jobs a agenda e gerencie sua rotina
          </S.SubTitlePrimary>
          <S.BoxInputs>
            <S.Input
              placeholder="Selecione uma data..."
              type="date"
              min={`${yearAtual}-01-01`}
              max={`${yearAtual}-12-31`}
              value={dataInput}
              onChange={(e) => setDataInput(e.target.value)}
            />
            <S.Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <S.ButtonSubmit
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
              <S.ImgIcon src={calendar} />{" "}
              <S.BodyBotton>
                <p>Agendar</p>
              </S.BodyBotton>
            </S.ButtonSubmit>
          </S.BoxInputs>
          <S.BoxInternalInfoDatas>
            <S.ItensLegenda>
              <Tool toolTipText={"Para o futuro"}>
                <S.ImgElipses src={ElipseBlue} alt="Elipse Blue" />
              </Tool>
              <Tool toolTipText={"Já iniciou"}>
                <S.ImgElipses src={ElipseRed} alt="Elipse Red" />
              </Tool>
              <Tool toolTipText={"Próximo do início"}>
                <S.ImgElipses src={ElipseYellow} alt="Elipse Yellow" />
              </Tool>
            </S.ItensLegenda>
            <S.BoxDatasInfos>
              {datas
                .sort((a, b) => a.dataInitialJob - b.dataInitialJob)
                .map((item, index) => (
                  <S.InfoDatas key={index}>
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
                  </S.InfoDatas>
                ))}
            </S.BoxDatasInfos>
          </S.BoxInternalInfoDatas>
        </S.BoxInfoTitle>
      </S.BoxInfoPerfil>
      <S.BoxHeader>
        <S.ImgLogo src={Logo} />
      </S.BoxHeader>
    </>
  );
}
