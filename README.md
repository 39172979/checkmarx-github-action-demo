# Checkmarx GitHub Actions Demo

This is a demo project for testing GitHub Actions with Checkmarx One integration.

## What this project does

- Runs Node.js unit tests with GitHub Actions
- Triggers Checkmarx One SAST/SCA scan
- Generates SARIF report
- Uploads SARIF report to GitHub Security tab

## Local test

```bash
npm install
npm test