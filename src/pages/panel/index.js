import BoxDatas from "../../components/BoxDatas";
import BoxInfoPerfil from "../../components/BoxInfoPerfil";
import { BoxDiv } from "./styles";
import { useEffect, useState } from "react";
import { reqBuscaDados } from "../../utils/functionBuscaDadosPessoais";

// let dados;

export default function Panel() {
  const [dados, setDados] = useState();
  useEffect(() => {
    reqBuscaDados(setDados);
  }, []);

  return (
    <BoxDiv>
      <BoxInfoPerfil dados={dados} />
      <BoxDatas name={dados?.first_name} />
    </BoxDiv>
  );
}
