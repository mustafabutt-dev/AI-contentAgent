'use server'
import { TwitterApi } from 'twitter-api-v2';

export const XService = async (message, url) => {
   
    try {
        const twitterClient = new TwitterApi({
            appKey: process.env.X_API_KEY,
            appSecret: process.env.X_API_SECRET,
            accessToken: process.env.X_ACCESS_TOKEN,
            accessSecret: process.env.X_ACCESS_SECRET,
        });
        const resp = await twitterClient.v2.tweet(`${message.data} \nRead More: ${url}`);
        return ({ success: true, platform:"x", data: resp });
    }catch (err) {
        console.error("Error posting to X:", err);
        return ({ success: false, platform:"x", error: err });
    }
}
