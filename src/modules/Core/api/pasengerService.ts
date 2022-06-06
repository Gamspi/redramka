import axios, { AxiosResponse } from "axios";
import { IPassengers, IResponse } from "../models/Airline";

export default class PasengerService {
  static async getPasenger(page: number, limit: number): Promise<AxiosResponse<IResponse<IPassengers>>> {
    return axios.get(`https://api.instantwebtools.net/v1/passenger`, {
      params: {
        page: page,
        size: limit
      }
    });

  }

  static async deletePasenger(id: string): Promise<AxiosResponse<IResponse<IPassengers>>> {
    return axios.delete(`https://api.instantwebtools.net/v1/passenger`, {
      params: {
        id
      }
    });

  }
}
