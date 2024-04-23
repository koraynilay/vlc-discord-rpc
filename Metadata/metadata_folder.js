const { execSync } = require('child_process');
const readline = require('readline');
const fs = require("fs").promises;  
const path = require('path');       

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function directoryFiles(directory) {
    return fs.readdir(directory).catch(err => {
        console.error(`Failed to read directory ${directory}:`, err);
        throw err;
    });
}

async function addMetadata() {
    try {
        const directory = await askQuestion("Enter the directory to add metadata to: ");
        const files = await directoryFiles(directory);  
        for (let file of files) {
            if(file.includes("meta")) {
                continue;
            }
            const input_file = path.join(directory, file);

            const output_file = input_file.substring(0, input_file.lastIndexOf('.')) + "_meta" + input_file.substring(input_file.lastIndexOf('.'));

            console.log(`Writing to ${output_file}`);

            let overwrite = "-n"; 
            if (await fs.stat(output_file).catch(() => false)) {  
                overwrite = await handleExistingOutputFile();
            }

            const content_type = await getContentType();

            const name = await askQuestion(`Enter the ${content_type} name: `);

            const parameter_name = content_type == "show" ? "showName" : "title"; 
            const videoType = content_type == "show" ? "contentType" : "genre";

            let metadataCommand = `ffmpeg ${overwrite} -i "${input_file}" -c copy -metadata ${parameter_name}="${name}" -metadata ${videoType}="${content_type}"`;

            if (content_type === "show") {
                const season = await askQuestion("Enter the season number: ");
                const episode = await askQuestion("Enter the episode number: ");
                metadataCommand += ` -metadata season="${season}" -metadata episode="${episode}"`;
            }

            metadataCommand += ` "${output_file}"`;
            execSync(metadataCommand);
            console.log("Metadata added successfully.");
        }
    } catch (error) {
        console.error("An error occurred while adding metadata:", error);
    } finally {
        rl.close();
    }
}

async function getContentType() {
    let content_type = await askQuestion("Enter the content type (movie/show): ")
    content_type = content_type.toLowerCase();

    while (content_type !== "movie" && content_type !== "show") {
        console.log("Invalid option, please enter again.");
        content_type = await askQuestion("Enter the content type (Movie/Show): ");
        content_type = content_type.toLowerCase();
    }

    return content_type;
}

async function handleExistingOutputFile() {
    let overwrite = await askQuestion("That file already exists! Would you like to overwrite it (y/n): ");
    overwrite = overwrite.toLowerCase();

    while (overwrite !== "y" && overwrite !== "n") {
        console.log("Invalid input, please enter 'y' for yes or 'n' for no.");
        overwrite = await askQuestion("Would you like to overwrite it (y/n): ");
        overwrite = overwrite.toLowerCase();
    }

    return overwrite === 'y' ? '-y' : '-n'; 
}

addMetadata();