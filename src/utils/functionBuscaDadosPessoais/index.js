import axios from "axios";

export async function reqBuscaDados(setDados) {
  try {
    const response = await axios.get("dbinfopessoais.json");

    setDados(response?.data);
  } catch (e) {
    return e;
  }
}
