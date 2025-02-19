import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import * as fs from 'fs';
import * as path from 'path';

// Simulates Auth Token Generation
export const generateAuthToken = async (): Promise<string> => {
    // Integration with Cognito Identity Provider
    // const client = new CognitoIdentityProviderClient({ region: "us-east-1" });