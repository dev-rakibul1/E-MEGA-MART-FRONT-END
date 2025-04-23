export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:7000/api/v1/"
  );
  // return process.env.NEXT_PUBLIC_API_BASE_URL || "http://143.110.241.146:7002";
};
