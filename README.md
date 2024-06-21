Here's a comprehensive README file for the deployment:

```markdown
# Static Website Deployment on Azure VM

This README provides step-by-step instructions for deploying a static website on an Azure Linux Virtual Machine using NGINX as the web server.


## Prerequisites

- An Azure account
- Basic knowledge of Linux commands
- SSH client (e.g., PuTTY or MobaXterm for Windows or Terminal for macOS/Linux)
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
    ssh -i <path-to-private-key> azureuser@<your-vm-ip> 

2. Update the system:
    sudo apt update && sudo apt upgrade -y

3. Install NGINX:
    sudo apt install nginx -y


4. Start and enable NGINX:
    sudo systemctl start nginx
    sudo systemctl enable nginx

## Website Deployment

1. Upload your website files to the VM:
    git clone https://github.com/MMuyideen/hng-stage1.git
    cd hng-stage1/web


2. Move/copy files to NGINX's serving directory:
    sudo mv * /var/www/html/

5. Test NGINX configuration:
    sudo nginx -t


6. Reload NGINX:
    sudo systemctl reload nginx

# Access website
   ```
   Access the website using the VM's IP address
   Optionally configure a custom domain by creating A record with your domain provider
   ```


This task is my submission for HNG 11 stage 1 task