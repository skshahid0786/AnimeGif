// api/get-waifu.js
export default async function handler(req, res) {
    const { type = 'sfw', category = 'waifu' } = req.query;

    try {
        const response = await fetch(`https://api.waifu.pics/${type}/${category}`);
        const data = await response.json();

        // You can modify the data here before sending it to your frontend
        const customResponse = {
            ...data,
            timestamp: new Date().toISOString(),
            provider: "BlissCraft-Custom-API"
        };

        res.status(200).json(customResponse);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}
