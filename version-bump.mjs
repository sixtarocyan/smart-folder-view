import fs from "fs";

const manifestPath = "manifest.json";
const versionsPath = "versions.json";
const packagePath = "package.json";

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const versions = JSON.parse(fs.readFileSync(versionsPath, "utf8"));
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));

if (!manifest.version || !manifest.minAppVersion) {
  throw new Error("manifest.json must include version and minAppVersion");
}

versions[manifest.version] = manifest.minAppVersion;
pkg.version = manifest.version;

fs.writeFileSync(versionsPath, JSON.stringify(versions, null, 2) + "\n");
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + "\n");