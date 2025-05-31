'use server'

export const FacebooknService = async (message, url) => {
    
  const payload = {
       "message":message.data,
       link : url
    }

    try {
      const response = await fetch(`https://graph.facebook.com/v22.0/${process.env.FACEBOOK_PAGE_ID}/feed`, {
        method: "POST",
        headers: {
          Authorization: process.env.FACEBOOK_ACCESS_TOKEN,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Facebook API error:", errorData);
        return { success: false, platform:"facebook", error: errorData };
      }
  
      const data = await response.json();
      console.log("Facebook Post successful:", data);
      return { success: true, platform:"facebook", data };
    } catch (err) {
      console.error("Error posting to Facebook:", err);
      return { success: false, platform:"facebook", error: err };
    }

}
