import multiparty from 'multiparty';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import fs from 'fs';
import mime from 'mime-types';

const bucketName = 'juan-sesu-ecommerce';

export default async function handle(req, res) {
    const form = new multiparty.Form();
    const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
        });
    });
    console.log('length:', files.file.length);
    console.log(files);
    console.log('access key', process.env.S3_ACCESS_KEY);
    const client = new S3Client({
        region: 'eu-north-1',
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET_ACCES_KEY,
        },
    });
    const links = [];
    for (const file of files.file) {
        const ext = file.originalFilename.split('.').pop();
        const newFilename = `${Date.now()}.${ext}`;
        //console.log({ ext, file })
        let buffer = fs.readFileSync(file.path);
        //console.log(buffer);
        //console.log(buffer.length);
        try {
            let result = await client.send(new PutObjectCommand({
                Bucket: bucketName,
                Key: newFilename,
                Body: buffer,
                ACL: 'public-read',
                ContentType: mime.lookup(file.path)
            }));
        } catch (err) {
            console.log(err)
        }
        console.log(result);
        const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`;
        links.push(link)
    }
    return res.json({ links });
}
export const config = {
    api: { bodyParser: false },
};