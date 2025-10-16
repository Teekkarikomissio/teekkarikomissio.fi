# Multi-Language Events - CMS Guide

This guide explains how to use the updated multi-language event system in the Decap CMS admin panel.

## What Changed?

Events now support multiple languages. Instead of having one event file with a `lang` field, you now create separate
files for each language version.

## How Multi-Language Events Work

### File Structure

- **Old way**: `eldprowet-2027.md` with `lang: fi` in frontmatter
- **New way**: Three files:
    - `eldprowet-2027.fi.md`
    - `eldprowet-2027.en.md`
    - `eldprowet-2027.sv.md`

### In the CMS Interface

When you create or edit an event in the CMS, you'll now see **language tabs** at the top (just like News):

- 🇫🇮 Finnish
- 🇸🇪 Swedish
- 🇬🇧 English

## Creating a Multi-Language Event

### Step 1: Access Events

1. Navigate to `https://teekkarikomissio.fi/admin/`
2. Click **"Tapahtumat (Events)"** in the sidebar
3. Click **"New Tapahtumat (Events)"**

### Step 2: Fill in the Finnish Version

1. Start with the **Finnish tab** (default)
2. Fill in all fields:

#### Fields That MUST Be the Same Across All Languages:

- **Event ID** ⚠️ (e.g., `eldprowet-2027`) - This links all language versions together
- **Start Date/Time** - Event start time
- **End Date/Time** - Event end time
- **URL** - External link (if any)
- **All Day Event** - Toggle
- **Tags** - Event categories

#### Fields That Should Be Translated:

- **Title** - Event name in Finnish
- **Location** - Can be translated (e.g., "Turku" vs "Åbo")
- **Description** - Event details in Finnish

### Step 3: Add Swedish Translation

1. Click the **Swedish tab** at the top
2. Translate these fields:
    - **Title** (e.g., "Eldprowet 2027")
    - **Location** (e.g., "Åbo" instead of "Turku")
    - **Description** (full Swedish translation)
3. Other fields are automatically copied from Finnish

### Step 4: Add English Translation

1. Click the **English tab** at the top
2. Translate:
    - **Title**
    - **Location** (usually keep "Turku")
    - **Description**

### Step 5: Publish

Click **"Publish"** - this saves all three language versions at once!

## Example: Creating Eldprowet 2027

### Finnish Tab Content:

```
Event ID: eldprowet-2027
Title: Eldprowet 2027
Start: 2027-04-29T11:00:00.000+03:00
End: 2027-04-29T23:59:00.000+03:00
Location: Turku
All Day: Yes
Tags: eldprowet, rastikierros
Description:
---
Tervetuloa Eldprowetiin 2027! Tämä on historiallinen tapahtuma, 
jossa tuhannet teekkarit kokoontuvat Turkuun juhlimaan.
```

### Swedish Tab Content:

```
Event ID: eldprowet-2027 (auto-filled)
Title: Eldprowet 2027
Start: (auto-filled)
End: (auto-filled)
Location: Åbo
All Day: (auto-filled)
Tags: (auto-filled)
Description:
---
Välkommen till Eldprowet 2027! Detta är ett historiskt evenemang 
där tusentals teknologer samlas i Åbo för att fira.
```

### English Tab Content:

```
Event ID: eldprowet-2027 (auto-filled)
Title: Eldprowet 2027
Start: (auto-filled)
End: (auto-filled)
Location: Turku
All Day: (auto-filled)
Tags: (auto-filled)
Description:
---
Welcome to Eldprowet 2027! This is a historic event where 
thousands of engineering students gather in Turku to celebrate.
```

## Editing Existing Events

### Migrating Old Events

Old single-language events still work but won't have translations. To add translations:

1. Open the old event in CMS
2. You'll see it only has one language
3. Fill in the other language tabs
4. Publish - the system will create separate language files

### Editing Multi-Language Events

1. Open any existing event
2. Switch between language tabs to edit each version
3. Remember: Keep Event ID the same across all languages!
4. Publish to save changes

## Important Rules

### ✅ DO:

- Use the **same Event ID** for all language versions
- Translate titles and descriptions
- Keep dates and times consistent
- Use descriptive Event IDs (e.g., `eldprowet-2027`, not `event1`)
- Include the year in Event IDs

### ❌ DON'T:

- Change the Event ID between languages
- Use different start/end times for different languages
- Forget to fill in all three language versions
- Use spaces or special characters in Event IDs

## How It Appears on the Website

When users visit the website:

- **Finnish page** (`/fi/events`) shows Finnish events (`*.fi.md`)
- **Swedish page** (`/sv/events`) shows Swedish events (`*.sv.md`)
- **English page** (`/en/events`) shows English events (`*.en.md`)

Each event detail page automatically shows the correct language version based on the URL.

## Troubleshooting

### Event not showing on website?

- Check that the Event ID is the same across all language files
- Verify the start date is in the correct format
- Ensure you've published (not just saved as draft)

### Missing translation?

- Click on the event in CMS
- Switch to the missing language tab
- Fill in the translated content
- Publish

### Event appears in the wrong language?

- Check the filename extension in `_content/events/`
- Should be `event-id.{locale}.md` (e.g., `eldprowet-2027.fi.md`)

### Changes not appearing?

- The website rebuilds automatically but may take 1-2 minutes
- Check the Netlify/Vercel deployment logs if hosted

## Getting Help

- Report issues: Contact the web team
- Questions: Check the main [CMS Usage Guide](CMS_USAGE_GUIDE.md)

