import { navbar } from "../../data/navbar";

export default function handler(req, res) {
  res.status(200).json(navbar);
}
