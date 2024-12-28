import axiosInstance from "@/config/axios.config";
import { IAxiosError } from "@/interfaces";
import { returnAxiosError } from "@/utils/functions";
import { AxiosError } from "axios";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const response = await axiosInstance.post("/account/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return Response.json(response.data);
  } catch (err) {
    const error = err as AxiosError<IAxiosError>;
    const errorResult = returnAxiosError(
      error.response?.data.message || "Internal Server Error",
      error.response?.status
    );
    return Response.json(errorResult, {
      status: error.response?.status || 500,
    });
  }
}
