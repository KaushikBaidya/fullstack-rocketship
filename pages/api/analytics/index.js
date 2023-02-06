import {
  getAnalytics,
  updateAnalytics,
} from "../../../controller/AnalyticsController";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const method = req.method;

  let result;
  switch (method) {
    case "GET":
      result = await getAnalytics();
      res.json(result);
      break;

    case session && "PUT":
      const updateCode = req.body.code;

      result = await updateAnalytics(updateCode);
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
