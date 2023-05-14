import axios from "axios";
const baselink = "http://localhost:3000"
export const axiosController = axios.create({baselink})