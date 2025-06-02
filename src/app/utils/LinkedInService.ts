'use server'

export const LinkedInService = async (content, url, blogTitle) => {
  const payload = {
        "author": `urn:li:person:${process.env.LINKEDIN_ID}`,
        "lifecycleState": "PUBLISHED",
        "specificContent": {
            "com.linkedin.ugc.ShareContent": {
                "shareCommentary": {
                    "text": content.data
                },
                "shareMediaCategory": "ARTICLE",
                "media": [
                    {
                        "status": "READY",
                        "description": {
                            "text": ""
                        },
                        "originalUrl": url,
                        "title": {
                            "text": blogTitle || "Read more"
                        },
                        "thumbnails": [
                          {
                            "resolvedUrl": ""
                          }
                        ]
                    }
                ]
            }
        },
        "visibility": {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
        }
    }

    try {
      const response = await fetch("https://api.linkedin.com/v2/ugcPosts", {
        method: "POST",
        headers: {
          Authorization: process.env.LINKEDIN_ACCESS_TOKEN,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("LinkedIn API error:", errorData);
        return { success: false,platform:"linkedin", error: errorData };
      }
  
      const data = await response.json();
      console.log("Post successful:", data);
      return { success: true, platform:"linkedin", data };
    } catch (err) {
      console.error("Error posting to LinkedIn:", err);
      return { success: false,platform:"linkedin", error: err };
    }
  }