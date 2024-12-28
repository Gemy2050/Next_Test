import axiosInstance from "@/config/axios.config";
import { IAxiosError } from "@/interfaces";
import { returnAxiosError } from "@/utils/functions";
import { AxiosError } from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await axiosInstance.post(`/account/google-signin`, body);
    const data = await res.data;
    return Response.json(data, { status: 200 });
  } catch (err) {
    const error = err as AxiosError<IAxiosError>;
    const errorResult = returnAxiosError(
      error.response?.data.message || error.message || "Internal Server Error",
      error.response?.status
    );
    return Response.json(errorResult, {
      status: error.response?.status || 500,
    });
  }
}
