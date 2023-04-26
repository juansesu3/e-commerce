import multiparty from 'multiparty';

export default async function handle(req, res) {
    const form = new multiparty.Form();
    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files ) => {
            if(err) throw err;
            console.log('length:', files.file.length)
            res.json('ok');
        });
        
    });
}

export const config = {
    api: { bodyParser: false },
};