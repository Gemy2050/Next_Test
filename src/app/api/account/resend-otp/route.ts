import axiosInstance from "@/config/axios.config";
import { IAxiosError } from "@/interfaces";
import { returnAxiosError } from "@/utils/functions";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const email = searchParams.get("email");
    const res = await axiosInstance.get(`/account/resend-otp?email=${email}`);
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
