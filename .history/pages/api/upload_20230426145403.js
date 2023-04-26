import multiparty from 'multiparty';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const bucketName = 'negiupp-next-ecommerce';

export default async function handle(req, res) {
    const form = new multiparty.Form();
    const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
        });
    });
    console.log('length:', files.file.length);
    for(const file of files.file)
    const client = new S3Client({
        region: 'eu-north-1',
        credentials:{
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey:process.env.S3_SECRET_ACCES_KEY,
        },

    });
    client.send(new PutObjectCommand({
        Bucket : bucketName

    }));
    res.json('ok');
}

export const config = {
    api: { bodyParser: false },
};