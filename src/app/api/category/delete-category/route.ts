import axiosInstance from "@/config/axios.config";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");
    const res = await axiosInstance.delete(
      `/Category/delete-category?id=${id}`
    );
    const data = await res.data;
    return Response.json({ ...data }, { status: 200 });
  } catch (err) {
    const error = err as AxiosError;
    return Response.json(
      { message: error.message },
      { status: error.response?.status || 500 }
    );
  }
}
