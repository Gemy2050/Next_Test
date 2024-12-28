export interface IAxiosError {
  message: string;
  status: number;
  data: {
    message: string;
    statusCode: number;
  };
}
