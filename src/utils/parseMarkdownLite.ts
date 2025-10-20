type ParsedMarkdown = {
  html: string;
  links: { text: string; url: string }[];
};

export function parseMarkdownLite(text: string): ParsedMarkdown {
  let links: { text: string; url: string }[] = [];

  // Extract links FIRST and store them in array
  text = text.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
    (_, textPart, url) => {
      links.push({ text: textPart, url });
      return "";
      // return `<a href="${url}" target="_blank">${textPart}</a>`;
    },
  );

  // Bold (**text**)
  text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Handle unordered lists (lines starting with - or *)
  //   let html = text
  //     .split("\n")
  //     .map((line) => {
  //       if (line.startsWith("- ") || line.startsWith("* ")) {
  //         return `<li>${line.slice(2)}</li>`;
  //       }
  //       return line;
  //     })
  //     .join("\n");

  // Wrap consecutive <li> items into <ul>
  //   html = html.replace(/(?:<li>.*<\/li>\n?)+/g, (match) => {
  //     const items = match.trim().split("\n").join("");
  //     return `<ul>${items}</ul>`;
  //   });

  // Convert \n to <br />
  let html = text.replace(/\n/g, "<br />");

  // Remove <br /> from start and end only
  html = html.replace(/^((<br \/>\s*)+)/, ""); // Remove from start
  html = html.replace(/((<br \/>\s*)+)$/, ""); // Remove from end

  return { html, links };
}
