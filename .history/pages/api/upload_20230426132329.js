import multiparty from 'multiparty';

export default async function handle(req, res) {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files ) => {
        if(err)
        console.log('length:', files.length)
        res.json('ok');

    });

}

export const config = {
    api: { bodyParser: false },
};