#!/bin/bash
action=$1


if [ "$action" = "install" ]; then

    # Navigate to docs_skeleton directory
    cd ./docs/docs_skeleton

    # Install Yarn
    npm install -g yarn

    # Install Node.js dependencies
    npx yarn install --frozen-lockfile --non-interactive

    # Navigate back to root directory
    cd ../..


elif [ "$action" = "run" ]; then

    # Navigate to docs_skeleton directory
    cd ./docs/docs_skeleton

    # Create a docs folder
    mkdir -p ./docs

    # Copy markdown and notebook files to docs_skeleton
    cp -r ../files/** ./docs/

    # run npm run serve
    npm run start

    # remove docs folder
    rm -rf ./docs

    # Navigate back to root directory
    cd ../..

else
    echo "Invalid action"
fi
