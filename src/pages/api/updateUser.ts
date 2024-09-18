// src/pages/api/users/updateUser.ts
import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

const APIUpdateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed." })
  }

  const { userId, name, email, password } = req.body

  try {
    const apiUrl = process.env.API_BASE_URL || "https://api.example.com"

    const response = await axios.put(`${apiUrl}/users/${userId}`, {
      name,
      email,
      password,
    })

    res.status(200).json(response.data)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export default APIUpdateUser
