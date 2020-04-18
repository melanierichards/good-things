# Good Things

A compilation of good sensory things in life. Live site: https://goodthings.melanie-richards.com

Built with [Eleventy](https://www.11ty.dev/docs/).

## To build

0. Install [Node](https://nodejs.org/) :)
1. Clone the repo
2. Run `npm install`
3. Run `npx @11ty/eleventy --serve`
4. Visit `localhost:8080`

## Commands

| Command                    | Purpose                      |
| -------------------------- | ---------------------------- |
| npx @11ty/eleventy         | Build project                |
| npx @11ty/eleventy --serve | Serve project                |
| gulp sass:watch            | Watch changes to SASS files  |
| gulp minify-css            | Compress the output CSS file |

## Adjustments for hosting your own version

If you’d like to host your own version of this list:

1. In `_data > site.json`, update the `baseUrl` value to match the base URL at which your site will be hosted, including the scheme and excluding a trailing `/`. This will be used within the social media card image value.
2. Update any references to my site/name to your own in `main.njk` (for example, social media meta values). These will be moved to site data as well.
3. `.github > workflows > daily-build.yml` defines a workflow that will trigger a daily build on Netlify. You can adjust this file to your liking, and update your fork repo to host your own private build key (refer to [“Scheduling Netlify deploys with GitHub Actions”](https://www.voorhoede.nl/en/blog/scheduling-netlify-deploys-with-github-actions/) for details). You may alternatively remove this file/directory.