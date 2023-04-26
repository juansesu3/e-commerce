import multiparty from 'multiparty';

export default async function handle(req, res) {
    const form = multiparty.Form();
    form.parse()

}

export const config = {
    api: { boduParser: false },
}