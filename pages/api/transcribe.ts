import { Configuration, OpenAIApi } from "openai";
import { IncomingForm } from "formidable";
const fs = require("fs");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: any, res: any) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const fData = await new Promise<{ fields: any; files: any }>(
    (resolve, reject) => {
      const form = new IncomingForm({
        multiples: false,
        uploadDir: "/tmp",
        keepExtensions: true,
      });
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    }
  );

  const videoFile = fData.files.file;
  const videoFilePath = videoFile[0]?.filepath;

  try {
    const resp = await openai.createTranscription(
      fs.createReadStream(videoFilePath),
      "whisper-1",
       "Please include any filler words such as 'um', 'uh', 'er', or other disfluencies in the transcription. Make sure to also capitalize and punctuate properly."
    );
    const transcript = resp?.data?.text;

    const response = await openai.createModeration({
      input: resp?.data?.text,
    });

    if (response?.data?.results[0]?.flagged) {
      res
        .status(200)
        .json({ error: "Inappropriate content detected. Please try again." });
      return;
    }

    res.status(200).json({ transcript });
    return resp.data;
  } catch (error) {
    console.error("server error", error);
    res.status(500).json({ error: "Error" });
  }
}
