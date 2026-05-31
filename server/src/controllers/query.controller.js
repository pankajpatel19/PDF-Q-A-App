import { getRetrievalChain } from "../services/retrieval.js";

export const query = async (req, res) => {
  try {
    const { query } = req.body;
    const result = await getRetrievalChain(query);
    console.log("result : ", result);
    res.status(200).json({ result: result });
  } catch (error) {
    console.error("query Error : ", error);
    res.status(500).json({ message: " internal  Server error " });
  }
};
