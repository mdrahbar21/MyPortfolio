echo "Switching to branch main..."
git checkout main

echo "Building app..."
npm run build

echo "Deploying to server..."
scp -r -i ./rahbar.pem ./dist/* ubuntu@ec2-54-252-244-63.ap-southeast-2.compute.amazonaws.com:/var/www/mdrahbar.in

echo "Deployed successfully!"