import moment from "moment";
import "moment/locale/pt-br";
import {
  BoxInfoPerfil,
  BoxInfos,
  BoxInternalInfoPerfil,
  HoraHeader,
  ImgPerfil,
  InfoFunction,
  InfoName,
  InfoPessoais,
  InfoPessoaisTime,
  ImgIcon,
  ImgIconVerif,
} from "./styles";

import relogio from "../../assets/relogio.svg";

import verific from "../../assets/verific.svg";
import { useEffect, useState } from "react";

moment.locale("pt-br");

export default function BoxInfo({ dados }) {
  const [dataAtual, setDataAtual] = useState(
    moment(new Date()).locale("pt-br").format("LL")
  );
  const [horaAtual, setHoraAtual] = useState(
    moment(new Date()).locale("pt-br").format("LT")
  );
  const [data, setData] = useState(moment());

  const [dataEntrada, setDataEntrada] = useState(moment(dados?.created_at));

  // const durationTime =

  // console.log(parseFloat(durationTime).toFixed(2));

  useEffect(() => {
    const interval = setInterval(() => {
      setDataAtual(moment(new Date()).locale("pt-br").format("LL"));
      setHoraAtual(moment(new Date()).locale("pt-br").format("LT"));
      setData(moment());
      setDataEntrada(moment(dados?.created_at));
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [dados]);

  function convertAltura(altura) {
    return (Number(altura) / 100).toFixed(2);
  }

  return (
    <BoxInfoPerfil>
      <HoraHeader>
        Hoje - {dataAtual} - {horaAtual}
      </HoraHeader>
      <BoxInternalInfoPerfil>
        <ImgPerfil src={dados?.picture} />
        <InfoName>
          {dados?.first_name} {dados?.last_name} <ImgIconVerif src={verific} />
        </InfoName>
        <InfoFunction>Exorcista Jujutsu</InfoFunction>
        <BoxInfos>
          <InfoPessoais>Altura: {convertAltura(dados?.height)}</InfoPessoais>
          <InfoPessoais>Manequim: {dados?.size}</InfoPessoais>
          <InfoPessoais>Calçado: {dados?.shoe}</InfoPessoais>
        </BoxInfos>
        <InfoPessoaisTime>
          <ImgIcon src={relogio} /> Tempo na Clooser:{" "}
          {parseFloat(
            moment.duration(data.diff(dataEntrada)).asYears()
          ).toFixed(2)}{" "}
          anos
        </InfoPessoaisTime>
      </BoxInternalInfoPerfil>
    </BoxInfoPerfil>
  );
}
