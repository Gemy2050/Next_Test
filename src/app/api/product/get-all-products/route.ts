import axiosInstance from "@/config/axios.config";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.toString();
    const res = await axiosInstance.get(`/Product/get-all-products?${query}`);
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
