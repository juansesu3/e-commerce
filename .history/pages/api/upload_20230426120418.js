import multiparty from 'multiparty';

export default async function handle(req, res) {
    const form = multiparty.Form();
    form.parse(req, async (err, ) =>{

    });

}

export const config = {
    api: { boduParser: false },
};