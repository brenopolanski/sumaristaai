export const parseSection = (section: string): { title: string, points: string[] } => {
  const [title, ...content] = section.split('\n');

  const cleanTitle = title.startsWith("#") ? title.substring(1).trim() : title.trim();

  const points: String[] = [];

  let currentPoint = "";

  content.forEach((line: string) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith("- ")) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = trimmedLine;
    } else if (!trimmedLine) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = "";
    } else {
      currentPoint += " " + trimmedLine;
    }
  });

  if (currentPoint) points.push(currentPoint.trim());

  return {
    title: cleanTitle, points: points.filter((point) =>
      point && !point.startsWith("#") && !point.startsWith("[Choose")) as string[]
  };
};

export function parsePoint(point: string) {
  const isNumbered = /^\d+\./.test(point);
  const isMainPoint = /^•/.test(point);

  // Replace the Unicode property escape with a simpler emoji detection
  const emojiRegex = /[\u1F300-\u1F9FF]|[\u2600-\u26FF]/u;
  const hasEmoji = emojiRegex.test(point);
  const isEmpty = !point.trim();

  return { isNumbered, isMainPoint, hasEmoji, isEmpty };
}

export function parseEmojiPoint(content: string) {
  const cleanContent = content.replace(/^[-]\s*/, '').trim();

  const matches = cleanContent.match(/^(\p{Emoji}+)(.+)$/u);

  if (!matches) return null;

  const [_, emoji, text] = matches;

  return { emoji: emoji.trim(), text: text.trim() };
}

export function formatText(text: string) {
  // Regex para encontrar palavras entre ** e substituí-las por <strong>
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}