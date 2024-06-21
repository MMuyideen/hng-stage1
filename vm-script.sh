sudo apt update && sudo apt upgrade -y
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
git clone https://github.com/MMuyideen/hng-stage1.git
cd hng-stage1/web
sudo cp * /var/www/html/