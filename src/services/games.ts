import { api } from "./api"

const API_URI = 'https://api.npoint.io/817eebf87e3033d5dc99'

type GamesResponse = Array<{name: string, icon_url: string}>

export const getGamesAPI = async () => api.get<GamesResponse>(API_URI)
