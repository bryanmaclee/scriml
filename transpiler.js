// import { htmlTagsByCat } from "./dep/html";
// import htmlTagsFlat from "./dep/html";

// Function to modify text content inside tags
// function $() {
//   console.log("Hello World");
// }


function parseTagAttributes(html) {
    const tagMatch = html.match(/<(\w+)(.*?)\/?>/); // Capture tag name + attributes
    if (!tagMatch) return null;
    
    const tagName = tagMatch[1]; // Captured tag name
    const attributesString = tagMatch[2]; // Captured attributes string
    const attributes = {};
    
    // Regex to match key-value pairs in the tag's attributes
    // const attrRegex = /(\w+)=["'](.*?)["']/g;
    const attrRegex = /(\w+)=["']((?:\\["']|[^"'])*?)["']/g;

    
    let match;
    while ((match = attrRegex.exec(attributesString)) !== null) {
        const key = match[1];
        const value = match[2];
        
        console.log(match);
        // Check if it's a JS event handler (e.g., onclick, onmouseover)
        if (key.startsWith('on')) {
            // Add as a method in the object
            attributes[key] = new Function(value);
        } else {
            attributes[key] = value;
        }
    }

    return {
        tagName,
        ...attributes
    };
}

// Example Usage
const htmlTag = `<input type="text" id="taskInput" placeholder="Enter a task" onclick="alert('Clicked!')" JvaL="taskText.trim()" />`;

console.log(parseTagAttributes(htmlTag));



async function transformHTML(inputFile, outputFile) {
  try {
    // Read input file
    let data = await Bun.file(inputFile).text();

    // Regex to match text-wrapping tags with content
    // const transformed = data.replace(/<(p|span|div|h\d)>(.*?)<\/\1>/g, (match, tag, content) => {
    //     return `<${tag}>${content} Hello Woild</${tag}>`;
    // });

    const fileByLine = data.split("\n");
    const tagsFound = [];
    for (let i = 0; i < fileByLine.length; i++) {
        // console.log(fileByLine[i]);
        fileByLine[i] = fileByLine[i].trim()
        // const jk = parseTagAttributes(fileByLine[i]);
        // console.log(jk);
        // console.log(fileByLine[i]);
    //   if (fileByLine[i].startsWith("<")) {
    //     if (fileByLine[i].includes(">")) {
    //         const posibleTag = fileByLine[i].match(/<(\w+)/);
        //   const tag = fileByLine[i].match(/<(\w+)/)[1];
        //   if (htmlTagsFlat.includes(tag)) {
        //     console.log("Tag found");
        //     fileByLine[i] = fileByLine[i] + `<!-- HTML Tag: ${tag} -->`;
        //   }
        }
    //   }
    // }
    // fileByLine.forEach((line, index) => {
    //   if (line.startsWith("<")) {
    //       line = line.trim() + " Hello World";
    //       console.log(line);
        // const tag = line.match(/<(\w+)/)[1];
        // if (htmlTagsFlat.includes(tag)) {
        //   console.log("Tag found");
        //   line = line + `HTML Tag: ${tag}`;
          // console.log(htmlTagsByCat);
          // console.log(htmlTagsByCat.metadata);
          // console.log(htmlTagsByCat.metadata.includes(tag));
          // console.log(htmlTagsByCat.contentSectioning.includes(tag));
          // console.log(htmlTagsByCat.textContent.includes(tag));
          // console.log(htmlTagsByCat.inlineTextSemantics.includes(tag));
          // console.log(htmlTagsByCat.imageMultimedia.includes(tag));
          // console.log(htmlTagsByCat.embeddedContent.includes(tag));
          // console.log(htmlTagsByCat.scripting.includes(tag));
          // console.log(htmlTagsByCat.demarcatingEdits.includes(tag));
          // console.log(htmlTagsByCat.tableContent.includes(tag));
          // console.log(htmlTagsByCat.forms.includes(tag));
          // console.log(htmlTagsByCat.interactiveElements.includes(tag));
          // console.log(htmlTagsByCat.webComponents.includes(tag));
    //     }
    //   });
      // console.log(index);

    console.log(fileByLine);

    const htmlRegex = /<[^>]+>/g;
    const htmlMatch = data.match(htmlRegex);

    // Write transformed content to output file
    await Bun.write(outputFile, fileByLine);
    // await Bun.write(outputFile, transformed);
    console.log(`Transformed HTML saved to ${outputFile}`);
  } catch (err) {
    console.error("Error:", err);
  }
}

// Example usage
// transformHTML("exampleToDo.html", "output.html");
// transformHTML('input.html', 'output.html');
// export default "native";