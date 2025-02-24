import axios from 'axios';
import { generateAuthToken } from '../../utils/aws-helper';

const BASE_URL = process.env.API_URL || 'https://jsonplaceholder.typicode.com'; // Default to placeholder API

describe('User API Integration Tests', () => {
    let token: string;

    beforeAll(async () => {