# Instrument Studio
A dark, interactive 3D music studio for exploring and playing instruments.

**Website:** https://lucidiscool.github.io/Instrument-Studio/

## Play
- **Alto saxophone:** Smithsonian scan of Charlie Parker's instrument, sampled sound, interactive keys.
- **B-flat trumpet:** detailed brass model, clickable valves, sampled trumpet sound, low/high registers.
- **Listen:** built-in arrangements ready to play, with optional MIDI import.
- **Create:** sheet composer, precise placement, pitch/duration edits, undo/redo, looping, tempo, local draft saving, MIDI export.
- **The family:** brass and woodwind sections; all nine saxophone family members remain listed.

## Development
Static HTML, CSS and JavaScript. Serve this folder over HTTP; no build or API key is required.
GitHub Pages publishes the root of main. All links and assets work under the repository path.

The studio uses exploratory note mappings. Samples have a finite sustain. Composer drafts are stored locally per instrument.

## Extending the collection
Instrument metadata lives in instruments.js. The alto and trumpet have separate viewer/model/studio modules. Listen and the composer are shared with instrument-specific catalogs, sound, transposition, MIDI program and draft storage. Add future instrument cards to about.html under the appropriate family.

## Credits
See credits.html, trumpet-credits.html and assets/models/README.md.
Third-party models and samples retain their documented licenses. This project originated from the separate Saxophone repository.
