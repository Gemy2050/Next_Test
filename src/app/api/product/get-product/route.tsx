import axiosInstance from "@/config/axios.config";
import { processProduct, processProductImages } from "@/utils/functions";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");
    const res = await axiosInstance.get(`/Product/get-product?id=${id}`);
    const data = await res.data;

    // *******************************************************
    const imagesResult = [];
    const productImages = data.productImages;
    const product = await processProduct(data);

    for (let i = 0; i < productImages.length; i++) {
      const productImageObject = productImages[i];
      const res = await processProductImages(productImageObject);
      imagesResult.push(res);
    }

    const result = { ...product, productImages: imagesResult };
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
