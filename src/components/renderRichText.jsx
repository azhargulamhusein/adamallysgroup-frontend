export const renderRichText = (blocks) => {
  return blocks?.map((block, index) => {
    const { type, level, children } = block;

    // Render based on block type
    switch (type) {
      case "heading":
        const HeadingTag = `h${level}`; // Dynamically determine heading level
        if (HeadingTag === "h2") {
          return (
            <HeadingTag key={index} className="font_franklin mb-5">
              {children?.map((child) => child.text)}
            </HeadingTag>
          );
        } else {
          return (
            <h3 key={index} className="!font-xl mb-5 !text-[#3E3E3E]">
              {children?.map((child) => child.text)}
            </h3>
          );
        }


      case "paragraph":
        return (
          <p key={index} className="font-light !text-[#3E3E3E]">
            {children.map((child) => child.text)}
          </p>
        );

      default:
        return null; // Handle other block types as needed
    }
  });
};
