# Portfolio Site

- This is my portfolio website. built with docusaurus. follow this [link](https://balnarendrasapa.github.io/portfolio/) to view the site.

## Getting Started

1. **Fork this repository** to your own GitHub account.
2. **Make necessary changes:**
    - Modify names in `settings.ini` and `docusaurus.config.js` files in the `docs_skeleton` directory.
3. **Enable GitHub Pages deployment:**
    - Go to the repository settings.
    - Under "Pages" in repository settings, select "GitHub Actions Beta" under "Build and Deployment".
4. **Workflow Automation:**
    - This repository includes a workflow.
    - Place your files in respective directories.
    - Merge your changes with the `master` branch.
    - The workflow will be triggered automatically, and your GitHub site will be built and deployed.
5. **Add Content:**
    - Place your markdown and Jupyter notebook files in the `files` directory within the `docs` directory.
    - You can create sub-directories to group Markdown or notebook files, which will add a dropdown list on the site.
## Running the project locally

> [!NOTE]  
> use `./script.ps1` instead of `./script.sh` if you are using windows and powershell

- run `./script.sh install` to install dependencies of site.
- run `./script.sh run`.
- open `localhost:3000/portfolio/` to see the site.
