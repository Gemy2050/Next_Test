import axiosInstance from "@/config/axios.config";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams.toString();

    const res = await axiosInstance.get(
      `/Category/get-all-categories?${query}`
    );
    const data = await res.data;
    return Response.json(data, { status: 200 });
  } catch (err) {
    const error = err as AxiosError;
    return Response.json(
      { message: error.message },
      { status: error.response?.status || 500 }
    );
  }
}
