
# Introduction

Built with [Next.js](https://nextjs.org/), it leverages the power of open source [Vercel’s AI SDK](https://sdk.vercel.ai) to generate high-quality, SEO-optimized articles. Simply input your topic and relevant details, and the app will generate a well-structured draft, complete with headings, subheadings, and relevant keywords.

# Built with

- NEXTJS(App router)
- Tailwind CSS
- AI SDK by Vercel’s (open source)

# Prerequisites

- Node.js

# Getting started

- Clone this repo.
- Go into the root directory
- Put your OpenAI key and GROQ_API_KEY in the `.env.local` file.
- Run `npm install`
- Run `npm run start`

Now, open the application in the web browser by navigating to [localhost:3000](http://localhost:3000/).

The auto-posting feature has been enabled.

With this update, the agent can now automatically generate posts with relevant hashtags, descriptions, and the article URL, then publish them across multiple social media platforms such as [X](https://x.com/home), [LinkedIn](https://linkedin.com/) and [Facebook](https://www.facebook.com/).

To enable LinkedIn page/user integration, please follow these steps:

1. Visit [LinkedIn Developer's page](https://www.linkedin.com/developers/apps/new).
2. Create App and get access and page/user Id.
3. Put your access token and user ID inside the `.env.local` file.

Please check this [video guide](https://www.youtube.com/watch?v=3JqpUyKukyw) in case you find any difficulty.

To enable Facebook page integration, please follow these steps:

1. Visit this [page](https://developers.facebook.com/).
2. Create App and get Facebook acces token, page ID and put them inside the `.env.local` file.

To enable X (formerly Twitter) integration, please follow these steps:

1. Visit this [page](https://developer.twitter.com/en/portal/dashboard/).
2. Create App and get ACCESS_TOKEN, ACCESS_SECRET API_KEY, API_SECRET and put them inside the `.env.local` file.


## [Blog Post Creation - Demo video](https://www.dropbox.com/scl/fi/qr1gcweidh4p45tbkgthy/demo.mov?rlkey=m9ghqq40flzav47pkcniw1d27&st=60909eip&dl=0)
## [Blog Post Translation - Demo video](https://www.dropbox.com/scl/fi/319pdbky49z70zsxg9zqe/translation.mp4?rlkey=oc5m5zw7npwcv33ktmruxrpa6&st=by3m4l0y&dl=0)
## [Share Blog Post on Socials - Demo video](https://www.dropbox.com/scl/fi/tc6hk8sbphaiu8dhjdkey/socials.mov?rlkey=o1ouzlqz84b58vlzyw3veyctq&e=1&st=n0fr519u&dl=0)
## [Next Topic Recommender](https://www.dropbox.com/scl/fi/977jwbvsau7ee3qxvxd1i/recommender.mov?rlkey=fu1xk0rqaes7jzdups3nuntcs&st=f8dtf2vu&dl=0)