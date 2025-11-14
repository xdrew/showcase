#!/bin/bash

# Initialize Let's Encrypt SSL certificates for Docker deployment

DOMAIN="showcase.monadungeon.xyz"
EMAIL="your-email@example.com"  # Replace with your email
STAGING=0  # Set to 1 for testing to avoid rate limits

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting Let's Encrypt initialization for $DOMAIN${NC}"

# Check if email is set
if [ "$EMAIL" = "your-email@example.com" ]; then
    echo -e "${RED}Error: Please set your email address in this script${NC}"
    exit 1
fi

# Create required directories
echo -e "${YELLOW}Creating required directories...${NC}"
mkdir -p nginx/ssl

# Start nginx and certbot services
echo -e "${YELLOW}Starting services...${NC}"
docker-compose up -d nginx certbot

# Wait for nginx to be ready
echo -e "${YELLOW}Waiting for Nginx to be ready...${NC}"
sleep 5

# Request certificate
echo -e "${YELLOW}Requesting SSL certificate...${NC}"

if [ $STAGING != "0" ]; then
    echo -e "${YELLOW}Running in staging mode (test certificate)${NC}"
    STAGING_ARG="--staging"
else
    STAGING_ARG=""
fi

docker-compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    $STAGING_ARG \
    -d $DOMAIN

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ SSL certificate obtained successfully!${NC}"
    echo -e "${YELLOW}Next steps:${NC}"
    echo "1. Edit nginx/conf.d/monad-showcase.conf"
    echo "2. Uncomment the HTTPS server block"
    echo "3. Comment out the HTTP location / block"
    echo "4. Uncomment the HTTP to HTTPS redirect"
    echo "5. Run: docker-compose restart nginx"
else
    echo -e "${RED}✗ Failed to obtain SSL certificate${NC}"
    echo "Check the logs above for errors"
    exit 1
fi

echo -e "${GREEN}Done! Your site will be accessible at https://$DOMAIN${NC}"
