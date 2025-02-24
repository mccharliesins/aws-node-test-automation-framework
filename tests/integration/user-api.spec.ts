import axios from 'axios';
import { generateAuthToken } from '../../utils/aws-helper';

const BASE_URL = process.env.API_URL || 'https://jsonplaceholder.typicode.com'; // Default to placeholder API

describe('User API Integration Tests', () => {
    let token: string;

    beforeAll(async () => {
        token = await generateAuthToken();
    });

    it('should return 200 OK for getting users', async () => {
        const response = await axios.get(`${BASE_URL}/users`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });