# The "Quality Gate" Framework

A robust Test Automation Framework acting as a "Quality Gate" for your applications. This project triggers a suite of integration and load tests against an external environment, ensuring code quality and performance before deployment.

## Features

- **Test Engine**:
    - **Jest**: Comprehensive integration testing to validate API status codes, data integrity, and business logic.
    - **Artillery**: High-performance load testing to simulate user traffic and verify system stability.
- **Automation**: Fully automated CI/CD pipeline using **GitHub Actions**.
- **Reporting**: Automated HTML test reports generated and uploaded to **AWS S3** (simulation).
- **Security**: Helper utilities for managing AWS Authentication mechanisms.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd aws-node-test-automation-framework
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests

#### Integration Tests
Run the Jest integration test suite:
```bash
npm run test:integration
```
This runs the tests defined in `tests/integration/` against the configured `API_URL` (default: JSONPlaceholder).

#### Load Tests