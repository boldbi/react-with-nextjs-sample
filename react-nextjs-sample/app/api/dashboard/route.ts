import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import http from 'http';
import https from 'https';
import crypto from 'crypto';

const userEmail = process.env.USER_EMAIL;
const secretKey: any = process.env.EMBED_SECRET;

export async function POST(request: NextApiRequest) {
    let jsonData = '';
    let authorizeData = '';
    for await (const chunk of request.body) {
        jsonData += chunk.toString(); // Convert each chunk of data to string and append to jsonData
    }
    const parsedData = JSON.parse(jsonData);
    const { embedQuerString, dashboardServerApiUrl } = parsedData;
    const timestamp = Math.round((new Date()).getTime() / 1000);
    const embedQueryString = `${embedQuerString}&embed_user_email=${userEmail}&embed_server_timestamp=${timestamp}`;
    const embedSignature = `&embed_signature=${GetSignatureUrl(embedQueryString)}`;
    const embedDetailsUrl = `/embed/authorize?${embedQueryString}${embedSignature}`;
    const serverProtocol = new URL(dashboardServerApiUrl).protocol === 'https:' ? https : http;
    const authorizeResponse = await new Promise((resolve, reject) => {
        const requestToServer = serverProtocol.get(dashboardServerApiUrl + embedDetailsUrl, (res: any) => {
            res.on('data', (chunk: any) => {
                authorizeData += chunk;
            });
            res.on('end', () => {
                resolve(authorizeData);
            });
        });

        // Handle errors during the HTTP request
        requestToServer.on('error', (err: any) => {
            console.error('Error making HTTP request:', err);
            reject(err);
        });
    });
    return NextResponse.json(authorizeResponse, { status: 200 });
}

function GetSignatureUrl(embedQueryString: string){
  const hmac = crypto.createHmac('sha256', secretKey);
  return hmac.update(embedQueryString).digest('base64');
}
