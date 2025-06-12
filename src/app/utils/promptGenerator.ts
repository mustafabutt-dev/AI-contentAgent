export const promptGenerator = async (formData:FormData, product)=>{

    const prompt = `Act as a technical content writer. Before creating content, make sure to include a link to the product name whenever it appears in the content. Additionally, use plenty of transition words to improve the flow. Please replace any naked links with relevant words or phrases as anchor text whenever they appear in the content. The headings should use "##" without any numbering to keep the structure clean and straightforward.
    Write a detailed blog post titled \'${formData.get("title")}\' that demonstrates how to \'${formData.get("title")}\' using \'[${product.value}](${product.ProductURL})\'.
    The primary keyword is \'${formData.get("primaryKeyword")}\' with secondary keywords: \'${formData.get("secondaryKeywords")}\'.
    The blog should thoroughly explain how to \'${formData.get("primaryKeyword")}\', cover common use cases, and discuss why it's useful. Additionally, highlight the benefits of using \'[${product.value}](${product.ProductURL})\' to perform this conversion programmatically.
    The target audience is \'${product.ProgrammingLanguage}\' developers. The blog post should include clear \'${product.ProgrammingLanguage}\' code snippets and be written in simple, concise language using short sentences in active voice for easy readability.
    The blog post should include the following sections:
    1. Overview:
    Under the Overview heading, start with a 120 words long engaging introduction about the importance of \'${formData.get("title")}\'. Discuss the role of \'[${product.value}](${product.ProductURL})\' across various industries and ensure to use small sentences in active voice. Also, mention the product name with URL like this \'[${product.value}](${product.ProductURL})\'.\n
    2. Library Installation:
    Provide a quick 2-3 line installation instructions for \'[${product.value}](${product.ProductURL})\'. Include the download URL \'${product.DownloadURL}\' and the installation command: \'${product.InstallCommand}\' .Highlight the features that make \'[${product.value}](${product.ProductURL})\' is ideal to \'${formData.get("primaryKeyword")}\', such as ease of integration, flexibility, and advanced customization options.\n
    3. Code Snippet with a Step-by-Step Guide:
    Write a brief introductory statement encouraging readers to follow the steps below to \'${formData.get("primaryKeyword")}\' using \'[${product.value}](${product.ProductURL})\'. Then, list the steps in a numbered format, mentioning relevant classes and methods from \'[${product.value}](${product.ProductURL})\'. Finally, provide a \'${product.ProgrammingLanguage}\' code snippet based on these steps and this is important. \n
    4. Conclusion
    Summarize the key points about \'${formData.get("primaryKeyword")}\'. Include a call to action that encourages readers to explore \'[${product.value}](${product.ProductURL})\' for their needs. Keep the conclusion under 100 words.  Also, include the primary keyword: \'${formData.get("primaryKeyword")}\' in this section\n
    5. Meta Title
    Generate a compelling meta title for a blog post titled \'${formData.get("primaryKeyword")}\'. The title should be concise 40-60 characters long and not more than 60 characters, include the keyword \'${formData.get("primaryKeyword")}\'.\n
    6. Meta Description:
    Write a concise and engaging meta description for a blog post titled \'${formData.get("primaryKeyword")}\'. Summarize the content of the blog post, include the primary keyword \'${formData.get("primaryKeyword")}\', and ensure it does not exceed 160 characters. Encourage users to click through to learn more.\n
    7. Short Summary:
    Write a short upto 160 characters long, engaging summary for the blog post \'${formData.get("primaryKeyword")}\'. Clearly state what readers will learn, including the how-to guide with \'${product.value}\' code examples. Encourage users to click through to learn more.\n
    8. Tags:
    Generate a comma-separated list of SEO-related tags for the keyword \'${formData.get("primaryKeyword")}\'. The tags should be relevant to the topic, reflect common search terms, must contain \'${formData.get("secondaryKeywords")}\' keywords and be optimized for search engines. Include a mix of short and long-tail keywords to target both specific niches and broader audiences. Aim for 4-6 high-quality tags that will improve search visibility.\n
    9. Get a Free License
    Write a persuasive paragraph encouraging readers to visit the following link: \'${product.license}\' to obtain a free trial for Aspose products. Emphasize how easy it is to get the license and its benefits for developers or software testers exploring \'[${product.value}](${product.ProductURL})\'.\n
    10. Try Online
    Introduce an online tool available at \'${formData.get("onlineTool")}\' in 100 words. Mention that it's free, easy to use, and capable of quickly \'${formData.get("primaryKeyword")}\' with high accuracy. Include a link to the tool.\n
    11. Public Resources
    Write a brief statement emphasizing the value of additional resources, such as documentation or community forums. Mention that these resources can help readers further enhance their understanding or skills beyond the blog content.\n
    12. Explore
    Please get any two latest ${product.ProgrammingLanguage}-based titles of the articles with URLs from ${product.BlogsURL}, write in the format [title](url) and return in bullets.\n
    13. Frequently Asked Questions – FAQs
    Generate three frequently asked questions along with answers for a technical blog post titled \'${formData.get("title")}\' using \'[${product.value}](${product.ProductURL})\'. The questions should be widely searched on the internet. Keep the answers between 180-220 characters, concise, and technical yet easy to understand. Make the questions bold and answers of the quations should be printed after skipping two new lines. Also do not make questions bullets or numbered.\n
    ${formData.get("additionalInstructions")}
`
    return prompt;
}

export const promptGeneratorForRecommendation = async (list, product)=>{

    const prompt = `I have the following list of existing article titles focused on ${product.value} in various languages. \n
    ${list.join('\n')} \n
    Now, based on the features officially supported by ${product.value} (see docs: ${product.DocumentationURL} and API ref: ${product.APIReferenceURL}, please generate 5 new, unique article titles that:

    Do not reuse or overlap with any of the existing titles above

    Are strictly based on what ${product.value} can do (no unsupported suggestions)

    Include programmatic use cases in Java, C#, Python, or C++

    Highlight features.

    Are engaging and optimized for a developer audience, ideally implying the inclusion of code snippets.

    Please make sure every suggested topic aligns 100% with actual ${product.value} capabilities.\n
    Do not include any introductory or explanatory text. Return only the content.
`
    return prompt;
}
