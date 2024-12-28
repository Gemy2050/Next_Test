import axiosInstance from "@/config/axios.config";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams.toString();
    const response = await axiosInstance.post(
      `/Category/add-category?${query}`
    );

    return Response.json(response.data);
  } catch (err) {
    const error = err as AxiosError;
    return new Response(error.message, {
      status: error.response?.status || 500,
    });
  }
}
