import axiosInstance from "@/config/axios.config";
import { processProduct } from "@/utils/functions";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.toString();
    const res = await axiosInstance.get(`/Product/get-all-products?${query}`);
    const data = await res.data;

    // *******************************************************

    const products = [];

    for (let i = 0; i < data.data.length; i++) {
      const product = data.data[i];
      const res = await processProduct(product);
      products.push(res);
    }
    const result = { ...data, data: products };
    // *******************************************************

    return Response.json(result, { status: 200 });
  } catch (err) {
    const error = err as AxiosError;
    return Response.json(
      { message: error.message },
      { status: error.response?.status || 500 }
    );
  }
}
