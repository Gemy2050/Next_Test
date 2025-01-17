import axiosInstance from "@/config/axios.config";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");
    const res = await axiosInstance.get(`/Category/get-category?id=${id}`);
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
