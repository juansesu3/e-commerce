import multiparty from 'multiparty';
import { S3Client } from '@aws-sdk/client-s3';

export default async function handle(req, res) {
    const form = new multiparty.Form();
    const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
        });
    });
    console.log('length:', files.file.length);
    const client = new S3Client({
        region: 'eu-north-1',
        credentials:{
            accessKeyId:'',
            secretAccessKey
        },

    });
    res.json('ok');
}

export const config = {
    api: { bodyParser: false },
};