#!/bin/bash
# Take whatever image is on the clipboard and install it as one of the site's
# three pictures.
#
#   ./scripts/grab-clipboard.sh chevy
#   ./scripts/grab-clipboard.sh econoline
#   ./scripts/grab-clipboard.sh robot
#
# Copy the image (right-click in the browser or Photos, Copy Image; or ⌘C on
# the file in Finder), then run this. Rebuild when all three are in.
#
# Everything here ships with macOS. No installs.

set -euo pipefail
cd "$(dirname "$0")/.."

case "${1:-}" in
  chevy)     OUT=chevy-profile.jpg      ; WHAT="the Chevy, side profile" ;;
  econoline) OUT=econoline-shed.jpg     ; WHAT="the Econoline, in the shed" ;;
  robot)     OUT=chevy-robot-render.jpg ; WHAT="the generated robot render" ;;
  *)
    echo "usage: $0 <chevy|econoline|robot>" >&2
    echo >&2
    echo "Copy the image to the clipboard first, then run this." >&2
    exit 1 ;;
esac

# Refuse politely rather than writing a corrupt file if the clipboard holds
# text, a file path, or nothing at all.
if ! osascript -e 'clipboard info' 2>/dev/null | grep -q 'PNGf\|TIFF picture\|JPEG picture'; then
  echo "!! No image on the clipboard — it currently holds:" >&2
  osascript -e 'clipboard info' 2>/dev/null | head -1 >&2
  echo >&2
  echo "   Copy the image itself (Copy Image), not the file or a link." >&2
  exit 1
fi

mkdir -p public/img
TMP=$(mktemp -t groovan).png

osascript \
  -e "set f to open for access (POSIX file \"$TMP\") with write permission" \
  -e 'set eof f to 0' \
  -e 'write (the clipboard as «class PNGf») to f' \
  -e 'close access f'

sips -s format jpeg -s formatOptions 82 -Z 2000 "$TMP" --out "public/img/$OUT" >/dev/null
rm -f "$TMP"

DIMS=$(sips -g pixelWidth -g pixelHeight "public/img/$OUT" | awk '/pixel/{printf "%s ", $2}')
echo "Saved $WHAT -> public/img/$OUT (${DIMS%% })"

MISSING=""
for f in chevy-profile.jpg econoline-shed.jpg chevy-robot-render.jpg; do
  [ -f "public/img/$f" ] || MISSING="$MISSING $f"
done
if [ -n "$MISSING" ]; then
  echo "Still waiting on:$MISSING"
else
  echo "All three are in. Run: npm run build && git add public/img && git commit -m 'Add the photographs' && git push"
fi
