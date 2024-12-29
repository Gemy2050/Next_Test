import { IProduct, IProductImage } from "@/interfaces";

export function addObjectToFormData({
  data,
  formData,
}: {
  data: object;
  formData: FormData;
}) {
  Object.entries(data).forEach(([key, value]) => {
    if (value instanceof File) {
      formData.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        formData.append(`${key}[${index}]`, String(item));
      });
    } else {
      formData.append(key, String(value));
    }
  });
}

export const returnAxiosError = (message: string, status: number = 500) => {
  return {
    message,
    status,
    data: {
      message,
      statusCode: status,
    },
  };
};

export const fetchImage = async ({ imageUrl }: { imageUrl: string }) => {
  try {
    // Fetch the image from the insecure URL
    const response = await fetch(imageUrl);

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    // Convert the buffer to a base64 string for inline usage
    const base64Image = `data:image/jpeg;base64,${buffer.toString("base64")}`;
    return base64Image;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};

export async function processProduct(data: IProduct) {
  data.imageUrl = (await fetchImage({ imageUrl: data.imageUrl })) || "";

  return data;
}

export async function processProductImages(data: IProductImage) {
  const productImages = data;

  if (!productImages) return data;

  data.imageUrl = (await fetchImage({ imageUrl: data.imageUrl })) || "";

  return data;
}
