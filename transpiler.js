// Function to modify text content inside tags
async function transformHTML(inputFile, outputFile) {
    try {
        // Read input file
        let data = await Bun.file(inputFile).text();

        // Regex to match text-wrapping tags with content
        const transformed = data.replace(/<(p|span|div|h\d)>(.*?)<\/\1>/g, (match, tag, content) => {
            return `<${tag}>${content} Hello Woild</${tag}>`;
        });

        // Write transformed content to output file
        await Bun.write(outputFile, transformed);
        console.log(`Transformed HTML saved to ${outputFile}`);
    } catch (err) {
        console.error('Error:', err);
    }
}

// Example usage
transformHTML('exampleToDo.scml', 'output.html');
// transformHTML('input.html', 'output.html');
