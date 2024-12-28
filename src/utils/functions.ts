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
