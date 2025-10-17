#!/bin/bash

# Render.com Build Script for GuestJourney Analytics
# This script is executed during deployment to build the production app

set -e  # Exit on any error

echo "🚀 Starting GuestJourney build process..."

# Display Node version
echo "📦 Node version: $(node --version)"
echo "📦 NPM version: $(npm --version)"

# Install dependencies
echo "📥 Installing dependencies..."
npm ci --production=false

# Build the application
echo "🔨 Building production application..."
npm run build

# Verify build output
echo "✅ Verifying build output..."
if [ -d "dist" ]; then
  echo "✓ Build directory created successfully"
  echo "📊 Build statistics:"
  du -sh dist
  echo "📁 Files in dist directory:"
  ls -lh dist
else
  echo "❌ Error: Build directory not found!"
  exit 1
fi

echo "✨ Build completed successfully!"
