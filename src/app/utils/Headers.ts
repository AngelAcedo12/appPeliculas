import enviroments from "../enviroments/enviroments";

const header = {
    headers: {
        accept: 'application/json',
        Authorization: enviroments.TOKEN_ACCESS
      }
}
export default header;