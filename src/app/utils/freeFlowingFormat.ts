import { parseInputToObjects, filterSections, insertDashes, titleCase, normalizeHeadings, makeBlogURL, getDate } from "@/utils/utils";
export const GenerateFreeFlowingFormat = async (formData,product,data)=>{
   
    let filedata = await normalizeHeadings(data.toString());
   
    const output = await parseInputToObjects(filedata);
    const title = await titleCase(formData.get("title"))
    const metaTitle = await filterSections(output, "Meta Title");
    const metaDesc = await filterSections(output, "Meta Description");
    const summary = await filterSections(output, "Short Summary");
    const url = await makeBlogURL(formData.get("title"),product.urlPrefix);
    const Overview = await filterSections(output, "Overview");
    const installation = await filterSections(output, "Library Installation");
    const steps = await filterSections(output, "Code Snippet with a Step-by-Step Guide");
    const conclusion = await filterSections(output, "Conclusion");
    const license = await filterSections(output, "Get a Free License");
    const onlineTool = await filterSections(output, "Try Online");
    const resources = await filterSections(output, "Public Resources");
    const seeAlso = await filterSections(output, "Explore");
    const faqs = await filterSections(output, "Frequently Asked Questions – FAQs");
    const formattedDate = await getDate();
    const tags = await formData.get("secondaryKeywords").split(',').map(item => item.trim())

    const content = `---
title: ${title}
seoTitle: ${metaTitle.content}
description: ${metaDesc.content}
date: ${formattedDate}
draft: false
url: ${url}
author: \"${formData.get("authorName")}\"
summary: ${summary.content}
tags: ${JSON.stringify(tags)}
categories: [\"${product.Category}\"]
---\n
{{< figure align=center src=\"images/${await insertDashes(title)+ ".png"}\" alt=\"${title}\" >}}

## Overview

${Overview.content}


## Library Installation

${installation.content}

## Code Snippet with a Step-by-Step Guide

${steps.content}

## Get a Free License

${license.content} ${formData.get("onlineTool") ? `\n\n## Try Online\n\n${onlineTool.content}` : ''}

## Conclusion

${conclusion.content}

## Public Resources

${resources.content}

- [Developer’s guide](${product.DocumentationURL})
- [Free online applications](${product.FreeAppsURL})
- [API reference](${product.APIReferenceURL})
- [How-to guides and articles](${product.BlogsURL})

## Frequently Asked Questions – FAQs


${faqs.content}

## Explore

${seeAlso.content}
`
    return content;
}