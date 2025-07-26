# Vercel Deployment Guide

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **Environment Variables**: Set up the required environment variables

## Environment Variables

You need to set these environment variables in your Vercel project:

### Required Variables

1. **NEXT_PUBLIC_API_URL**
   - Value: Your backend API URL
   - Example: `https://your-backend-domain.com` or `http://localhost:3000` for development
   - This is used for API calls to your NestJS backend

2. **NEXT_PUBLIC_GOOGLE_MAPS_API_KEY**
   - Value: Your Google Maps API key
   - Get it from [Google Cloud Console](https://console.cloud.google.com/)
   - This is used for the map component

## Deployment Steps

### Method 1: Vercel Dashboard

1. **Connect Repository**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Select the `front` directory as the root directory

2. **Configure Environment Variables**:
   - In the project settings, go to "Environment Variables"
   - Add the variables listed above
   - Set them for "Production", "Preview", and "Development"

3. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy your app

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd front
   vercel
   ```

4. **Set Environment Variables**:
   ```bash
   vercel env add NEXT_PUBLIC_API_URL
   vercel env add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
   ```

## Configuration Files

### vercel.json
The `vercel.json` file is already configured with:
- Build command: `npm run build`
- Framework: Next.js
- Function timeout: 30 seconds
- Region: Washington, D.C. (iad1)

### next.config.ts
Your Next.js configuration is set up for:
- Static generation
- Image optimization
- Local API calls

## Troubleshooting

### Build Errors

1. **Environment Variables Missing**:
   - Ensure all `NEXT_PUBLIC_*` variables are set in Vercel
   - Check that the API URL is accessible

2. **API Connection Issues**:
   - Make sure your backend is deployed and accessible
   - Check CORS settings on your backend

3. **Google Maps Issues**:
   - Verify your Google Maps API key is valid
   - Check that the API key has the necessary permissions

### Common Issues

1. **404 Errors**: Check that your API URL is correct
2. **CORS Errors**: Ensure your backend allows requests from your Vercel domain
3. **Build Timeout**: The build should complete within 30 seconds

## Post-Deployment

1. **Test Your App**: Visit your Vercel URL and test all features
2. **Check API Calls**: Ensure the frontend can communicate with your backend
3. **Monitor Logs**: Use Vercel's function logs to debug any issues

## Custom Domain (Optional)

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

## Backend Deployment

Remember to also deploy your NestJS backend separately (e.g., to Railway, Heroku, or your own server) and update the `NEXT_PUBLIC_API_URL` environment variable accordingly. 