Here's my submission of my HNG 11 Stage one task

# Static Website Deployment on Azure VM

This README provides step-by-step instructions for deploying a static website on an Azure Linux Virtual Machine using NGINX as the web server.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Azure VM Setup](#azure-vm-setup)
3. [Server Configuration](#server-configuration)
4. [Website Deployment](#website-deployment)
5. [Access Website](#Access-website)

## Prerequisites

- An Azure account
- Basic knowledge of Linux commands
- SSH client (e.g., PuTTY or MobaXtem for Windows or Terminal for macOS/Linux)
- Your static website files (HTML, CSS, JavaScript)

## Azure VM Setup

1. Log in to the Azure Portal (portal.azure.com).
2. Create a new Virtual Machine:
   - Click "Create a resource" > "Virtual Machine"
   - Choose Ubuntu Server 20.04 LTS or later
   - Select appropriate size (e.g., Standard_B1s for low traffic)
   - Enable public inbound ports: SSH (22) and HTTP (80)
   - Create and download SSH key
3. Once created, note the VM's public IP address.

## Server Configuration

1. SSH into your VM:
   ```
   ssh -i <path-to-private-key> azureuser@<your-vm-ip>
   ```

2. Update the system:
   ```
   sudo apt update && sudo apt upgrade -y
   ```

3. Install NGINX:
   ```
   sudo apt install nginx -y
   ```

4. Start and enable NGINX:
   ```
   sudo systemctl start nginx
   sudo systemctl enable nginx
   ```



## Website Deployment

1. Upload your website files to the VM:
   ```
   git clone https://github.com/MMuyideen/hng-stage1.git && cd hng-stage1/web
   ```

2. Move or copy files to NGINX's serving directory:
   ```
   sudo mv * /var/www/html/
   ```
3. Edit NGINX configuration to show server version:
   ```
   server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/html;
    index index.html index.htm index.nginx-debian.html;

    server_name _;

    add_header X-Powered-By "NGINX $nginx_version";

    location / {
        try_files $uri $uri/ =404;
        }
    }
   ```   

4. Test NGINX configuration:
   ```
   sudo nginx -t
   ```

5. Reload NGINX:
   ```
   sudo systemctl reload nginx
   ```

## Access website
You can access your website by navigating to the VM"s IP address or optionally configure custom doamin



Thank you for reading.
