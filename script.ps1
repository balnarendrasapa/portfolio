param (
    [string]$action
)

function Install-Action {
    # Navigate to docs_skeleton directory
    Set-Location -Path .\docs\docs_skeleton

    # Install Yarn
    npm install -g yarn

    # Install Node.js dependencies
    npx yarn install --frozen-lockfile --non-interactive

    # Navigate back to root directory
    Set-Location -Path ..\..
}

function Run-Action {
    # Navigate to docs_skeleton directory
    Set-Location -Path .\docs\docs_skeleton

    # Create a docs folder
    New-Item -Path .\docs -ItemType Directory -Force

    # Copy markdown and notebook files to docs_skeleton
    Copy-Item -Path ..\files\* -Destination .\docs -Recurse

    try{
        # run npm run serve
        npm run start
    }

    finally{
        # remove docs folder
        Remove-Item -Path .\docs -Recurse

        # Navigate back to root directory
        Set-Location -Path ..\..
    }
}

if ($action -eq "install") {
    Install-Action
} elseif ($action -eq "run") {
    Run-Action
} else {
    Write-Output "Invalid action"
}

# Set the working directory back to the script directory
Set-Location -Path $PSScriptRoot