import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import * as fs from 'fs';
import * as path from 'path';

// Simulates Auth Token Generation
export const generateAuthToken = async (): Promise<string> => {
    // Integration with Cognito Identity Provider
    // const client = new CognitoIdentityProviderClient({ region: "us-east-1" });
    // const command = new InitiateAuthCommand({ ... });
    // const response = await client.send(command);
    // return response.AuthenticationResult?.AccessToken || "";

    return "mock-jwt-token-ey1234567890";
};

export const uploadReportToS3 = async (bucketName: string, filePath: string): Promise<void> => {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }

    const fileContent = fs.readFileSync(filePath);
    const fileName = path.basename(filePath);

    // Credentials loaded from environment variables
    const client = new S3Client({ region: "us-east-1" });

    try {
        const command = new PutObjectCommand({
            Bucket: bucketName,
            Key: `reports/${fileName}`,
            Body: fileContent,
            ContentType: 'text/html'
        });

        // await client.send(command);