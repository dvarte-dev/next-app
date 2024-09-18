import { fetcher } from "@/functions/fetcher"

export const getUser = async (userId: string) => {
  try {
    return await fetcher(`/api/users/${userId}`, "GET", {})
  } catch (error: any) {
    throw new Error(`Error fetching user: ${error.message}`)
  }
}

export const createUser = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const body = { name, email, password }
    return await fetcher("/api/users", "POST", {}, body)
  } catch (error: any) {
    throw new Error(`Error creating user: ${error.message}`)
  }
}

export const updateUser = async (
  userId: string,
  name?: string,
  email?: string,
  password?: string,
) => {
  try {
    const body = { name, email, password }
    return await fetcher(`/api/users/${userId}`, "PUT", {}, body)
  } catch (error: any) {
    throw new Error(`Error updating user: ${error.message}`)
  }
}

export const deleteUser = async (userId: string) => {
  try {
    return await fetcher(`/api/users/${userId}`, "DELETE", {})
  } catch (error: any) {
    throw new Error(`Error deleting user: ${error.message}`)
  }
}
