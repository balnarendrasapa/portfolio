#!/bin/bash
action=$1

build_action() {
    
    # If not, copy the whole docs directory
    cp -r ./docs ./docs_build

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
}

if [ "$action" = "build" ]; then

    # Check if docs_skeleton directory exists
    if [ -d "./docs_build" ]; then
        echo "Already built. Please run rebuild action instead."
    else
        # Build the project
        build_action
    fi
    
    # Navigate back to root directory
    cd ../..

elif [ "$action" = "rebuild" ]; then

    # Remove docs_skeleton directory
    rm -rf ./docs_build

    # Build the project
    build_action

    # Navigate back to root directory
    cd ../..

elif [ "$action" = "serve" ]; then

    # Navigate to docs_skeleton directory
    cd ./docs_build/docs_skeleton

    # Run the server
    npm run serve

else
    echo "Invalid action"
fi
