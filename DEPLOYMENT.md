# Deployment Guide - Simple Setup

## Prerequisites
- Docker and Docker Compose installed
- Nginx installed on host
- Domain/subdomain DNS pointed to server IP

## Step 1: Deploy Docker Container

```bash
# Build and start the Next.js app
docker-compose up -d --build

# Verify it's running
docker ps
curl http://localhost:3000
```

## Step 2: Configure Host Nginx

```bash
# Copy the nginx config
sudo cp nginx-host.conf /etc/nginx/sites-available/showcase.monadungeon.xyz

# Create symbolic link
sudo ln -s /etc/nginx/sites-available/showcase.monadungeon.xyz /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

Your site should now be accessible at http://showcase.monadungeon.xyz

## Step 3: Setup SSL with Let's Encrypt (Automatic with Certbot)

### Easy Setup (Recommended)

1. **Edit the initialization script:**
```bash
nano init-letsencrypt.sh
# Change EMAIL to your actual email address
```

2. **Run the script:**
```bash
./init-letsencrypt.sh
```

3. **Enable HTTPS in Nginx config:**
```bash
nano nginx/conf.d/monad-showcase.conf
# Follow the instructions in the comments:
# - Uncomment the HTTPS server block
# - Uncomment the HTTP to HTTPS redirect
# - Comment out the HTTP location / block
```

4. **Restart Nginx:**
```bash
docker-compose restart nginx
```

### Manual Setup

```bash
# Make sure services are running
docker-compose up -d

# Request certificate (replace email)
docker-compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email your-email@example.com \
    --agree-tos \
    --no-eff-email \
    -d showcase.monadungeon.xyz

# Update nginx config (follow Step 3.3 above)
# Restart nginx
docker-compose restart nginx
```

## Step 4: Auto-renewal

The certbot container automatically renews certificates every 12 hours. No manual intervention needed!

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
