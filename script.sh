# Navigate to docs_skeleton directory
cd ./docs/docs_skeleton

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

# Navigate back to root directory
cd ../..