import multiparty from 'multiparty';
import { S3Clin } from '@aws-sdk/client-s3';

export default async function handle(req, res) {
    const form = new multiparty.Form();
    const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
        });
    });
    console.log('length:', files.file.length)
    res.json('ok');
}

export const config = {
    api: { bodyParser: false },
};