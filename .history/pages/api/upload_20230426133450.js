import multiparty from 'multiparty';

export default async function handle(req, res) {
    const form = new multiparty.Form();
   const {fields, files} = new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files ) => {
            if(err) reject(err);
            resolve({fields, files});          
        });      
    });
}

export const config = {
    api: { bodyParser: false },
};