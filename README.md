# My Global App 🌐

A full-stack web application with React frontend, Express backend, MySQL database, and Nginx reverse proxy - all containerized with Docker.

## 📋 Table of Contents
- [Local Development](#local-development)
- [Deployment Options](#deployment-options)
- [Architecture](#architecture)

---

## 🏠 Local Development

### Prerequisites
- Docker Desktop installed on your computer
- Git (for version control)

### Running Locally

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd My-app_global
```

2. **Start the application**
```bash
docker-compose up --build
```

3. **Access the application**
   - **Main App:** http://localhost:8080
   - **MySQL Database:** localhost:3307
   - API endpoints available at: http://localhost:8080/api

4. **Stop the application**
```bash
docker-compose down
```

To stop and remove all data (including database):
```bash
docker-compose down -v
```

---

## 🚀 Deployment Options

Your app is Dockerized, which makes deployment easier! Here are your best options as a beginner:

### Option 1: Railway (⭐ EASIEST - Recommended for Beginners)

**Why Railway?** Free tier, automatic Docker detection, simple UI, built-in database

**Steps:**
1. Go to [railway.app](https://railway.app) and sign up (free)
2. Click "New Project" → "Deploy from GitHub repo"
3. Connect your GitHub account and select this repository
4. Railway will automatically detect your `docker-compose.yml`
5. Add environment variables if needed
6. Deploy! You'll get a public URL like `your-app.up.railway.app`

**Cost:** Free tier includes $5/month credit

---

### Option 2: Render (Simple & Free Tier Available)

**Why Render?** Easy to use, free tier, good for learning

**Steps:**
1. Push your code to GitHub
2. Go to [render.com](https://render.com) and sign up
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Render will detect Docker automatically
6. Choose your plan (free tier available)
7. Deploy!

**Note:** Free tier services sleep after inactivity, but wake up when accessed.

---

### Option 3: DigitalOcean App Platform

**Why DigitalOcean?** Professional platform, good documentation, $200 free credit for new users

**Steps:**
1. Sign up at [digitalocean.com](https://www.digitalocean.com)
2. Go to "Apps" → "Create App"
3. Connect your GitHub repository
4. Select Docker Compose deployment
5. Configure resources (smallest droplet for testing)
6. Deploy!

**Cost:** Starts at ~$5/month (but you get $200 credit as a new user)

---

### Option 4: AWS (Advanced - Industry Standard)

**Why AWS?** Most popular in industry, scalable, but more complex

**Services you'd use:**
- **ECS (Elastic Container Service)** - for running Docker containers
- **RDS** - for MySQL database
- **ECR** - for storing Docker images
- **ALB** - Application Load Balancer (like your Nginx)

**Not recommended for absolute beginners**, but here's the general process:
1. Push Docker images to AWS ECR
2. Create RDS MySQL instance
3. Create ECS cluster and task definitions
4. Deploy containers
5. Configure load balancer

**Cost:** Free tier available, but can get expensive if not configured properly

---

### Option 5: Self-Hosted VPS (Linux Server)

**Why VPS?** Full control, learn server management

**Popular VPS providers:**
- DigitalOcean Droplets ($4-6/month)
- Linode
- Vultr
- AWS Lightsail

**Steps:**
1. Rent a VPS (Linux server)
2. SSH into your server
3. Install Docker and Docker Compose
4. Clone your repository
5. Run `docker-compose up -d`
6. Configure domain name (optional)

**This is great for learning**, but you'll need to handle:
- Server security
- SSL certificates (HTTPS)
- Server updates
- Backups

---

## 🏗️ Architecture

Your application uses a **microservices architecture** with Docker:

```
Internet → Nginx (Port 8080) → React App (Port 3000)
                              ↓
                           Express API (Port 3001)
                              ↓
                           MySQL DB (Port 3307)
```

### Services:

1. **nginx** - Reverse proxy that routes traffic
   - Routes `/` to React app
   - Routes `/api` to Express server

2. **react-app** - Frontend (React)
   - Runs on port 3000 (internal)
   - Node.js 20

3. **express-app** - Backend API (Express.js)
   - Runs on port 3001 (internal)
   - Handles API requests

4. **mysql-db** - Database (MySQL 8.0)
   - Runs on port 3307 (external), 3306 (internal)
   - Persistent data storage

All services communicate through a Docker network called `app-network`.

---

## 🎯 My Recommendation for Beginners

**Start with Railway** because:
- ✅ Completely free to start
- ✅ Automatically detects Docker Compose
- ✅ One-click deploy from GitHub
- ✅ Provides free database
- ✅ Simple dashboard
- ✅ Automatic HTTPS

Once you're comfortable, you can move to more professional platforms like DigitalOcean or AWS.

---

## 📝 Before Deploying - Checklist

- [ ] Push your code to GitHub (private or public repo)
- [ ] Make sure `docker-compose.yml` is in the root directory ✅ (you have this)
- [ ] Test locally with `docker-compose up` ✅ (working)
- [ ] Set up environment variables (passwords, API keys)
- [ ] Choose a deployment platform
- [ ] Configure custom domain (optional)

---

## 🔒 Security Tips

Before deploying to production:

1. **Don't use default passwords!** Update these in a `.env` file:
   - MYSQL_ROOT_PASSWORD
   - MYSQL_PASSWORD
   - Any API keys

2. **Create a `.env` file** (don't commit it to Git):
```bash
MYSQL_ROOT_PASSWORD=your-secure-password-here
MYSQL_PASSWORD=your-user-password-here
MYSQL_USER=your-username
MYSQL_DATABASE=mydb
NODE_ENV=production
```

3. **Add `.env` to `.gitignore`** (so passwords aren't public)

---

## 🆘 Need Help?

- **Local app won't start?** Check if Docker Desktop is running
- **Port already in use?** Run `docker-compose down` first
- **Connection refused?** Use `localhost:8080`, not `localhost:3000`
- **Database issues?** Run `docker-compose down -v` to reset data

---

## 📚 Learn More

- [Docker Documentation](https://docs.docker.com)
- [Docker Compose Guide](https://docs.docker.com/compose)
- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)

---

Made with ❤️ by Kiran
