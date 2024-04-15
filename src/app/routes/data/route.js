import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req, res) {
  const response = await fetch("http://localhost:3000/api/blogs");
  const data = await response.json();
  res.status(200).json(data);
}
