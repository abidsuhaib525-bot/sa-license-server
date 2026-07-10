# Changelog

## [3.9.0] - 2026-07-10

### Fixed
- History tab: switching back from History to Prompt view now restores the exact same layout (chips, action bar, file-upload section) instead of losing state
- Chips (bugs / errors / comments / etc.) no longer disappear after leaving and returning to the History tab
- Logout issue fixed — clean sign-out and re-login flow
- Removed leftover "Optimize with AI" button entirely (action bar + initial template)

### Enhanced
- Full UI overhaul: new Blue-Cyan theme, Space Grotesk font, pill-shaped buttons (24px radius), underline tabs, premium glow/hover effects
- Improved suggestion chips: 2 rows of 4, aligned grid, gradient borders, smooth hover lift
- File-upload / action bar repositioned above the suggestion chips for a cleaner flow
- Purged all remaining purple styling (text, buttons, tabs, badges, overlays)
- Heavy code obfuscation applied to protect source

## [3.8.6] - 2026-07-09

### Fixed
- File upload via drag-drop/paste not working (missing public_url assignment)
- Logout button missing from UI
- Sidepanel branding and logout functionality

### Removed
- Optimize with AI button
- Old Supabase-based update checking (replaced with Lovable API)
