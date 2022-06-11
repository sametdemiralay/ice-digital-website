import { forYou } from "../../data/forYou";

export default function handler(req, res) {
  res.status(200).json(forYou);
}
