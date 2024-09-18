// src/pages/api/getUser.ts
import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

const APIGetUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed." })
  }

  const { userId } = req.query

  try {
    const apiUrl = process.env.API_BASE_URL || "https://api.example.com"

    const response = await axios.get(`${apiUrl}/users/${userId}`)

    res.status(200).json(response.data)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export default APIGetUser
