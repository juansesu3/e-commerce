import multiparty from 'multiparty';

export default async function handle(req, res) {
    multiparty.Form()

}

export const config = {
    api: { boduParser: false },
}