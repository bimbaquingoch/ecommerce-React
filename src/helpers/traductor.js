import { translate } from "free-translate";

const FuncTraducir = async (text, tra) => {
  const nuevo = await translate(text, { from: "", to: tra });
  return nuevo;
};

export default FuncTraducir;
