import axios from "axios";
const baselink = "http://localhost:3000/api"
export const axiosController = axios.create({baselink})