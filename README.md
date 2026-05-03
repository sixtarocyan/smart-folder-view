# Smart Folder View

Smart Folder View is an Obsidian plugin that turns a folder of notes into an interactive dashboard. It lets you build reusable pages with timeline and board layouts, metadata-based filters, stable color mapping, drag sorting, and saved presets.

## Features

- Build saved dashboard pages from any folder in your vault.
- Switch between timeline view and board view.
- Filter notes by frontmatter fields with multi-select controls.
- Keep page state with saved profiles, presets, and last-opened page memory.
- Drag cards to reorder items in timeline and board layouts.
- Update ordering only, or update ordering together with a target field value.
- Undo the last drag action.
- Export a page definition back into your vault.
- Use Chinese or English UI.
- Configure generated card colors from a chosen metadata field.

## Commands

- Create Smart Folder Page
- Manage Saved Pages
- Open Last Page
- Export Page

Command labels follow the plugin UI language and may appear in Chinese or English.

## How It Works

Each saved page stores:

- a source folder
- an optional template file used to infer fields
- a color field
- a sort field and sort direction
- a set of display fields
- a preferred layout mode
- an optional board grouping field

The plugin opens a dedicated custom view and renders matching notes as cards. Filter state, presets, and manual ordering are persisted locally for each page.

## Installation

### Community Plugins

After approval and publication, install Smart Folder View from Obsidian's Community Plugins browser.

### Manual Installation

1. Open your vault's plugin folder: `.obsidian/plugins/`.
2. Create a folder named `smart-folder-view`.
3. Copy `main.js`, `manifest.json`, and `styles.css` into that folder.
4. Restart Obsidian or reload plugins.
5. Enable Smart Folder View in Community Plugins.

## Development Notes

- Runtime entry: `main.js`
- Release metadata: `manifest.json`
- Version compatibility map: `versions.json`
- Local state file: `data.json` (not a release asset)

## Release Checklist

1. Update `manifest.json` version and minimum compatible Obsidian version.
2. Add the same version to `versions.json`.
3. Create a GitHub release whose tag exactly matches the plugin version, for example `0.1.0`.
4. Upload `main.js`, `manifest.json`, and `styles.css` to the release assets.
5. Submit the repository to `obsidianmd/obsidian-releases` by adding an entry to `community-plugins.json`.

## License

MIT