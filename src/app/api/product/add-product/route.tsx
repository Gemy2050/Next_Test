import axiosInstance from "@/config/axios.config";
import { AxiosError } from "axios";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const response = await axiosInstance.post(
      "/Product/add-product",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return Response.json(response.data);
  } catch (err) {
    const error = err as AxiosError;
    return new Response(error.message, {
      status: error.response?.status || 500,
    });
  }
}
