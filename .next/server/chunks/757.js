"use strict";exports.id=757,exports.ids=[757],exports.modules={29574:(e,s,t)=>{t.d(s,{B:()=>r,j:()=>a}),t(15424);var o=t(46242),a=(0,o.$)("bd26dc79d397f9193f3c356a47ab87f57072d3ef"),r=(0,o.$)("ddc9f5b14f2aa100e488a7cda2727190bebb6350")},78181:(e,s,t)=>{t.d(s,{Z:()=>p});var o=t(10326),a=t(77626),r=t.n(a),n=t(17577);let p=({name:e,options:s,label:t,onChange:a})=>{let[p,i]=(0,n.useState)("");return(0,o.jsxs)("div",{className:"jsx-1272e39a03fc3df6 dropdown",children:[t&&o.jsx("label",{className:"jsx-1272e39a03fc3df6",children:t}),(0,o.jsxs)("select",{required:!0,name:e,value:p,onChange:e=>{let s=e.target.value;i(s),a&&a(s)},className:"jsx-1272e39a03fc3df6 w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500",children:[o.jsx("option",{value:"",disabled:!0,className:"jsx-1272e39a03fc3df6",children:"---"}),s.map((e,s)=>o.jsx("option",{value:e.value,className:"jsx-1272e39a03fc3df6",children:e.value},s))]}),o.jsx(r(),{id:"1272e39a03fc3df6",children:".dropdown.jsx-1272e39a03fc3df6{margin-bottom:16px}label.jsx-1272e39a03fc3df6{margin-right:8px}select.jsx-1272e39a03fc3df6{padding:8px;font-size:16px}"})]})}},1223:(e,s,t)=>{t.r(s),t.d(s,{InvokeOpenAI:()=>B,makeServerCall:()=>J});var o=t(27745);t(26461);var a=t(57147),r=t(71017),n=t.n(r),p=t(67590);let i=async(e,s,t)=>{let o=await (0,p.getDirectoryName)(t);await (0,p.checkIfExists)(n().join(`${process.cwd()}/public`,"blog-posts"))||await a.promises.mkdir(n().join(`${process.cwd()}/public`,"blog-posts")),await (0,p.checkIfExists)(n().join(`${process.cwd()}/public/blog-posts`,s))||await a.promises.mkdir(n().join(`${process.cwd()}/public/blog-posts`,s)),await (0,p.checkIfExists)(n().join(`${process.cwd()}/public/blog-posts/${s}`,o))||await a.promises.mkdir(n().join(`${process.cwd()}/public/blog-posts/${s}`,o)),await (0,p.checkIfExists)(n().join(`${process.cwd()}/public/blog-posts/${s}/${o}`,"images"))||await a.promises.mkdir(n().join(`${process.cwd()}/public/blog-posts/${s}/${o}`,"images"));let r=`${process.cwd()}/public/blog-posts/${s}/${o}/index.md`;try{console.log("now writting File"),await a.promises.writeFile(r,e),console.log("File written successfully")}catch(e){console.error("Error:",e)}};var c=t(74739);let l=async(e,s)=>`Act as a technical content writer. Before creating content, make sure to include a link to the product name whenever it appears in the content. Additionally, use plenty of transition words to improve the flow. Please replace any naked links with relevant words or phrases as anchor text whenever they appear in the content. The headings should use "##" without any numbering to keep the structure clean and straightforward.
    Write a detailed blog post titled '${e.get("title")}' that demonstrates how to '${e.get("title")}' using '[${s.value}](${s.ProductURL})'.
    The primary keyword is '${e.get("primaryKeyword")}' with secondary keywords: '${e.get("secondaryKeywords")}'.
    The blog should thoroughly explain how to '${e.get("primaryKeyword")}', cover common use cases, and discuss why it's useful. Additionally, highlight the benefits of using '[${s.value}](${s.ProductURL})' to perform this conversion programmatically.
    The target audience is '${s.ProgrammingLanguage}' developers. The blog post should include clear '${s.ProgrammingLanguage}' code snippets and be written in simple, concise language using short sentences in active voice for easy readability.
    The blog post should include the following sections:
    1. Overview:
    Under the Overview heading, start with a 120 words long engaging introduction about the importance of '${e.get("title")}'. Discuss the role of '[${s.value}](${s.ProductURL})' across various industries and ensure to use small sentences in active voice. Also, mention the product name with URL like this '[${s.value}](${s.ProductURL})'.

    2. Library Installation:
    Provide a quick 2-3 line installation instructions for '[${s.value}](${s.ProductURL})'. Include the download URL '${s.DownloadURL}' and the installation command: '${s.InstallCommand}' .Highlight the features that make '[${s.value}](${s.ProductURL})' is ideal to '${e.get("primaryKeyword")}', such as ease of integration, flexibility, and advanced customization options.

    3. Code Snippet with a Step-by-Step Guide:
    Write a brief introductory statement encouraging readers to follow the steps below to '${e.get("primaryKeyword")}' using '[${s.value}](${s.ProductURL})'. Then, list the steps in a numbered format, mentioning relevant classes and methods from '[${s.value}](${s.ProductURL})'. Finally, provide a '${s.ProgrammingLanguage}' code snippet based on these steps and this is important. 

    4. Conclusion
    Summarize the key points about '${e.get("primaryKeyword")}'. Include a call to action that encourages readers to explore '[${s.value}](${s.ProductURL})' for their needs. Keep the conclusion under 100 words.  Also, include the primary keyword: '${e.get("primaryKeyword")}' in this section

    5. Meta Title
    Generate a compelling meta title for a blog post titled '${e.get("primaryKeyword")}'. The title should be concise 40-60 characters long and not more than 60 characters, include the keyword '${e.get("primaryKeyword")}'.

    6. Meta Description:
    Write a concise and engaging meta description for a blog post titled '${e.get("primaryKeyword")}'. Summarize the content of the blog post, include the primary keyword '${e.get("primaryKeyword")}', and ensure it does not exceed 160 characters. Encourage users to click through to learn more.

    7. Short Summary:
    Write a short upto 160 characters long, engaging summary for the blog post '${e.get("primaryKeyword")}'. Clearly state what readers will learn, including the how-to guide with '${s.value}' code examples. Encourage users to click through to learn more.

    8. Tags:
    Generate a comma-separated list of SEO-related tags for the keyword '${e.get("primaryKeyword")}'. The tags should be relevant to the topic, reflect common search terms, must contain '${e.get("secondaryKeywords")}' keywords and be optimized for search engines. Include a mix of short and long-tail keywords to target both specific niches and broader audiences. Aim for 4-6 high-quality tags that will improve search visibility.

    9. Get a Free License
    Write a persuasive paragraph encouraging readers to visit the following link: '${s.license}' to obtain a free trial for Aspose products. Emphasize how easy it is to get the license and its benefits for developers or software testers exploring '[${s.value}](${s.ProductURL})'.

    10. Try Online
    Introduce an online tool available at '${e.get("onlineTool")}' in 100 words. Mention that it's free, easy to use, and capable of quickly '${e.get("primaryKeyword")}' with high accuracy. Include a link to the tool.

    11. Public Resources
    Write a brief statement emphasizing the value of additional resources, such as documentation or community forums. Mention that these resources can help readers further enhance their understanding or skills beyond the blog content.

    12. Explore
    Please get any two latest ${s.ProgrammingLanguage}-based titles of the articles with URLs from ${s.BlogsURL}, write in the format [title](url) and return in bullets.

    13. Frequently Asked Questions – FAQs
    Generate three frequently asked questions along with answers for a technical blog post titled '${e.get("title")}' using '[${s.value}](${s.ProductURL})'. The questions should be widely searched on the internet. Keep the answers between 180-220 characters, concise, and technical yet easy to understand. Make the questions bold and answers of the quations should be printed after skipping two new lines. Also do not make questions bullets or numbered.

    ${e.get("additionalInstructions")}
`,m=async(e,s)=>{let t=e.get("title")?.toString().replace(/\bonline\b/gi,"").replace(/\s{2,}/g," ").trim();return`Act as a technical content writer. Before creating content, make sure to include a link to the product name whenever it appears in the content. Additionally, use plenty of transition words to improve the flow. Please replace any naked links with relevant words or phrases as anchor text whenever they appear in the content. The headings should use "##" without any numbering to keep the structure clean and straightforward. 
 
    Write a high-quality, human-like blog post (approx. 800 words) for the title '${e.get("title")}'. Ensure the content is SEO-friendly, written in a natural tone, and provides value to both developers and non-technical users. 

    The blog should focus on the '[${e.get("title")}](${e.get("onlineTool")})', and subtly highlight that it is powered by '[${s.value}](${s.ProductURL})'. Naturally incorporate the primary keyword: '${e.get("primaryKeyword")}'. 
 
    Use the following secondary keywords appropriately throughout the content: '${e.get("secondaryKeywords")}' 

    The blog post should include the following sections:
    1. Overview:
    Under the Overview heading, start with a 120 words long engaging introduction about the importance of '${e.get("title")}'. Discuss the role of '[${s.value}](${s.ProductURL})' across various industries and ensure to use small sentences in active voice. Also, mention the product name with URL like this '[${s.value}](${s.ProductURL})'.

    2. Prominent Features
    This section should highlight the salient features offered by this '[tool](${e.get("onlineTool")})'. Use bullets for elaboration.
    3. Usage with a Step-by-Step Guide
    This section should demontrate hwo to use this '[tool](${e.get("onlineTool")})'. It should be a step-by-step guide.  
    4. How to Implement Programmatically
    Include a 80-word section under the heading, showing that Aspose tools can help  '${t} Programmatically'. Also add a couple relevant blog posts. Also add a couple articles with URLs from ${s.BlogsURL}, write in the format [title](url) and return in bullets.
    5. Get a Free License
    Write a persuasive paragraph encouraging readers to visit the following link: '${s.license}' to obtain a free trial for Aspose products. Emphasize how easy it is to get the license and its benefits for developers or software testers exploring '[${s.value}](${s.ProductURL})'.

    6. Public Resources
    Write a brief statement emphasizing the value of additional resources, such as documentation or community forums. Mention that these resources can help readers further enhance their understanding or skills beyond the blog content.

    7. Explore
    Please get any two latest ${s.ProgrammingLanguage}-based titles of the articles with URLs from ${s.BlogsURL}, write in the format [title](url) and return in bullets.

    8. Meta Title
    Generate a compelling meta title for a blog post titled '${e.get("primaryKeyword")}'. The title should be concise 40-60 characters long and not more than 60 characters, include the keyword '${e.get("primaryKeyword")}'.

    9. Meta Description:
    Write a concise and engaging meta description for a blog post titled '${e.get("primaryKeyword")}'. Summarize the content of the blog post, include the primary keyword '${e.get("primaryKeyword")}', and ensure it does not exceed 160 characters. Encourage users to click through to learn more.

    10. Short Summary:
    Write a short upto 160 characters long, engaging summary for the blog post '${e.get("primaryKeyword")}'. Clearly state what readers will learn, including the how-to guide with '${s.value}' code examples. Encourage users to click through to learn more.

    11. Tags:
    Generate a comma-separated list of SEO-related tags for the keyword '${e.get("primaryKeyword")}'. The tags should be relevant to the topic, reflect common search terms, must contain '${e.get("secondaryKeywords")}' keywords and be optimized for search engines. Include a mix of short and long-tail keywords to target both specific niches and broader audiences. Aim for 4-6 high-quality tags that will improve search visibility.

    12. Conclusion
    Summarize the key points about '${e.get("primaryKeyword")}'. Include a call to action that encourages readers to explore '[${s.value}](${s.ProductURL})' for their needs. Keep the conclusion under 100 words.  Also, include the primary keyword: '${e.get("primaryKeyword")}' in this section

    13. Frequently Asked Questions – FAQs
    Generate three frequently asked questions along with answers for a technical blog post titled '${e.get("title")}' using '[${s.value}](${s.ProductURL})'. The questions should be widely searched on the internet. Keep the answers between 180-220 characters, concise, and technical yet easy to understand. Make the questions bold and answers of the quations should be printed after skipping two new lines. Also do not make questions bullets or numbered.

    ${e.get("additionalInstructions")}
    `},d=async(e,s,t)=>{let o=await (0,p.normalizeHeadings)(t.toString()),a=await (0,p.parseInputToObjects)(o);console.log("here is the output -- start"),console.log(a),console.log("here is the output  -- end");let r=await (0,p.titleCase)(e.get("title")),n=await (0,p.filterSections)(a,"Meta Title"),i=await (0,p.filterSections)(a,"Meta Description"),c=await (0,p.filterSections)(a,"Short Summary"),l=await (0,p.makeBlogURL)(e.get("title"),s.urlPrefix),m=await (0,p.filterSections)(a,"Overview"),d=await (0,p.filterSections)(a,"Library Installation"),u=await (0,p.filterSections)(a,"Code Snippet with a Step-by-Step Guide"),g=await (0,p.filterSections)(a,"Conclusion"),h=await (0,p.filterSections)(a,"Get a Free License"),f=await (0,p.filterSections)(a,"Try Online"),y=await (0,p.filterSections)(a,"Public Resources"),w=await (0,p.filterSections)(a,"Explore"),L=await (0,p.filterSections)(a,"Frequently Asked Questions – FAQs"),R=await (0,p.getDate)(),U=await e.get("secondaryKeywords").split(",").map(e=>e.trim());return`---
title: ${r}
seoTitle: ${n.content}
description: ${i.content}
date: ${R}
draft: false
url: ${l}
author: "${e.get("authorName")}"
summary: ${c.content}
tags: ${JSON.stringify(U)}
categories: ["${s.Category}"]
---

{{< figure align=center src="images/${await (0,p.insertDashes)(r)+".png"}" alt="${r}" >}}

## Overview

${m.content}


## Library Installation

${d?.content}

## Code Snippet with a Step-by-Step Guide

${u?.content}

## Get a Free License

${h.content} ${e.get("onlineTool")?`

## Try Online

${f?.content}`:""}

## Conclusion

${g.content}

## Public Resources

${y?.content}

- [Developer’s guide](${s.DocumentationURL})
- [Free online applications](${s.FreeAppsURL})
- [API reference](${s.APIReferenceURL})
- [How-to guides and articles](${s.BlogsURL})

## Frequently Asked Questions – FAQs


${L?.content}

## Explore

${w?.content}
`},u=async(e,s,t)=>{let o=await (0,p.normalizeHeadings)(t.toString()),a=await (0,p.parseInputToObjects)(o),r=await (0,p.titleCase)(e.get("title")),n=await (0,p.filterSections)(a,"Meta Title"),i=await (0,p.filterSections)(a,"Meta Description"),c=await (0,p.filterSections)(a,"Short Summary"),l=await (0,p.makeBlogURL)(e.get("title"),s.urlPrefix),m=await (0,p.filterSections)(a,"Overview"),d=await (0,p.filterSections)(a,"Prominent Features"),u=await (0,p.filterSections)(a,"Usage with a Step-by-Step Guide"),g=await (0,p.filterSections)(a,"How to Implement Programmatically"),h=await (0,p.filterSections)(a,"Conclusion"),f=await (0,p.filterSections)(a,"Get a Free License");await (0,p.filterSections)(a,"Try Online");let y=await (0,p.filterSections)(a,"Public Resources"),w=await (0,p.filterSections)(a,"Explore"),L=await (0,p.filterSections)(a,"Frequently Asked Questions – FAQs"),R=await (0,p.getDate)(),U=await e.get("secondaryKeywords").split(",").map(e=>e.trim());return`---
title: ${r}
seoTitle: ${n.content}
description: ${i.content}
date: ${R}
draft: false
url: ${l}
author: "${e.get("authorName")}"
summary: ${c.content}
tags: ${JSON.stringify(U)}
categories: ["${s.Category}"]
---

{{< figure align=center src="images/${await (0,p.insertDashes)(r)+".png"}" alt="${r}" >}}

## Overview

${m.content}


## Prominent Features

${d?.content}

## Usage with a Step-by-Step Guide

${u?.content}

## How to Implement Programmatically

${g?.content}

## Get a Free License

${f.content} 

## Conclusion

${h.content}

## Public Resources

${y?.content}

- [Developer’s guide](${s.DocumentationURL})
- [Free online applications](${s.FreeAppsURL})
- [API reference](${s.APIReferenceURL})
- [How-to guides and articles](${s.BlogsURL})

## Frequently Asked Questions – FAQs


${L?.content}

## Explore

${w?.content}
`},g=async(e,s,t)=>{let o=await (0,p.normalizeHeadings)(t.toString()),a=await (0,p.parseInputToObjects)(o),r=await (0,p.titleCase)(e.get("title")),n=await (0,p.filterSections)(a,"Meta Title"),i=await (0,p.filterSections)(a,"Meta Description"),c=await (0,p.filterSections)(a,"Short Summary"),l=await (0,p.makeBlogURL)(e.get("title"),s.urlPrefix),m=await (0,p.filterSections)(a,"Overview"),d=await (0,p.filterSections)(a,"Library Installation"),u=await (0,p.filterSections)(a,"Code Snippet with a Step-by-Step Guide"),g=await (0,p.filterSections)(a,"Conclusion"),h=await (0,p.filterSections)(a,"Get a Free License"),f=await (0,p.filterSections)(a,"Try Online"),y=await (0,p.filterSections)(a,"Public Resources"),w=await (0,p.filterSections)(a,"Explore"),L=await (0,p.filterSections)(a,"Frequently Asked Questions – FAQs"),R=await (0,p.getDate)(),U=await e.get("secondaryKeywords").split(",").map(e=>e.trim());return`---
title: ${r}
seoTitle: ${n.content}
description: ${i.content}
date: ${R}
draft: false
url: ${l}
author: "${e.get("authorName")}"
summary: ${c.content}
tags: ${JSON.stringify(U)}
categories: ["${s.Category}"]
---

{{< figure align=center src="images/${await (0,p.insertDashes)(r)+".png"}" alt="${r}" >}}
 
## Overview

${m.content}
 
The following points will be covered in this article:

- [Library Installation](#${await (0,p.insertDashes)("Library Installation")})
- [Code Snippet with a Step-by-Step Guide](#${await (0,p.insertDashes)("Code Snippet with a Step-by-Step Guide")}) ${e.get("onlineTool")?`
- [Try Online](#${await (0,p.insertDashes)("Try Online")})`:""}
- [Useful Resources](#${await (0,p.insertDashes)("Useful Resources")})

## Library Installation {#${await (0,p.insertDashes)("Library Installation")}}

${d.content}

## Code Snippet with a Step-by-Step Guide {#${await (0,p.insertDashes)("Code Snippet with a Step-by-Step Guide")}}

${u.content}

## Get a Free License

${h.content} ${e.get("onlineTool")?`

## Try Online {#${await (0,p.insertDashes)("Try Online")}}

${f.content}`:""}

## Final Thoughts

${g.content}

## Useful Resources {#${await (0,p.insertDashes)("Useful Resources")}}

${y.content}

- [Developer’s guide](${s.DocumentationURL})
- [Free online applications](${s.FreeAppsURL})
- [API reference](${s.APIReferenceURL})
- [How-to guides and articles](${s.BlogsURL})

## Frequently Asked Questions – FAQs


${L.content}

## Discover More

${w.content}
`},h=async(e,s,t)=>{let o=await (0,p.normalizeHeadings)(t.toString()),a=await (0,p.parseInputToObjects)(o),r=await (0,p.titleCase)(e.get("title")),n=await (0,p.filterSections)(a,"Meta Title"),i=await (0,p.filterSections)(a,"Meta Description"),c=await (0,p.filterSections)(a,"Short Summary"),l=await (0,p.makeBlogURL)(e.get("title"),s.urlPrefix),m=await (0,p.filterSections)(a,"Overview"),d=await (0,p.filterSections)(a,"Prominent Features"),u=await (0,p.filterSections)(a,"Usage with a Step-by-Step Guide"),g=await (0,p.filterSections)(a,"How to Implement Programmatically"),h=await (0,p.filterSections)(a,"Conclusion"),f=await (0,p.filterSections)(a,"Get a Free License");await (0,p.filterSections)(a,"Try Online");let y=await (0,p.filterSections)(a,"Public Resources"),w=await (0,p.filterSections)(a,"Explore"),L=await (0,p.filterSections)(a,"Frequently Asked Questions – FAQs"),R=await (0,p.getDate)(),U=await e.get("secondaryKeywords").split(",").map(e=>e.trim());return`---
title: ${r}
seoTitle: ${n.content}
description: ${i.content}
date: ${R}
draft: false
url: ${l}
author: "${e.get("authorName")}"
summary: ${c.content}
tags: ${JSON.stringify(U)}
categories: ["${s.Category}"]
---

{{< figure align=center src="images/${await (0,p.insertDashes)(r)+".png"}" alt="${r}" >}}

## Overview

${m.content}

The following sections will be covered in this blog post:

- [Prominent Feature](#${await (0,p.insertDashes)("Prominent Feature")})
- [Usage with a Step-by-Step Guide](#${await (0,p.insertDashes)("Usage with a Step-by-Step Guide")})
- [How to Implement Programmatically](#${await (0,p.insertDashes)("How to Implement Programmatically")})
- [Useful Resources](#${await (0,p.insertDashes)("Useful Resources")})

## Prominent Features {#${await (0,p.insertDashes)("Prominent Feature")}}

${d?.content}

## Usage with a Step-by-Step Guide {#${await (0,p.insertDashes)("Usage with a Step-by-Step Guide")}}

${u?.content}

## How to Implement Programmatically {#${await (0,p.insertDashes)("How to Implement Programmatically")}}

${g?.content}

## Get a Free License

${f.content} 

## Conclusion

${h.content}

## Public Resources {#${await (0,p.insertDashes)("Useful Resources")}}

${y?.content}

- [Developer’s guide](${s.DocumentationURL})
- [Free online applications](${s.FreeAppsURL})
- [API reference](${s.APIReferenceURL})
- [How-to guides and articles](${s.BlogsURL})

## Frequently Asked Questions – FAQs


${L?.content}

## Explore

${w?.content}
`},f=JSON.parse('[{"value":"Aspose.Imaging for .NET","Category":"Aspose.Imaging Product Family","ProgrammingLanguage":"C#","ProductURL":"https://products.aspose.com/imaging/net/","DownloadURL":"https://releases.aspose.com/imaging/net/","ExternalDownloadURL":"https://www.nuget.org/packages/Aspose.Imaging/","DocumentationURL":"https://docs.aspose.com/imaging/net/","BlogsURL":"https://blog.aspose.com/categories/aspose.imaging-product-family/","APIReferenceURL":"https://reference.aspose.com/imaging/net/","FreeAppsURL":"https://products.aspose.app/imaging","ForumsURL":"https://forum.aspose.com/c/imaging/14","InstallCommand":"\\n\\nInstall-Package Aspose.Imaging\\n\\n","urlPrefix":"imaging","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.Email for .NET","Category":"Aspose.Email Product Family","ProgrammingLanguage":"C#","ProductURL":"https://products.aspose.com/email/net/","DownloadURL":"https://releases.aspose.com/email/net/","ExternalDownloadURL":"https://www.nuget.org/packages/Aspose.Email/","DocumentationURL":"https://docs.aspose.com/email/net/","BlogsURL":"https://blog.aspose.com/categories/aspose.email-product-family/","APIReferenceURL":"https://reference.aspose.com/email/net/","FreeAppsURL":"https://products.aspose.app/email","ForumsURL":"https://forum.aspose.com/c/email/14","InstallCommand":"\\n\\nInstall-Package Aspose.Email\\n\\n","urlPrefix":"email","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.Email for Java","Category":"Aspose.Email Product Family","ProgrammingLanguage":"Java","ProductURL":"https://products.aspose.com/email/java/","DownloadURL":"https://releases.aspose.com/email/java/","ExternalDownloadURL":"https://github.com/aspose-email/Aspose.Email-for-Java","DocumentationURL":"https://docs.aspose.com/email/java/","BlogsURL":"https://blog.aspose.com/categories/aspose.email-product-family/","APIReferenceURL":"https://reference.aspose.com/email/java/","FreeAppsURL":"https://products.aspose.app/email","ForumsURL":"https://forum.aspose.com/c/email/","InstallCommand":"<repository>\\n  <id>AsposeJavaAPI</id>\\n  <name>Aspose Java API</name>\\n  <url>https://repository.aspose.com/repo/</url>\\n</repository>\\n<dependency>\\n  <groupId>com.aspose</groupId>\\n  <artifactId>aspose-email</artifactId>\\n  <version>25.1</version>\\n <classifier>jdk16</classifier>\\n </dependency>","urlPrefix":"email","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.Page for .NET","Category":"Aspose.Page Product Family","ProgrammingLanguage":"C#","ProductURL":"https://products.aspose.com/page/net/","DownloadURL":"https://releases.aspose.com/page/net/","ExternalDownloadURL":"https://www.nuget.org/packages/Aspose.Page/","DocumentationURL":"https://docs.aspose.com/page/net/","BlogsURL":"https://blog.aspose.com/categories/aspose.page-product-family/","APIReferenceURL":"https://reference.aspose.com/page/net/","FreeAppsURL":"https://products.aspose.app/page","ForumsURL":"https://forum.aspose.com/c/page/","InstallCommand":"\\n\\nInstall-Package Aspose.Page\\n\\n","urlPrefix":"page","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.Imaging for Java","Category":"Aspose.Imaging Product Family","ProgrammingLanguage":"Java","ProductURL":"https://products.aspose.com/imaging/java/","DownloadURL":"https://releases.aspose.com/imaging/java/","ExternalDownloadURL":"https://releases.aspose.com/java/repo/com/aspose/aspose-imaging/","DocumentationURL":"https://docs.aspose.com/imaging/java/","BlogsURL":"https://blog.aspose.com/categories/aspose.imaging-product-family/","APIReferenceURL":"https://reference.aspose.com/imaging/java/","FreeAppsURL":"https://products.aspose.app/imaging","ForumsURL":"https://forum.aspose.com/c/imaging/14","InstallCommand":"<repository>\\n  <id>AsposeJavaAPI</id>\\n  <name>Aspose Java API</name>\\n  <url>https://repository.aspose.com/repo/</url>\\n</repository>\\n<dependency>\\n  <groupId>com.aspose</groupId>\\n  <artifactId>aspose-imaging</artifactId>\\n  <version>24.5</version>\\n  <classifier>jdk16</classifier>\\n</dependency>","urlPrefix":"imaging","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.3D for Java","Category":"Aspose.3D Product Family","ProgrammingLanguage":"Java","ProductURL":"https://products.aspose.com/3d/java/","DownloadURL":"https://releases.aspose.com/3d/java/","ExternalDownloadURL":"https://releases.aspose.com/java/repo/com/aspose/aspose-3d/","DocumentationURL":"https://docs.aspose.com/3d/java/","BlogsURL":"https://blog.aspose.com/categories/aspose.3d-product-family/","APIReferenceURL":"https://reference.aspose.com/3d/java/","FreeAppsURL":"https://products.aspose.app/3d","ForumsURL":"https://forum.aspose.com/c/3d/18","InstallCommand":"<repository>\\n  <id>AsposeJavaAPI</id>\\n  <name>Aspose Java API</name>\\n  <url>https://repository.aspose.com/repo/</url>\\n</repository>\\n<dependency>\\n  <groupId>com.aspose</groupId>\\n  <artifactId>aspose-3d</artifactId>\\n  <version>25.1.0</version>\\n</dependency>","urlPrefix":"3d","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.CAD for Java","Category":"Aspose.CAD Product Family","ProgrammingLanguage":"Java","ProductURL":"https://products.aspose.com/cad/java/","DownloadURL":"https://releases.aspose.com/cad/java/","ExternalDownloadURL":"https://github.com/aspose-cad","DocumentationURL":"https://docs.aspose.com/cad/java/","BlogsURL":"https://blog.aspose.com/categories/aspose.cad-product-family/","APIReferenceURL":"https://reference.aspose.com/cad/java/","FreeAppsURL":"https://products.aspose.app/cad","ForumsURL":"https://forum.aspose.com/c/cad","InstallCommand":"<repository>\\n  <id>AsposeJavaAPI</id>\\n  <name>Aspose Java API</name>\\n  <url>https://repository.aspose.com/repo/</url>\\n</repository>\\n<dependency>\\n  <groupId>com.aspose</groupId>\\n  <artifactId>aspose-cad</artifactId>\\n  <version>24.3</version>\\n</dependency>","urlPrefix":"cad","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.CAD for .NET","Category":"Aspose.CAD Product Family","ProgrammingLanguage":"C#","ProductURL":"https://products.aspose.com/cad/net/","DownloadURL":"https://releases.aspose.com/cad/net/","ExternalDownloadURL":"https://github.com/aspose-cad","DocumentationURL":"https://docs.aspose.com/cad/net/","BlogsURL":"https://blog.aspose.com/categories/aspose.cad-product-family/","APIReferenceURL":"https://reference.aspose.com/cad/net/","FreeAppsURL":"https://products.aspose.app/cad","ForumsURL":"https://forum.aspose.com/c/cad","InstallCommand":"\\n\\nInstall-Package Aspose.CAD\\n\\n","urlPrefix":"cad","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.Imaging for Python via .NET","Category":"Aspose.Imaging Product Family","ProgrammingLanguage":"Python","ProductURL":"https://products.aspose.com/imaging/python-net/","DownloadURL":"https://releases.aspose.com/imaging/python-net/","ExternalDownloadURL":"https://github.com/aspose-imaging/Aspose.Imaging-for-Python-Net","DocumentationURL":"https://docs.aspose.com/imaging/python-net/","BlogsURL":"https://blog.aspose.com/categories/aspose.imaging-product-family/","APIReferenceURL":"https://reference.aspose.com/imaging/python-net/","FreeAppsURL":"https://products.aspose.app/imaging","ForumsURL":"https://forum.aspose.com/c/imaging/","InstallCommand":"pip install aspose-imaging-python-net","urlPrefix":"imaging","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.3D for Python via .NET","Category":"Aspose.3D Product Family","ProgrammingLanguage":"Python","ProductURL":"https://products.aspose.com/3d/python-net/","DownloadURL":"https://releases.aspose.com/3d/python-net/","ExternalDownloadURL":"https://github.com/aspose-3d/Aspose.Imaging-for-Python-Net","DocumentationURL":"https://docs.aspose.com/3d/python-net/","BlogsURL":"https://blog.aspose.com/categories/aspose.3d-product-family/","APIReferenceURL":"https://reference.aspose.com/3d/python-net/","FreeAppsURL":"https://products.aspose.app/3d","ForumsURL":"https://forum.aspose.com/c/3d/","InstallCommand":"pip install aspose-3d","urlPrefix":"3d","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.Slides for Java","Category":"Aspose.Slides Product Family","ProgrammingLanguage":"Java","ProductURL":"https://products.aspose.com/slides/java/","DownloadURL":"https://releases.aspose.com/slides/java/","ExternalDownloadURL":"https://releases.aspose.com/java/repo/com/aspose/aspose-slides/","DocumentationURL":"https://docs.aspose.com/slides/java/","BlogsURL":"https://blog.aspose.com/categories/aspose.slides-product-family/","APIReferenceURL":"https://reference.aspose.com/slides/java/","FreeAppsURL":"https://products.aspose.app/slides","ForumsURL":"https://forum.aspose.com/c/slides/14","InstallCommand":"<repository>\\n  <id>AsposeJavaAPI</id>\\n  <name>Aspose Java API</name>\\n  <url>https://repository.aspose.com/repo/</url>\\n</repository>\\n<dependency>\\n  <groupId>com.aspose</groupId>\\n  <artifactId>aspose-slides</artifactId>\\n  <version>25.1</version>\\n  <classifier>jdk16</classifier>\\n</dependency>","urlPrefix":"slides","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.BarCode for .NET","Category":"Aspose.BarCode Product Family","ProgrammingLanguage":"C#","ProductURL":"https://products.aspose.com/barcode/net/","DownloadURL":"https://releases.aspose.com/barcode/net/","ExternalDownloadURL":"https://www.nuget.org/packages/Aspose.BarCode/","DocumentationURL":"https://docs.aspose.com/barcode/net/","BlogsURL":"https://blog.aspose.com/categories/aspose.barcode-product-family/","APIReferenceURL":"https://reference.aspose.com/barcode/net/","FreeAppsURL":"https://products.aspose.app/barcode","ForumsURL":"https://forum.aspose.com/c/barcode/","InstallCommand":"\\n\\nInstall-Package Aspose.BarCode\\n\\n","urlPrefix":"barcode","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.BarCode for Java","Category":"Aspose.BarCode Product Family","ProgrammingLanguage":"Java","ProductURL":"https://products.aspose.com/barcode/java/","DownloadURL":"https://releases.aspose.com/barcode/java/","ExternalDownloadURL":"https://releases.aspose.com/java/repo/com/aspose/aspose-barcode/","DocumentationURL":"https://docs.aspose.com/barcode/java/","BlogsURL":"https://blog.aspose.com/categories/aspose.barcode-product-family/","APIReferenceURL":"https://reference.aspose.com/barcode/java/","FreeAppsURL":"https://products.aspose.app/barcode/","ForumsURL":"https://forum.aspose.com/c/barcode/","InstallCommand":"<repository>\\n  <id>AsposeJavaAPI</id>\\n  <name>Aspose Java API</name>\\n  <url>https://repository.aspose.com/repo/</url>\\n</repository>\\n<dependency>\\n  <groupId>com.aspose</groupId>\\n  <artifactId>aspose-barcode</artifactId>\\n  <version>23.10</version>\\n </dependency>","urlPrefix":"barcode","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.HTML for Java","Category":"Aspose.HTML Product Family","ProgrammingLanguage":"Java","ProductURL":"https://products.aspose.com/html/java/","DownloadURL":"https://releases.aspose.com/html/java/","ExternalDownloadURL":"https://releases.aspose.com/java/repo/com/aspose/aspose-html/","DocumentationURL":"https://docs.aspose.com/html/java/","BlogsURL":"https://blog.aspose.com/categories/aspose.html-product-family/","APIReferenceURL":"https://reference.aspose.com/html/java/","FreeAppsURL":"https://products.aspose.app/html/","ForumsURL":"https://forum.aspose.com/c/html/","InstallCommand":"<repository>\\n  <id>AsposeJavaAPI</id>\\n  <name>Aspose Java API</name>\\n  <url>https://repository.aspose.com/repo/</url>\\n</repository>\\n<dependency>\\n  <groupId>com.aspose</groupId>\\n  <artifactId>aspose-html</artifactId>\\n  <version>24.5</version>\\n </dependency>","urlPrefix":"html","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.HTML for .NET","Category":"Aspose.HTML Product Family","ProgrammingLanguage":"C#","ProductURL":"https://products.aspose.com/html/net/","DownloadURL":"https://releases.aspose.com/html/net/","ExternalDownloadURL":"https://releases.aspose.com/net/repo/com/aspose/aspose-html/","DocumentationURL":"https://docs.aspose.com/html/net/","BlogsURL":"https://blog.aspose.com/categories/aspose.html-product-family/","APIReferenceURL":"https://reference.aspose.com/html/net/","FreeAppsURL":"https://products.aspose.app/html/","ForumsURL":"https://forum.aspose.com/c/html/","InstallCommand":"\\n\\nInstall-Package Aspose.Html\\n\\n","urlPrefix":"html","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.CAD for Python via .NET","Category":"Aspose.CAD Product Family","ProgrammingLanguage":"Python","ProductURL":"https://products.aspose.com/cad/python-net/","DownloadURL":"https://releases.aspose.com/cad/python-net/","ExternalDownloadURL":"https://github.com/aspose-cad/Aspose.CAD-for-Python/tree/main","DocumentationURL":"https://docs.aspose.com/cad/python-net/","BlogsURL":"https://blog.aspose.com/categories/aspose.cad-product-family/","APIReferenceURL":"https://reference.aspose.com/cad/python-net/","FreeAppsURL":"https://products.aspose.app/cad","ForumsURL":"https://forum.aspose.com/c/cad/","InstallCommand":"pip install aspose-cad","urlPrefix":"cad","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.PSD for Python via .NET","Category":"Aspose.PSD Product Family","ProgrammingLanguage":"Python","ProductURL":"https://products.aspose.com/psd/python-net/","DownloadURL":"https://releases.aspose.com/psd/python-net/","ExternalDownloadURL":"https://github.com/aspose-psd","DocumentationURL":"https://docs.aspose.com/psd/python-net/","BlogsURL":"https://blog.aspose.com/categories/aspose.psd-product-family/","APIReferenceURL":"https://reference.aspose.com/psd/python-net/","FreeAppsURL":"https://products.aspose.app/psd","ForumsURL":"https://forum.aspose.com/c/psd/","InstallCommand":"pip install aspose-psd","urlPrefix":"psd","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.PSD for Java","Category":"Aspose.PSD Product Family","ProgrammingLanguage":"Java","ProductURL":"https://products.aspose.com/psd/java/","DownloadURL":"https://releases.aspose.com/psd/java/","ExternalDownloadURL":"https://github.com/aspose-psd","DocumentationURL":"https://docs.aspose.com/psd/java/","BlogsURL":"https://blog.aspose.com/categories/aspose.psd-product-family/","APIReferenceURL":"https://reference.aspose.com/psd/java/","FreeAppsURL":"https://products.aspose.app/psd","ForumsURL":"https://forum.aspose.com/c/psd/","InstallCommand":"<repository>\\n  <id>AsposeJavaAPI</id>\\n  <name>Aspose Java API</name>\\n  <url>https://repository.aspose.com/repo/</url>\\n</repository>\\n<dependency>\\n  <groupId>com.aspose</groupId>\\n  <artifactId>aspose-psd</artifactId>\\n  <version>25.2</version>\\n <classifier>jdk16</classifier>\\n </dependency>","urlPrefix":"psd","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.ZIP for Java","Category":"Aspose.ZIP Product Family","ProgrammingLanguage":"Java","ProductURL":"https://products.aspose.com/zip/java/","DownloadURL":"https://releases.aspose.com/zip/java/","ExternalDownloadURL":"https://github.com/aspose-zip/Aspose.ZIP-for-Java","DocumentationURL":"https://docs.aspose.com/zip/java/","BlogsURL":"https://blog.aspose.com/categories/aspose.zip-product-family/","APIReferenceURL":"https://reference.aspose.com/zip/java/","FreeAppsURL":"https://products.aspose.app/zip","ForumsURL":"https://forum.aspose.com/c/zip/","InstallCommand":"<repository>\\n  <id>AsposeJavaAPI</id>\\n  <name>Aspose Java API</name>\\n  <url>https://repository.aspose.com/repo/</url>\\n</repository>\\n<dependency>\\n  <groupId>com.aspose</groupId>\\n  <artifactId>aspose-zip</artifactId>\\n  <version>24.5</version>\\n </dependency>","urlPrefix":"zip","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.Email for Node.js via .NET","Category":"Aspose.Email Product Family","ProgrammingLanguage":"JavaScript","ProductURL":"https://products.aspose.com/email/nodejs-net/","DownloadURL":"https://releases.aspose.com/email/nodejs-net/","ExternalDownloadURL":"https://github.com/aspose-email","DocumentationURL":"https://docs.aspose.com/email/nodejs-net/","BlogsURL":"https://blog.aspose.com/categories/aspose.email-product-family/","APIReferenceURL":"https://reference.aspose.com/email/","FreeAppsURL":"https://products.aspose.app/email","ForumsURL":"https://forum.aspose.com/c/email/","InstallCommand":"npm install @aspose/email","urlPrefix":"email","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.CAD for JavaScript via .NET","Category":"Aspose.CAD Product Family","ProgrammingLanguage":"JavaScript","ProductURL":"https://products.aspose.com/cad/javascript-net/","DownloadURL":"https://releases.aspose.com/cad/javascript-net/","ExternalDownloadURL":"https://github.com/aspose-cad","DocumentationURL":"https://docs.aspose.com/cad/javascript-net/","BlogsURL":"https://blog.aspose.com/categories/aspose.cad-product-family/","APIReferenceURL":"https://reference.aspose.com/cad/","FreeAppsURL":"https://products.aspose.app/cad","ForumsURL":"https://forum.aspose.com/cad/","InstallCommand":"npm i aspose-cad","urlPrefix":"cad","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.TeX for Python via .NET","Category":"Aspose.TeX Product Family","ProgrammingLanguage":"Python","ProductURL":"https://products.aspose.com/tex/python-net/","DownloadURL":"https://releases.aspose.com/tex/python-net/","ExternalDownloadURL":"https://github.com/aspose-tex","DocumentationURL":"https://docs.aspose.com/tex/python-net/","BlogsURL":"https://blog.aspose.com/categories/aspose.tex-product-family/","APIReferenceURL":"https://reference.aspose.com/tex/python-net/","FreeAppsURL":"https://products.aspose.app/tex","ForumsURL":"https://forum.aspose.com/c/tex/","InstallCommand":"pip install aspose-tex-net","urlPrefix":"tex","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.TeX for Java","Category":"Aspose.TeX Product Family","ProgrammingLanguage":"Java","ProductURL":"https://products.aspose.com/tex/java/","DownloadURL":"https://releases.aspose.com/tex/java/","ExternalDownloadURL":"https://github.com/aspose-tex","DocumentationURL":"https://docs.aspose.com/tex/java/","BlogsURL":"https://blog.aspose.com/categories/aspose.tex-product-family/","APIReferenceURL":"https://reference.aspose.com/tex/java/","FreeAppsURL":"https://products.aspose.app/tex","ForumsURL":"https://forum.aspose.com/c/tex/","InstallCommand":"<repository>\\n  <id>AsposeJavaAPI</id>\\n  <name>Aspose Java API</name>\\n  <url>https://repository.aspose.com/repo/</url>\\n</repository>\\n<dependency>\\n  <groupId>com.aspose</groupId>\\n  <artifactId>aspose-tex</artifactId>\\n  <version>22.6</version>\\n </dependency>","urlPrefix":"tex","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.GIS for .NET","Category":"Aspose.GIS Product Family","ProgrammingLanguage":"C#","ProductURL":"https://products.aspose.com/gis/net/","DownloadURL":"https://releases.aspose.com/gis/net/","ExternalDownloadURL":"https://www.nuget.org/packages/Aspose.GIS/","DocumentationURL":"https://docs.aspose.com/gis/net/","BlogsURL":"https://blog.aspose.com/categories/aspose.gis-product-family/","APIReferenceURL":"https://reference.aspose.com/gis/net/","FreeAppsURL":"https://products.aspose.app/gis","ForumsURL":"https://forum.aspose.com/c/gis/14","InstallCommand":"\\n\\nInstall-Package Aspose.GIS\\n\\n","urlPrefix":"gis","license":"https://purchase.aspose.com/temporary-license/"}]'),y=JSON.parse('[{"value":"Aspose.Imaging","Category":"Aspose.Imaging Product Family","ProgrammingLanguage":"","ProductURL":"https://products.aspose.com/imaging/","DownloadURL":"https://releases.aspose.com/imaging/","ExternalDownloadURL":"https://www.nuget.org/packages/Aspose.Imaging/","DocumentationURL":"https://docs.aspose.com/imaging/","BlogsURL":"https://blog.aspose.com/categories/aspose.imaging-product-family/","APIReferenceURL":"https://reference.aspose.com/imaging/","FreeAppsURL":"https://products.aspose.app/imaging","ForumsURL":"https://forum.aspose.com/c/imaging/14","InstallCommand":"","urlPrefix":"imaging","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.Email","Category":"Aspose.Email Product Family","ProgrammingLanguage":"","ProductURL":"https://products.aspose.com/email/","DownloadURL":"https://releases.aspose.com/email/","ExternalDownloadURL":"https://www.nuget.org/packages/Aspose.Email/","DocumentationURL":"https://docs.aspose.com/email/","BlogsURL":"https://blog.aspose.com/categories/aspose.email-product-family/","APIReferenceURL":"https://reference.aspose.com/email/","FreeAppsURL":"https://products.aspose.app/email","ForumsURL":"https://forum.aspose.com/c/email/14","InstallCommand":"","urlPrefix":"email","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.Page","Category":"Aspose.Page Product Family","ProgrammingLanguage":"","ProductURL":"https://products.aspose.com/page/","DownloadURL":"https://releases.aspose.com/page/","ExternalDownloadURL":"https://www.nuget.org/packages/Aspose.Page/","DocumentationURL":"https://docs.aspose.com/page/","BlogsURL":"https://blog.aspose.com/categories/aspose.page-product-family/","APIReferenceURL":"https://reference.aspose.com/page/","FreeAppsURL":"https://products.aspose.app/page","ForumsURL":"https://forum.aspose.com/c/page/","InstallCommand":"","urlPrefix":"page","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.3D","Category":"Aspose.3D Product Family","ProgrammingLanguage":"","ProductURL":"https://products.aspose.com/3d/","DownloadURL":"https://releases.aspose.com/3d/","ExternalDownloadURL":"https://releases.aspose.com/repo/com/aspose/aspose-3d/","DocumentationURL":"https://docs.aspose.com/3d/","BlogsURL":"https://blog.aspose.com/categories/aspose.3d-product-family/","APIReferenceURL":"https://reference.aspose.com/3d/","FreeAppsURL":"https://products.aspose.app/3d","ForumsURL":"https://forum.aspose.com/c/3d/18","InstallCommand":"","urlPrefix":"3d","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.CAD","Category":"Aspose.CAD Product Family","ProgrammingLanguage":"","ProductURL":"https://products.aspose.com/cad/","DownloadURL":"https://releases.aspose.com/cad/","ExternalDownloadURL":"https://github.com/aspose-cad","DocumentationURL":"https://docs.aspose.com/cad/","BlogsURL":"https://blog.aspose.com/categories/aspose.cad-product-family/","APIReferenceURL":"https://reference.aspose.com/cad/","FreeAppsURL":"https://products.aspose.app/cad","ForumsURL":"https://forum.aspose.com/c/cad","InstallCommand":"","urlPrefix":"cad","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.Slides","Category":"Aspose.Slides Product Family","ProgrammingLanguage":"","ProductURL":"https://products.aspose.com/slides/","DownloadURL":"https://releases.aspose.com/slides/","ExternalDownloadURL":"https://releases.aspose.com/repo/com/aspose/aspose-slides/","DocumentationURL":"https://docs.aspose.com/slides/","BlogsURL":"https://blog.aspose.com/categories/aspose.slides-product-family/","APIReferenceURL":"https://reference.aspose.com/slides/","FreeAppsURL":"https://products.aspose.app/slides","ForumsURL":"https://forum.aspose.com/c/slides/14","InstallCommand":"","urlPrefix":"slides","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.BarCode","Category":"Aspose.BarCode Product Family","ProgrammingLanguage":"","ProductURL":"https://products.aspose.com/barcode/","DownloadURL":"https://releases.aspose.com/barcode/","ExternalDownloadURL":"https://www.nuget.org/packages/Aspose.BarCode/","DocumentationURL":"https://docs.aspose.com/barcode/","BlogsURL":"https://blog.aspose.com/categories/aspose.barcode-product-family/","APIReferenceURL":"https://reference.aspose.com/barcode/net/","FreeAppsURL":"https://products.aspose.app/barcode","ForumsURL":"https://forum.aspose.com/c/barcode/","InstallCommand":"","urlPrefix":"barcode","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.HTML","Category":"Aspose.HTML Product Family","ProgrammingLanguage":"","ProductURL":"https://products.aspose.com/html/","DownloadURL":"https://releases.aspose.com/html/","ExternalDownloadURL":"https://releases.aspose.com/repo/com/aspose/aspose-html/","DocumentationURL":"https://docs.aspose.com/html/","BlogsURL":"https://blog.aspose.com/categories/aspose.html-product-family/","APIReferenceURL":"https://reference.aspose.com/html/","FreeAppsURL":"https://products.aspose.app/","ForumsURL":"https://forum.aspose.com/c/html/","InstallCommand":"","urlPrefix":"html","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.PSD","Category":"Aspose.PSD Product Family","ProgrammingLanguage":"","ProductURL":"https://products.aspose.com/psd/","DownloadURL":"https://releases.aspose.com/psd/","ExternalDownloadURL":"https://github.com/aspose-psd","DocumentationURL":"https://docs.aspose.com/psd/","BlogsURL":"https://blog.aspose.com/categories/aspose.psd-product-family/","APIReferenceURL":"https://reference.aspose.com/psd/","FreeAppsURL":"https://products.aspose.app/psd","ForumsURL":"https://forum.aspose.com/c/psd/","InstallCommand":"","urlPrefix":"psd","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.ZIP","Category":"Aspose.ZIP Product Family","ProgrammingLanguage":"","ProductURL":"https://products.aspose.com/zip/","DownloadURL":"https://releases.aspose.com/zip/","ExternalDownloadURL":"https://github.com/aspose-zip/","DocumentationURL":"https://docs.aspose.com/zip/","BlogsURL":"https://blog.aspose.com/categories/aspose.zip-product-family/","APIReferenceURL":"https://reference.aspose.com/zip/","FreeAppsURL":"https://products.aspose.app/zip","ForumsURL":"https://forum.aspose.com/c/zip/","InstallCommand":"","urlPrefix":"zip","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.TeX","Category":"Aspose.TeX Product Family","ProgrammingLanguage":"","ProductURL":"https://products.aspose.com/tex/","DownloadURL":"https://releases.aspose.com/tex/","ExternalDownloadURL":"https://github.com/aspose-tex","DocumentationURL":"https://docs.aspose.com/tex/","BlogsURL":"https://blog.aspose.com/categories/aspose.tex-product-family/","APIReferenceURL":"https://reference.aspose.com/tex/","FreeAppsURL":"https://products.aspose.app/tex","ForumsURL":"https://forum.aspose.com/c/tex/","InstallCommand":"","urlPrefix":"tex","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.GIS","Category":"Aspose.GIS Product Family","ProgrammingLanguage":"","ProductURL":"https://products.aspose.com/gis/","DownloadURL":"https://releases.aspose.com/gis/","ExternalDownloadURL":"https://www.nuget.org/packages/Aspose.GIS/","DocumentationURL":"https://docs.aspose.com/gis/","BlogsURL":"https://blog.aspose.com/categories/aspose.gis-product-family/","APIReferenceURL":"https://reference.aspose.com/gis/","FreeAppsURL":"https://products.aspose.app/gis","ForumsURL":"https://forum.aspose.com/c/gis/14","InstallCommand":"","urlPrefix":"gis","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.OMR","Category":"Aspose.OMR Product Family","ProgrammingLanguage":"","ProductURL":"https://products.aspose.com/omr/","DownloadURL":"https://releases.aspose.com/omr/","ExternalDownloadURL":"https://www.nuget.org/packages/Aspose.OMR/","DocumentationURL":"https://docs.aspose.com/omr/","BlogsURL":"https://blog.aspose.com/categories/aspose.omr-product-family/","APIReferenceURL":"https://reference.aspose.com/omr/","FreeAppsURL":"https://products.aspose.app/omr","ForumsURL":"https://forum.aspose.com/c/omr","InstallCommand":"","urlPrefix":"omr","license":"https://purchase.aspose.com/temporary-license/"},{"value":"Aspose.Slides AI Agent - Translator","Category":"Aspose.Slides Product Family","ProgrammingLanguage":"","ProductURL":"https://products.aspose.ai/slides/presentation-translator/","DownloadURL":"https://releases.aspose.com/slides/","ExternalDownloadURL":"https://releases.aspose.com/repo/com/aspose/aspose-slides/","DocumentationURL":"https://docs.aspose.com/slides/","BlogsURL":"https://blog.aspose.com/categories/aspose.slides-product-family/","APIReferenceURL":"https://reference.aspose.com/slides/","FreeAppsURL":"https://products.aspose.app/slides","ForumsURL":"https://forum.aspose.com/c/slides/14","InstallCommand":"","urlPrefix":"slides","license":"https://purchase.aspose.com/temporary-license/"}]');var w=t(2412),L=t(31347),R=t(50120),U=t(85723);let P=(0,o.j)("b3d38c3f8c8c069590b17b8a47db23dbd3a7d459",b);async function b(e){let s=(0,L.JV)({baseURL:"https://api.groq.com/openai/v1",apiKey:process.env.GROQ_API_KEY}),{text:t}=await (0,R._4)({model:s("mixtral-8x7b-32768"),prompt:e});return t.replace(/^[\s\S]*?\n---/,"---")}(0,U.h)([P]),(0,o.j)("5bb158193285ee3a766d06506dbb0499387d848a",P);var v=t(42343);let A=(0,o.j)("e768e4916feaf81656a01a87abb58f46f8343e39",I);async function I(e){(0,v.c)({apiKey:process.env.DEEPSEEK_API_KEY});let{reasoning:s,text:t}=await (0,R._4)({model:(0,v.c)("deepseek-reasoner"),prompt:e});return t}(0,U.h)([A]),(0,o.j)("ee1152f3e1b815d5b1bbc1f40787394134fcc11d",A);let $=(0,o.j)("7df128e6b9f3c02068e9de639bf1dfc43692dc76",D);async function D(e,s,t){let o={author:`urn:li:person:${process.env.LINKEDIN_ID}`,lifecycleState:"PUBLISHED",specificContent:{"com.linkedin.ugc.ShareContent":{shareCommentary:{text:e.data},shareMediaCategory:"ARTICLE",media:[{status:"READY",description:{text:""},originalUrl:s,title:{text:t||"Read more"},thumbnails:[{resolvedUrl:""}]}]}},visibility:{"com.linkedin.ugc.MemberNetworkVisibility":"PUBLIC"}};try{let e=await fetch("https://api.linkedin.com/v2/ugcPosts",{method:"POST",headers:{Authorization:process.env.LINKEDIN_ACCESS_TOKEN,"Content-Type":"application/json"},body:JSON.stringify(o)});if(!e.ok){let s=await e.json();return console.error("LinkedIn API error:",s),{success:!1,platform:"linkedin",error:s}}let s=await e.json();return console.log("Post successful:",s),{success:!0,platform:"linkedin",data:s}}catch(e){return console.error("Error posting to LinkedIn:",e),{success:!1,platform:"linkedin",error:e}}}(0,U.h)([$]),(0,o.j)("ce7639f62e8f3590c14e6406759edffedd5bf7d2",$);let x=(0,o.j)("be88aaf2b7cc56e791633c2b77b0e954195ceb77",F);async function F(e,s){let t={message:e.data,link:s};try{let e=await fetch(`https://graph.facebook.com/v22.0/${process.env.FACEBOOK_PAGE_ID}/feed`,{method:"POST",headers:{Authorization:process.env.FACEBOOK_ACCESS_TOKEN,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok){let s=await e.json();return console.error("Facebook API error:",s),{success:!1,platform:"facebook",error:s}}let s=await e.json();return console.log("Facebook Post successful:",s),{success:!0,platform:"facebook",data:s}}catch(e){return console.error("Error posting to Facebook:",e),{success:!1,platform:"facebook",error:e}}}(0,U.h)([x]),(0,o.j)("b9be4dcc8dfec443bd3c2b4352d74755692ecadc",x);var S=t(96290);let C=(0,o.j)("d07b1fdab12cec80a41a569443b8717dfc877385",k);async function k(e,s){try{let t=new S.jp({appKey:process.env.X_API_KEY,appSecret:process.env.X_API_SECRET,accessToken:process.env.X_ACCESS_TOKEN,accessSecret:process.env.X_ACCESS_SECRET}),o=await t.v2.tweet(`${e.data} 
Read More: ${s}`);return{success:!0,platform:"x",data:o}}catch(e){return console.error("Error posting to X:",e),{success:!1,platform:"x",error:e}}}(0,U.h)([C]),(0,o.j)("1819a0099bcf0da4ca758299347fb76a9611907e",C);var E=t(86503),j=t(39113);async function T(e){try{let{data:s}=await E.Z.get(e);return j.zD(s)("h1").first().text()}catch(e){return console.error("Error scraping:",e.message),null}}async function B(e){let s;console.log("****************************** form data start"),console.log(e),console.log("****************************** form data end");let t="";"programmatic"==e.get("BlogType")?(s=f.find(s=>s.value===e.get("products")),t=await l(e,s)):(s=y.find(s=>s.value===e.get("products")),t=await m(e,s));let o="",a="";switch("DeepSeek R1"==e.get("model")&&(a=await A(t)),a="Mixtral"==e.get("model")?await P(t):await (0,w.A)({model:e.get("model"),maxTokens:Number(e.get("tokenLimit")),temperature:Number(e.get("temprature")),maxRetries:5,prompt:t}),console.log("here is the raw output -- start"),console.log(a),console.log("here is the raw output  -- end"),e.get("format")){case"Free flowing":o="programmatic"==e.get("BlogType")?await d(e,s,a):await u(e,s,a);break;case"Table of content(TOC)-based":o="programmatic"==e.get("BlogType")?await g(e,s,a):await h(e,s,a);break;default:o=await d(e,s,a)}await i(o,e.get("uuid"),e.get("title")),console.log("all done"),(0,c.redirect)("/download")}async function J(e){if(console.log("****************************** server call form data start hooooo1"),JSON.parse(e.get("platforms")).value&&'""'!==JSON.parse(e.get("platforms")).value)return null;let s=JSON.parse(e.get("platforms")),t=[];for(let o=0;o<s.length;o++)try{let a=await (0,w.A)({model:"gpt-4o",maxTokens:500,temperature:.3,maxRetries:5,prompt:`I want to create a ${s[o].value} post. Please follow these instructions:
          1. Read and summarize the key points from this blog post: ${e.get("url")}
          2. Keep the tone ${e.get("mood")} and professional.
          3. The target audience is ${e.get("audience")}.
          4. Include popular and relevant hashtags.
          5. The total post length should be between 150–200 characters including hashtags.
          6. Do not include any introductory or explanatory text. Return only the post content.`});t.push({value:s[o].value,data:a.content||a.text||a||""}),console.log("reslut is ")}catch(e){console.error(`Failed to generate post for ${s[o]}:`,e)}let o=await T(e.get("url")),a=[];return s.find(e=>"linkedin"===e.value)&&a.push(await $(t.find(e=>"linkedin"===e.value),e.get("url"),o)),s.find(e=>"facebook"===e.value)&&a.push(await x(t.find(e=>"facebook"===e.value),e.get("url"))),s.find(e=>"x"===e.value)&&a.push(await C(t.find(e=>"x"===e.value),e.get("url"))),a}(0,U.h)([T]),(0,o.j)("3ec9aecef918b0c592d09df76e57c8975d0f31d2",T),(0,U.h)([B,J]),(0,o.j)("ddc9f5b14f2aa100e488a7cda2727190bebb6350",B),(0,o.j)("bd26dc79d397f9193f3c356a47ab87f57072d3ef",J)}};