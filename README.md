# Keebstagram YSWS
Make any keyboard related project, get exclusive Hack Club keyboard merch and mechanical keyboards! A draft YSWS, originally made for the summer internship, now currently being worked on as a normal YSWS.

This includes the homepage and preview for the profile page.

## Demo
https://keebstagram.octotwelve.xyz

## Development
You'll need nodejs.

Rename `.env.example` to `.env`. If you want to use a Plausible instance for analytics, replace the environment variables with the plausible instance URL and the site URL where the website will be hosted (without "https://")

Install dependencies:
```
npm i
```

Run the development server:

```
npm run dev
```
Open `localhost:5173` in your browser.

## Deployment
Build the website:
```
npm run build
```
The static files are built in `/dist`. To preview with a dev server, run:
```
npm run preview
```

Open `localhost:4173` in your browser.
