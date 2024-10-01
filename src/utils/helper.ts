export const formatResponse = (response: string) => {
  if (!response) {
    return "";
  }

  // Replace double asterisks with <strong> for bold
  const boldRegex = /\*\*(.*?)\*\*/g;
  const italicRegex = /\*(.*?)\*/g;

  // Replace new line markers (if using | for new lines)
  const newLineRegex = /\n/g; // If using \n for new lines
  // const newLineRegex = /\|/g; // If using | for new lines

  // First replace bold text
  let formattedResponse = response.replace(boldRegex, "<strong>$1</strong>");

  // Then replace italic text
  formattedResponse = formattedResponse.replace(italicRegex, "<em>$1</em>");

  // Finally replace new line markers with <br />
  formattedResponse = formattedResponse.replace(newLineRegex, "<br />");

  return formattedResponse;
};
