import { NextApiRequest, NextApiResponse } from "next";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
import { AwsCredentialIdentity } from "@aws-sdk/types";
import { fileURLToPath } from "url";

export type FileType= {
  url: string;
  name: string;
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    } as AwsCredentialIdentity
  });

  try {
    const command = new ListObjectsCommand({
      Bucket: process.env.S3_PORTFOLIO_BUCKET as string
    });

    const data = await client.send(command);

    // Construct the URLs for each object
    
    const files = data.Contents?.map(file => {
      const f: FileType = {
        url: `https://${process.env.S3_PORTFOLIO_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${file.Key}`,
        name: file.Key as string
      }
      return f
    });

    // Return the URLs
    res.status(200).json(files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the files.' });
  }
}