import axios, { AxiosRequestConfig } from "axios"

export const fetcher = async (
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  headers: Record<string, string>,
  body?: Record<string, any> | null,
) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || ""
  const url = `${baseUrl}${endpoint}`

  try {
    const config: AxiosRequestConfig = {
      method,
      url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
      data: body ? JSON.parse(JSON.stringify(body)) : undefined,
    }

    const response = await axios(config)
    return response.data
  } catch (error: any) {
    console.error(`HTTP catch error: ${error.message}`)
    throw new Error(
      error.response?.data?.message ||
        `HTTP error! status: ${error.response?.status}`,
    )
  }
}
