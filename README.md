# Profixer - Auto Parts Landing Page

A professional landing page for an auto parts business in Jamaica. This project includes a form to collect customer information and integrates with Feishu Sheets API to store the submitted data.

## Features

- Modern, responsive design optimized for all devices
- Contact form for customer inquiries
- Integration with Feishu Sheets API for data storage
- Tailwind CSS for styling
- Next.js App Router architecture

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Feishu account with API access

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd 876
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Configure environment variables

Copy the `.env.local` file and update it with your Feishu API credentials:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with your actual Feishu API credentials:

```
FEISHU_APP_ID=your_app_id_here
FEISHU_APP_SECRET=your_app_secret_here
FEISHU_SPREADSHEET_TOKEN=your_spreadsheet_token_here
FEISHU_SHEET_ID=your_sheet_id_here
```

### Feishu API Setup

1. Create a Feishu account if you don't have one
2. Create a new app in the Feishu developer platform
3. Enable the Sheets API permissions for your app
4. Create a spreadsheet in Feishu and note its token from the URL
5. Create a sheet within the spreadsheet and note its ID
6. Update the `.env.local` file with these credentials

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js App Router pages and API routes
- `/components` - React components
- `/public` - Static assets

## Form Data Collection

The contact form collects the following information:

- Customer name
- WhatsApp number
- Vehicle brand
- Vehicle identification number (VIN)
- Parts needed

This data is sent to the Feishu Sheets API and stored in the configured spreadsheet.

## Deployment

This project can be deployed on any platform that supports Next.js applications, such as Vercel, Netlify, or a traditional server.

```bash
npm run build
npm run start
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
