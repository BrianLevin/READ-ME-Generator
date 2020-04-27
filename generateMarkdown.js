function renderLicenseBadge(license) {
    if (license !== "None") {
        return '[![GitHub license ](https://img.shields.io/badge/license-${license}-blue.svg)]';
    }
    return ''

}

function generateMarkdown(data) {
    return `
 # title
 ${data.title} 

 ## Description
 ${data.description}
 
 
 `








}