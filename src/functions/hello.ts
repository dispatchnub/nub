export const handler = async (event: any = {}): Promise<any> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello world",
      input: event,
    }),
  };
};
