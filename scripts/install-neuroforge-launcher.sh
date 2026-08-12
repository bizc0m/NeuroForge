#!/usr/bin/env bash
set -euo pipefail

APP="/Applications/NeuroForge Launcher.app"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

SCRIPT="$TMP/launcher.applescript"
cat > "$SCRIPT" <<'APPLESCRIPT'
on open location this_url
	set targetPath to my pathFromUrl(this_url)
	if targetPath is "" then return
	do shell script "/usr/bin/open " & quoted form of targetPath
end open location

on pathFromUrl(this_url)
	if this_url does not contain "path=" then return ""
	set AppleScript's text item delimiters to "path="
	set rawPath to text item 2 of this_url
	set AppleScript's text item delimiters to "&"
	set rawPath to text item 1 of rawPath
	set AppleScript's text item delimiters to ""
	return do shell script "/usr/bin/python3 -c " & quoted form of "import sys, urllib.parse; print(urllib.parse.unquote(sys.argv[1]))" & " " & quoted form of rawPath
end pathFromUrl
APPLESCRIPT

/usr/bin/osacompile -o "$APP" "$SCRIPT"

PLIST="$APP/Contents/Info.plist"
/usr/libexec/PlistBuddy -c "Set :CFBundleIdentifier com.bizc0m.neuroforge.launcher" "$PLIST" 2>/dev/null || \
  /usr/libexec/PlistBuddy -c "Add :CFBundleIdentifier string com.bizc0m.neuroforge.launcher" "$PLIST"
/usr/libexec/PlistBuddy -c "Delete :CFBundleURLTypes" "$PLIST" 2>/dev/null || true
/usr/libexec/PlistBuddy -c "Add :CFBundleURLTypes array" "$PLIST"
/usr/libexec/PlistBuddy -c "Add :CFBundleURLTypes:0 dict" "$PLIST"
/usr/libexec/PlistBuddy -c "Add :CFBundleURLTypes:0:CFBundleURLName string NeuroForge Launcher" "$PLIST"
/usr/libexec/PlistBuddy -c "Add :CFBundleURLTypes:0:CFBundleURLSchemes array" "$PLIST"
/usr/libexec/PlistBuddy -c "Add :CFBundleURLTypes:0:CFBundleURLSchemes:0 string neuroforge" "$PLIST"

/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister \
  -f "$APP" >/dev/null

echo "$APP"
