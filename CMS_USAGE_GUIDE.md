# CMS Usage Guide for Teekkarikomissio.fi

This guide explains how to add and manage Events and News through the Decap CMS admin interface.

## Accessing the CMS

1. Navigate to: `https://teekkarikomissio.fi/admin/`
2. Login with your Google Workspace account
3. You'll see the content collections in the left sidebar

## Adding Events (Tapahtumat)

Events are stored in `_content/events/` as single markdown files (one file per event, not language-specific).

### Steps to Add a New Event:

1. Click on **"Tapahtumat (Events)"** in the CMS sidebar
2. Click **"New Tapahtumat (Events)"**
3. Fill in the required fields:

#### Required Fields:

- **Event ID**: Unique identifier (e.g., `eldprowet-2026`, `teekkariexpo-2025`)
    - Use lowercase, hyphens instead of spaces
    - This becomes the filename
- **Title**: Event name (e.g., "Eldprowet 2026")
- **Start Date/Time**: When the event begins

#### Optional Fields:

- **End Date/Time**: When the event ends
- **Location**: Venue or city (e.g., "Turku, Åbo")
- **URL**: Link to event page or registration
- **All Day Event**: Toggle if event runs all day
- **Tags**: Categories like `rastikierros`, `gaala`, `lakitus`
- **Language**: Select `fi`, `sv`, or `en` (default: `fi`)
- **Description**: Markdown content describing the event

### Example Event:

```yaml
---
id: 'eldprowet-2026'
title: 'Eldprowet 2026'
start: '2026-04-30T11:00:00+03:00'
end: '2026-04-30T23:00:00+03:00'
location: 'Turku, Åbo'
url: 'https://teekkarikomissio.fi/events/eldprowet-2026'
tags: [ 'rastikierros' ]
lang: 'fi'
---
Tervetuloa Helvettiin!!!
```

4. Click **"Publish"** to save

## Adding News (Uutiset)

News items are multilingual and stored in `_content/news/` with language suffixes (e.g., `welcome.fi.md`,
`welcome.en.md`, `welcome.sv.md`).

### Steps to Add a New News Post:

1. Click on **"Uutiset (News)"** in the CMS sidebar
2. Click **"New Uutiset (News)"**
3. You'll see language tabs at the top (Finnish, Swedish, English)

#### Required Fields:

- **Post ID**: Unique identifier shared across all languages (e.g., `welcome-2025`, `lakitus-announcement-2025`)
    - Use lowercase, hyphens instead of spaces
    - **Important**: This must be the same for all language versions
- **Title**: Post title (translate for each language)
- **Date**: Publication date
- **Body**: Main content in markdown (translate for each language)

#### Optional Fields:

- **Summary**: Short preview text (translate for each language)
- **Cover Image**: Upload or select from media library
- **Cover Alt Text**: Image description for accessibility (translate for each language)
- **Author**: Author name (same for all languages)
- **Cover Credit**: Photo credit text (e.g., "Kuva: Juuso Korsimo")
- **Cover Credit URL**: Link to photographer/source
- **Category**: Category/section identifier
- **Tags**: List of tags/keywords
- **Event Start/End**: If the news is about a specific event
- **Event Location**: Location if news is event-related
- **Registration URL**: Link to registration/tickets

### i18n Field Behavior:

- **i18n: true** - Field is translatable (different content per language)
- **i18n: duplicate** - Field is the same across all languages (edit once, applies to all)

### Example News Post:

**Finnish version (welcome.fi.md):**

```yaml
---
title: Tervetuloa uusille sivuille
date: 2025-09-01
summary: Uudistimme etusivua ja lisäsimme uutisosuuden.
cover: /home-landing-2.jpg
coverAlt: Teekkarielämää Turussa
author: Testi Teekkari
coverCredit: 'Kuva: Juuso Korsimo'
postId: welcome-2025
---
Tämä on esimerkkijulkaisu...
```

**English version (welcome.en.md):**

```yaml
---
title: Welcome to the updated site
date: 2025-09-01
summary: We refreshed the homepage and added a News section.
cover: /home-landing-2.jpg
coverAlt: Teekkari culture in Turku
author: Testi Teekkari
coverCredit: 'Photo: Juuso Korsimo'
postId: welcome-2025
---
This is a sample post...
```

4. Switch between language tabs to fill in translated content
5. Click **"Publish"** to save all language versions

## Tips for Best Results

### For Events:

- Use descriptive IDs that include the year (easier to find later)
- Include timezone in dates (`+03:00` for Finnish time)
- Use tags consistently to help with filtering
- Add a description to provide context

### For News:

- Always fill in at least Finnish and Swedish versions
- Use the `postId` field to link language versions together
- Keep summaries short (1–2 sentences) for preview cards
- Upload cover images to `/public/images/` folder
- Include event details fields when announcing events

## Markdown Support

Both Events and News support full Markdown syntax:

```markdown
# Heading 1

## Heading 2

**Bold text**
_Italic text_

- List item 1
- List item 2

[Link text](https://example.com)

![Image alt text](/images/photo.jpg)
```

## Workflow

1. **Draft**: Save as draft to preview before publishing
2. **Publish**: Make content live on the website
3. **Edit**: Click on existing items to modify
4. **Delete**: Use the delete option carefully (cannot be undone easily)

## Troubleshooting

- **Images not showing?** Ensure they're uploaded to `/public/images/` and use path `/images/filename.jpg`
- **Event not appearing?** Check that `start` date is properly formatted
- **News missing translation?** Ensure all language versions have the same `postId`
- **Changes not visible?** The site needs to rebuild (happens automatically, may take 1-2 minutes)

## Local Development

To test CMS locally, you need to run TWO processes:

### Step 1: Start the Decap Proxy Server

In one terminal:

```bash
npm run cms:proxy
```

Or directly:

```bash
npx decap-server
```

This starts a proxy server on port 8081 that handles git operations locally.

### Step 2: Start Next.js Development Server

In a second terminal:

```bash
npm run dev
```

This starts your Next.js app (usually on port 3000).

### Step 3: Access the CMS

Open your browser and go to:

```
http://localhost:3000/admin/
```

**Important:** Access the admin through your Next.js dev server (port 3000), NOT through port 8081!

The `local_backend: true` setting in `config.yml` tells the CMS to use the proxy server running on port 8081 for file
operations, but you still access the CMS UI through your main Next.js app.

### Troubleshooting Local Development

- **"Cannot GET /admin"**: You're accessing the wrong port. Use `http://localhost:3000/admin/` not port 8081
- **CMS not loading**: Make sure BOTH servers are running (decap-server AND next dev)
- **Changes not saving**: Check that decap-server is running without errors
- **Port conflicts**: If port 8081 is busy, the decap-server will fail to start

## Architecture Notes

- **Events**: Single file per event, language specified in frontmatter
- **News**: Multiple files per post (one per language) linked by `postId`
- **Events API**: Reads from `_content/events/` via `lib/events/sources/local.ts`
- **News API**: Reads from `_content/news/` via `lib/news.ts`
