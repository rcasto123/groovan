#!/bin/bash
# Put the two real photographs on the site.
#
#   ./scripts/add-photos.sh <chevy-photo> <econoline-photo>
#
# Takes any two image files — JPEG, PNG, HEIC straight off a phone — converts
# and resizes them, drops them in public/img under the names the site expects,
# rebuilds, and pushes. Netlify picks up the push and the "PHOTO PENDING"
# plates are gone a minute later.
#
# Uses sips, which ships with macOS. No installs.

set -euo pipefail
cd "$(dirname "$0")/.."

if [ $# -lt 2 ] || [ $# -gt 3 ]; then
  echo "usage: $0 <chevy-photo> <econoline-photo> [robot-render]" >&2
  echo >&2
  echo "  chevy-photo      the finished Chevy, side profile, sunburst livery" >&2
  echo "  econoline-photo  the Econoline, rear three-quarter, inside the shed" >&2
  echo "  robot-render     optional: the generated robot image. Goes on the" >&2
  echo "                   story page stamped as generated, not photographed." >&2
  echo >&2
  echo "Tip: type the command, then drag each file from Finder into the" >&2
  echo "terminal window — that pastes its full path for you." >&2
  exit 1
fi

place() {
  local input="$1" out="public/img/$2" label="$3"

  [ -f "$input" ] || { echo "!! not a file: $input" >&2; exit 1; }

  mkdir -p public/img
  # sips writes JPEG regardless of what came in, HEIC included
  sips -s format jpeg -s formatOptions 82 -Z 2000 "$input" --out "$out" >/dev/null
  local dims
  dims=$(sips -g pixelWidth -g pixelHeight "$out" | awk '/pixel/{printf "%s ", $2}')
  echo "  ${label}: $(basename "$input")  ->  $out  (${dims%% })"
}

echo "Placing photographs:"
place "$1" chevy-profile.jpg   "Chevy    "
place "$2" econoline-shed.jpg  "Econoline"
[ $# -eq 3 ] && place "$3" chevy-robot-render.jpg "Render   "

echo
echo "Building..."
npm run build >/dev/null
echo "  built — plates replaced by the real photographs"

if [ -n "$(git status --porcelain public/img)" ]; then
  git add public/img
  git commit -q -m "Add the photographs of both vans"
  git push -q origin main
  echo
  echo "Pushed. Netlify is building; https://groovan.org will have them shortly."
else
  echo
  echo "Nothing changed — the files were already identical."
fi
