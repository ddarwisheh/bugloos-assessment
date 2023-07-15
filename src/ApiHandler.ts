import axios, { AxiosError, AxiosResponse } from 'axios';
import { parseStringPromise } from 'xml2js';

/* 
    - fetch data using axios
    - check if data xml or json
 */
async function fetchDataFromApi(url: string): Promise<any> {
    try {
        const response: AxiosResponse = await axios.get(url);

        const contentType = response.headers['content-type'];
        const isXml: boolean =
            contentType.includes('application/xml') || contentType.includes('text/xml');

        if (isXml) {
            const xmlData = response.data;
            try {
                const jsonData = await parseStringPromise(xmlData, {
                    explicitArray: false,
                });
                return jsonData.data;
            } catch (error) {
                throw new Error('Failed to parse XML response');
            }
        }

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            if (axiosError.response) {
                throw new Error(`Request failed with status code ${axiosError.response.status}`);
            } else if (axiosError.request) {
                throw new Error('Request failed, no response received');
            } else {
                throw new Error('Request failed, error occurred during processing');
            }
        } else {
            throw new Error('Failed to fetch data from API');
        }
    }
}

export { fetchDataFromApi };
