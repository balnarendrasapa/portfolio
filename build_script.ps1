param (
    [string]$action
)

function Build-Action {
    # If not, copy the whole docs directory
    Copy-Item -Path .\docs -Destination .\docs_build -Recurse

    # Navigate to docs_skeleton directory
    Set-Location -Path .\docs_build\docs_skeleton

    # Install Yarn
    npm install -g yarn

    # Install Node.js dependencies
    npx yarn install --frozen-lockfile --non-interactive

    # Create a docs folder
    New-Item -Path .\docs -ItemType Directory -Force

    # Copy markdown and notebook files to docs_skeleton
    Copy-Item -Path ..\files\* -Destination .\docs -Recurse

    # Run nbdoc
    nbdoc_build

    # Build the project
    npx yarn build
}

if ($action -eq "build") {
    # Check if docs_skeleton directory exists
    if (Test-Path -Path .\docs_build) {
        Write-Output "Already built. Please run rebuild action instead."
    } else {
        # Build the project
        Build-Action
    }
    
    # Navigate back to root directory
    Set-Location -Path ..\..

} elseif ($action -eq "rebuild") {
    # Remove docs_skeleton directory
    Remove-Item -Path .\docs_build -Recurse

    # Build the project
    Build-Action

    # Navigate back to root directory
    Set-Location -Path ..\..

} elseif ($action -eq "serve") {
    try {
        # Navigate to docs_skeleton directory
        Set-Location -Path .\docs_build\docs_skeleton

        # Run the server
        npm run serve
    }

    finally {
        # Navigate back to root directory
        Set-Location -Path ..\..
    }

} else {
    Write-Output "Invalid action"
}

# Set the working directory back to the script directory
Set-Location -Path $PSScriptRoot