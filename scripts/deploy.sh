# Build project
npm run build
# Archive artifacts
zip dist/$npm_package_name.zip -r dist package.json package-lock.json