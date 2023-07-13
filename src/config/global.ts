import request from 'axios'

export const axios = request.create({
    baseURL: process.env.NEXT_PUBLIC_API_GATEWAY_URL,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});