import multiparty from 'multiparty';

export default async function handle(req, res) {
    const form = new multiparty.Form();
    return new Promise((resolve, reject) => {
        
    })
  

}

export const config = {
    api: { bodyParser: false },
};