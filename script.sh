
# Check if docs_skeleton directory exists
if [ ! -d "./docs_build" ]; then
    # If not, copy the whole docs directory
    cp -r ./docs ./docs_build
fi

# Navigate to docs_skeleton directory
cd ./docs_build/docs_skeleton

# Install Yarn
npm install -g yarn

# Install Node.js dependencies
npx yarn install --frozen-lockfile --non-interactive

# Create a docs folder
mkdir -p ./docs

# Copy markdown and notebook files to docs_skeleton
cp -r ../files/** ./docs/

# Run nbdoc
nbdoc_build

# Build the project
npx yarn build

# Run the server
npm run serve

# Navigate back to root directory
cd ../..