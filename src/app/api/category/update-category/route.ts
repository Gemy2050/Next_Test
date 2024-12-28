import axiosInstance from "@/config/axios.config";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams.toString();
    console.log({ query });
    const response = await axiosInstance.put(
      `/Category/update-category?${query}`
    );
    return Response.json(response.data);
  } catch (err) {
    console.log({ err });
    const error = err as AxiosError;
    return new Response(error.message, {
      status: error.response?.status || 500,
    });
  }
}
