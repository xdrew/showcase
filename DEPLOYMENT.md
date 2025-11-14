# Deployment Guide - Docker with Nginx

## Prerequisites
- Docker and Docker Compose installed
- Domain/subdomain DNS pointed to server IP

## Step 1: Configure Your Subdomain

Edit `nginx/conf.d/monad-showcase.conf` and replace `showcase.yourdomain.com` with your actual subdomain.

## Step 2: Deploy Everything with Docker

```bash
# Build and start all containers (Next.js app + Nginx)
docker-compose up -d --build

# Verify containers are running
docker ps

# Check logs
docker-compose logs -f
```

Your site should now be accessible at http://showcase.yourdomain.com

## Step 3: Setup SSL with Let's Encrypt (Recommended)

### Option A: Using Certbot (Standalone)

```bash
# Stop Nginx container temporarily
docker-compose stop nginx

# Install certbot
sudo apt update
sudo apt install certbot

# Get SSL certificate (replace with your subdomain)
sudo certbot certonly --standalone -d showcase.yourdomain.com

# Copy certificates to nginx/ssl directory
sudo cp /etc/letsencrypt/live/showcase.yourdomain.com/fullchain.pem nginx/ssl/
sudo cp /etc/letsencrypt/live/showcase.yourdomain.com/privkey.pem nginx/ssl/
sudo chmod 644 nginx/ssl/*.pem

# Edit nginx/conf.d/monad-showcase.conf
# Uncomment the HTTPS block and SSL redirect

# Restart Nginx container
docker-compose up -d nginx
```

### Option B: Using Certbot with Docker

```bash
# Run certbot in Docker
docker run -it --rm \
  -v /etc/letsencrypt:/etc/letsencrypt \
  -v /var/lib/letsencrypt:/var/lib/letsencrypt \
  -p 80:80 \
  certbot/certbot certonly --standalone \
  -d showcase.yourdomain.com

# Copy certificates to nginx/ssl
sudo cp /etc/letsencrypt/live/showcase.yourdomain.com/fullchain.pem nginx/ssl/
sudo cp /etc/letsencrypt/live/showcase.yourdomain.com/privkey.pem nginx/ssl/
sudo chmod 644 nginx/ssl/*.pem

# Restart services
docker-compose restart nginx
```

## Step 4: Setup Auto-renewal

Add to crontab:
```bash
# Open crontab
crontab -e

# Add this line (runs every day at 3am)
0 3 * * * certbot renew --quiet && cp /etc/letsencrypt/live/showcase.yourdomain.com/*.pem /path/to/showcase/nginx/ssl/ && docker-compose -f /path/to/showcase/docker-compose.yml restart nginx
```

## DNS Configuration (Namecheap)

1. Go to Namecheap → Domain List → Advanced DNS
2. Add A Record:
   - **Type**: A Record
   - **Host**: showcase (or your subdomain prefix)
   - **Value**: Your server's IP address
   - **TTL**: Automatic

## Useful Commands

### Docker
```bash
docker-compose logs -f              # View logs
docker-compose down                 # Stop container
docker-compose up -d --build        # Rebuild and restart
docker-compose restart              # Restart container
```

### Nginx (Docker)
```bash
docker-compose exec nginx nginx -t              # Test configuration
docker-compose restart nginx                    # Restart Nginx
docker-compose logs nginx                       # View logs
docker exec monad-nginx tail -f /var/log/nginx/error.log
```

### SSL Certificate
```bash
sudo certbot certificates           # List certificates
sudo certbot renew                  # Manually renew
sudo certbot delete                 # Delete certificate
```

## Troubleshooting

### Container won't start
```bash
docker-compose logs
docker-compose down
docker-compose up --build
```

### Site not accessible
```bash
# Check if containers are running
docker ps

# Check Nginx container
docker-compose exec nginx nginx -t
docker-compose logs nginx

# Check app container
docker-compose logs monad-showcase

# Check firewall
sudo ufw status
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 22

# Test from inside nginx container
docker-compose exec nginx wget -O- http://monad-showcase:3000
```

### DNS not resolving
- Wait 30 minutes to 48 hours for DNS propagation
- Check with: `nslookup showcase.yourdomain.com`
- Or: `dig showcase.yourdomain.com`

## Security Checklist

- [ ] SSL/HTTPS enabled
- [ ] Firewall configured (allow 80, 443, 22 only)
- [ ] Auto-renewal for SSL certificates working
- [ ] Regular updates: `sudo apt update && sudo apt upgrade`
- [ ] Docker container runs as non-root user (already configured)
