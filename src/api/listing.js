import client from "./clientApi";

const getListing = () => client.get("listings");

export default { getListing };
