import axiosInstance from "@/config/axios.config";
import { IAxiosError } from "@/interfaces";
import { returnAxiosError } from "@/utils/functions";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams;
    const email = query.get("email");
    const response = await axiosInstance.post(
      `/account/forgotPassword?email=${email}`
    );

    return Response.json(response.data);
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
