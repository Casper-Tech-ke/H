# Setup Guide

This document explains how to configure and run XCASPER SPACE on your own server.

## Prerequisites

- **Node.js** (version 14 or newer)
- **npm** for installing dependencies
- **MySQL** server for the application database

## Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd XCASPER-SPACE
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Configure environment variables**
   - Copy `.env` from the repository and fill in your database credentials and other values.
   - Ensure the MySQL server is reachable with the credentials provided.
4. **Run the web installer**
   - Start the server with `npm start` and browse to `/install`.
   - Provide your MySQL credentials and initial admin user information.
   - The installer will import `api/xcasper.sql` and configure the `.env` file.
5. **Start the development server**
   ```bash
   npm run dev
   ```
   This uses `nodemon` and reloads on file changes.
6. **Start for production**
   ```bash
   npm start
   ```

The application will be available on the port set in the `.env` file.

## SMTP Email Setup

1. In Brevo, authenticate `xcasper.space` and verify the sender address you plan to use. Copy the
   SPF/DKIM DNS records Brevo provides into your domain's DNS settings and wait for verification.
2. In Brevo's transactional email SMTP settings, generate SMTP credentials. Use
   `smtp-relay.brevo.com` as the hostname, port `587`, and STARTTLS.
3. Set `SMTP_HOST=smtp-relay.brevo.com`, `SMTP_PORT=587`, and `SMTP_SECURE=false` in `.env`.
   Set `SMTP_USER` to the Brevo SMTP login, `SMTP_PASSWORD` to the generated SMTP key (not the API
   key), and `SMTP_FROM` to the verified sender address.
4. Set `ADMIN_EMAIL` and `SUPPORT_EMAIL` to the addresses that should receive notifications.
5. Restart the app and send a test message. You can also add a sender under `/admin/emails` using
   the same Brevo host, port, login, and SMTP key, then use the admin test-email action.

Never commit SMTP passwords. For DNS, configure the MX, SPF, DKIM, and DMARC records specified by
Brevo for `xcasper.space`. SPF/DKIM values are specific to your Brevo account; avoid adding a second
SPF TXT record if one already exists—merge the required include into the existing SPF record.

The bot configuration file checked in users' GitHub repositories must be named `xcasper.json`.
Replace the existing logo and favicon files with XCASPER SPACE artwork, then upload them to the
configured CDN paths under `cdn.xcasper.space`.
