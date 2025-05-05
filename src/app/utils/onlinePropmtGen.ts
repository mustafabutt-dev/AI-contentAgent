export const onlinePromptGen = async (formData:FormData, product)=>{

    const cleanedTitle = formData.get("title")
    ?.toString()
    .replace(/\bonline\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();

    const prompt = `Act as a technical content writer. Before creating content, make sure to include a link to the product name whenever it appears in the content. Additionally, use plenty of transition words to improve the flow. Please replace any naked links with relevant words or phrases as anchor text whenever they appear in the content. The headings should use "##" without any numbering to keep the structure clean and straightforward. \n 
    Write a high-quality, human-like blog post (approx. 800 words) for the title \'${formData.get("title")}\'. Ensure the content is SEO-friendly, written in a natural tone, and provides value to both developers and non-technical users. \n
    The blog should focus on the \'[${formData.get("title")}](${formData.get("onlineTool")})\', and subtly highlight that it is powered by \'[${product.value}](${product.ProductURL})\'. Naturally incorporate the primary keyword: \'${formData.get("primaryKeyword")}\'. \n 
    Use the following secondary keywords appropriately throughout the content: \'${formData.get("secondaryKeywords")}\' \n
    The blog post should include the following sections:
    1. Overview:
    Under the Overview heading, start with a 120 words long engaging introduction about the importance of \'${formData.get("title")}\'. Discuss the role of \'[${product.value}](${product.ProductURL})\' across various industries and ensure to use small sentences in active voice. Also, mention the product name with URL like this \'[${product.value}](${product.ProductURL})\'.\n
    2. Prominent Features
    This section should highlight the salient features offered by this \'[tool](${formData.get("onlineTool")})\'. Use bullets for elaboration.
    3. Usage with a Step-by-Step Guide
    This section should demontrate hwo to use this \'[tool](${formData.get("onlineTool")})\'. It should be a step-by-step guide.  
    4. How to Implement Programmatically
    Include a 80-word section under the heading, showing that Aspose tools can help  \'${cleanedTitle}\ Programmatically'. Also add a couple relevant blog posts. Also add a couple articles with URLs from ${product.BlogsURL}, write in the format [title](url) and return in bullets.
    5. Get a Free License
    Write a persuasive paragraph encouraging readers to visit the following link: \'${product.license}\' to obtain a free trial for Aspose products. Emphasize how easy it is to get the license and its benefits for developers or software testers exploring \'[${product.value}](${product.ProductURL})\'.\n
    6. Public Resources
    Write a brief statement emphasizing the value of additional resources, such as documentation or community forums. Mention that these resources can help readers further enhance their understanding or skills beyond the blog content.\n
    7. Explore
    Please get any two latest ${product.ProgrammingLanguage}-based titles of the articles with URLs from ${product.BlogsURL}, write in the format [title](url) and return in bullets.\n
    8. Meta Title
    Generate a compelling meta title for a blog post titled \'${formData.get("primaryKeyword")}\'. The title should be concise 40-60 characters long and not more than 60 characters, include the keyword \'${formData.get("primaryKeyword")}\'.\n
    9. Meta Description:
    Write a concise and engaging meta description for a blog post titled \'${formData.get("primaryKeyword")}\'. Summarize the content of the blog post, include the primary keyword \'${formData.get("primaryKeyword")}\', and ensure it does not exceed 160 characters. Encourage users to click through to learn more.\n
    10. Short Summary:
    Write a short upto 160 characters long, engaging summary for the blog post \'${formData.get("primaryKeyword")}\'. Clearly state what readers will learn, including the how-to guide with \'${product.value}\' code examples. Encourage users to click through to learn more.\n
    11. Tags:
    Generate a comma-separated list of SEO-related tags for the keyword \'${formData.get("primaryKeyword")}\'. The tags should be relevant to the topic, reflect common search terms, must contain \'${formData.get("secondaryKeywords")}\' keywords and be optimized for search engines. Include a mix of short and long-tail keywords to target both specific niches and broader audiences. Aim for 4-6 high-quality tags that will improve search visibility.\n
    12. Conclusion
    Summarize the key points about \'${formData.get("primaryKeyword")}\'. Include a call to action that encourages readers to explore \'[${product.value}](${product.ProductURL})\' for their needs. Keep the conclusion under 100 words.  Also, include the primary keyword: \'${formData.get("primaryKeyword")}\' in this section\n
    13. Frequently Asked Questions – FAQs
    Generate three frequently asked questions along with answers for a technical blog post titled \'${formData.get("title")}\' using \'[${product.value}](${product.ProductURL})\'. The questions should be widely searched on the internet. Keep the answers between 180-220 characters, concise, and technical yet easy to understand. Make the questions bold and answers of the quations should be printed after skipping two new lines. Also do not make questions bullets or numbered.\n
    ${formData.get("additionalInstructions")}
    `

    return prompt;
}
