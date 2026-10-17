export default async function handler(request, response) {
try {
const apiKey = process.env.API_Key;

    if (!apiKey) {
        return response.status(500).json({
            error: "API key is not configured."
        });
    }

    const offset = Number(request.query.offset || 0);

    const apiResponse = await fetch(
        `https://api.restcountries.com/countries/v5?limit=100&offset=${offset}&pretty=1`,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }
    );

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
        return response.status(apiResponse.status).json(data);
    }

    return response.status(200).json(data);

} catch (error) {
    console.error("Countries API error:", error);

    return response.status(500).json({
        error: "Unable to retrieve country data."
    });
}


}
