# Navigate to docs_skeleton directory
cd ./docs/docs_skeleton

# Install Node.js dependencies
yarn install --frozen-lockfile --non-interactive

# Create a docs folder
mkdir -p ./docs

# Copy markdown and notebook files to docs_skeleton
cp -r ../files/** ./docs/

# Run nbdoc
nbdoc_build

# Build the project
yarn build

# Navigate back to root directory
cd ../..