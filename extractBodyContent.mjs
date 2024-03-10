// Using ESM import syntax
import fs from 'fs/promises';
import { JSDOM } from 'jsdom';
import clipboardy from 'clipboardy';

// Path to the input HTML file
const inputFile = 'like2earn.html';
// Path to the output HTML file
const outputFile = 'extractedBodyContent.html';

async function extractAndCopy() {
    try {
        // Read the content of the input HTML file
        const data = await fs.readFile(inputFile, 'utf8');

        // Parse the HTML content
        const dom = new JSDOM(data);
        const bodyContent = dom.window.document.body.innerHTML;

        // Write the extracted body content to the output file
        await fs.writeFile(outputFile, bodyContent);
        console.log(`Body content extracted and saved to ${outputFile}`);

        // Copy the extracted body content to the clipboard
        await clipboardy.write(bodyContent);
        console.log('Body content copied to clipboard');
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

extractAndCopy();
