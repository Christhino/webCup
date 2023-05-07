import axios from "axios"

const BASE_URL = "http://vps-79a806d4.vps.ovh.net:4000/"
const LISTE_TEMOIN = `${BASE_URL}temoins`
export const listeTemoins = () => {
    return axios.get(LISTE_TEMOIN).then((res) => res.data)
}