// src/pages/api/users/createUser.ts
import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

const APICreateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." })
  }

  const { name, email, password } = req.body

  try {
    const apiUrl = process.env.API_BASE_URL || "https://api.example.com"

    const response = await axios.post(`${apiUrl}/users`, {
      name,
      email,
      password,
    })

    res.status(201).json(response.data)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export default APICreateUser
