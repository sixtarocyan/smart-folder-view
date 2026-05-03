var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/main.ts
var obsidian = __toESM(require("obsidian"));
var VIEW_TYPE = "smart-folder-view";
var FILTER_STORAGE_PREFIX = "smart-folder-view-filter:";
var FILTER_PRESET_STORAGE_PREFIX = "smart-folder-view-presets:";
var MANUAL_ORDER_STORAGE_PREFIX = "smart-folder-view-manual-order:";
var EMPTY_OPTION_VALUE = "__SFV_EMPTY__";
var DEFAULT_COLOR_CONFIG = {
  saturationBase: 55,
  saturationRange: 20,
  lightnessBase: 44,
  lightnessRange: 14,
  fallbackColor: "var(--interactive-accent)"
};
var I18N = {
  zh: {
    title: "Smart Folder View",
    openBuilder: "\u65B0\u5EFA Smart Folder \u9875\u9762",
    openManager: "\u7BA1\u7406\u5DF2\u4FDD\u5B58\u9875\u9762",
    openLast: "\u6253\u5F00\u4E0A\u6B21\u9875\u9762",
    noProfile: "\u8FD8\u6CA1\u6709\u4FDD\u5B58\u4EFB\u4F55\u9875\u9762\uFF0C\u8BF7\u5148\u65B0\u5EFA\u3002",
    setupTitle: "\u914D\u7F6E\u9875\u9762",
    setupDesc: "\u9875\u9762\u8BBE\u7F6E\u7528\u4E8E\u951A\u5B9A\u6570\u636E\u6765\u6E90\uFF1A\u6587\u4EF6\u5939\u3001\u6A21\u677F\u6587\u4EF6\u3001\u53EF\u7B5B\u9009\u5C5E\u6027\u3002\u8BBE\u7F6E\u540E\u5148\u9884\u89C8\uFF0C\u518D\u4FDD\u5B58\u3002",
    profileName: "\u9875\u9762\u540D\u79F0",
    sourceFolder: "\u6765\u6E90\u6587\u4EF6\u5939",
    sourceFolderDesc: "\u4ECE\u8BE5\u6587\u4EF6\u5939\u8BFB\u53D6\u5361\u7247\u6570\u636E",
    templateFile: "\u6A21\u677F\u6587\u4EF6",
    templateFileDesc: "\u4ECE\u5168\u5E93\u9009\u62E9\u6A21\u677F\u6587\u4EF6\u8BFB\u53D6\u5143\u6570\u636E\u5B57\u6BB5\uFF08\u5E76\u878D\u5408\u8BE5\u6587\u4EF6\u5939\u5171\u7528\u5B57\u6BB5\uFF09",
    colorField: "\u989C\u8272\u5B57\u6BB5",
    sortField: "\u6392\u5E8F\u5B57\u6BB5",
    displayFields: "\u5C55\u793A\u5B57\u6BB5",
    sortOrder: "\u6392\u5E8F\u65B9\u5411",
    viewMode: "\u89C6\u56FE\u6A21\u5F0F",
    boardField: "\u770B\u677F\u5206\u7EC4\u5B57\u6BB5",
    preview: "\u9884\u89C8",
    saveAndOpen: "\u4FDD\u5B58\u5E76\u6253\u5F00",
    choose: "(\u8BF7\u9009\u62E9)",
    rootFolder: "(\u6839\u6587\u4EF6\u5939)",
    timeline: "\u65F6\u95F4\u8F74",
    board: "\u770B\u677F",
    asc: "\u5347\u5E8F\uFF08\u65E7\u2192\u65B0\uFF09",
    desc: "\u5012\u5E8F\uFF08\u65B0\u2192\u65E7\uFF09",
    savePage: "\u4FDD\u5B58\u9875\u9762",
    updatePage: "\u66F4\u65B0\u9875\u9762",
    openBuilderBtn: "\u65B0\u5EFA\u9875\u9762",
    openManagerBtn: "\u9875\u9762\u7BA1\u7406",
    startActionTitle: "Smart Folder",
    startActionDesc: "\u8BF7\u9009\u62E9\u64CD\u4F5C\uFF1A",
    startOpenPage: "\u6253\u5F00\u9875\u9762",
    startNewPage: "\u65B0\u5EFA\u9875\u9762",
    pageSaved: "\u9875\u9762\u5DF2\u4FDD\u5B58",
    pageUpdated: "\u9875\u9762\u5DF2\u66F4\u65B0",
    saveFailed: "\u9875\u9762\u4FDD\u5B58\u5931\u8D25",
    pageNamePrompt: "\u8BF7\u8F93\u5165\u9875\u9762\u540D\u79F0",
    managerTitle: "\u5DF2\u4FDD\u5B58\u9875\u9762",
    open: "\u6253\u5F00",
    edit: "\u7F16\u8F91",
    delete: "\u5220\u9664",
    deleteConfirm: "\u786E\u8BA4\u5220\u9664\u9875\u9762\uFF1A{{name}}\uFF1F",
    noFiles: '\u6587\u4EF6\u5939 "{{folder}}" \u91CC\u6682\u65E0\u7B14\u8BB0\u3002',
    matched: "\u5339\u914D\u5230 {{count}} \u6761\u8BB0\u5F55",
    noMatch: "\u6CA1\u6709\u5339\u914D\u7B5B\u9009\u6761\u4EF6\u7684\u7B14\u8BB0\u3002",
    preset: "\u9884\u8BBE",
    presetScopeDesc: "\u9884\u8BBE\u53EA\u4FDD\u5B58\u5F53\u524D\u9875\u9762\u4E0B\u7684\u53EF\u53D8\u89C6\u56FE\u72B6\u6001\uFF1A\u7B5B\u9009\u3001\u6392\u5E8F\u3001\u663E\u793A\u6A21\u5F0F\uFF08\u65F6\u95F4\u8F74/\u770B\u677F\uFF09\u3002",
    noPreset: "(\u4E0D\u4F7F\u7528\u9884\u8BBE)",
    savePreset: "\u4FDD\u5B58\u9884\u8BBE",
    delPreset: "\u5220\u9664\u9884\u8BBE",
    presetPrompt: "\u9884\u8BBE\u540D\u79F0",
    presetNameRequired: "\u8BF7\u8F93\u5165\u9884\u8BBE\u540D\u79F0",
    presetSaveHint: "\u8BF4\u660E\uFF1A\u540D\u79F0\u4E0D\u53D8=\u8986\u76D6\u66F4\u65B0\u5F53\u524D\u9884\u8BBE\uFF1B\u540D\u79F0\u6539\u4E3A\u65B0\u540D\u5B57=\u53E6\u5B58\u4E3A\u65B0\u9884\u8BBE\uFF0C\u65E7\u9884\u8BBE\u4FDD\u6301\u4E0D\u53D8\u3002",
    clear: "\u6E05\u7A7A",
    noneSelected: "(\u5168\u4E0D\u9009)",
    allText: "(\u5168\u90E8)",
    selectAll: "\u5168\u9009",
    selectNone: "\u5168\u4E0D\u9009",
    selected: "\u5DF2\u9009 {{count}} \u9879",
    allWhenEmpty: "\u672A\u9009\u62E9\uFF0C\u7B49\u540C\u4E8E\u5168\u90E8",
    search: "\u641C\u7D22\u9009\u9879...",
    saveOrder: "\u4FDD\u5B58\u5F53\u524D\u6392\u5E8F",
    saveOrderDone: "\u5DF2\u4FDD\u5B58\u5F53\u524D\u987A\u5E8F",
    resetOrder: "\u6062\u590D\u9ED8\u8BA4\u987A\u5E8F",
    resetOrderDone: "\u5DF2\u6062\u590D\u9ED8\u8BA4\u987A\u5E8F",
    undoLastAction: "\u64A4\u9500\u4E0A\u4E00\u6B65",
    undoDone: "\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",
    undoNone: "\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C",
    boardUnset: "(\u672A\u8BBE\u7F6E)",
    emptyValue: "\u7A7A\u503C",
    moveAsk: '\u8DE8\u5217\u62D6\u62FD\uFF1A\u662F\u5426\u5C06 {{field}} \u66F4\u65B0\u4E3A "{{value}}"\uFF1F\n\u786E\u5B9A=\u81EA\u52A8\u63A8\u8350\uFF0C\u53D6\u6D88=\u624B\u52A8\u8F93\u5165',
    moveManual: "\u8BF7\u8F93\u5165 {{field}} \u65B0\u503C\uFF08\u7559\u7A7A\u6E05\u9664\uFF09\uFF1A",
    moveDone: "\u5C5E\u6027\u5DF2\u66F4\u65B0\uFF1A{{field}} = {{value}}",
    moveFail: "\u5C5E\u6027\u66F4\u65B0\u5931\u8D25",
    timelineMoveTitle: "\u65F6\u95F4\u8F74\u62D6\u52A8",
    timelineMoveChoice: "\u8BF7\u9009\u62E9\u62D6\u52A8\u540E\u7684\u5904\u7406\u65B9\u5F0F\uFF08\u5B57\u6BB5\uFF1A{{field}}\uFF09",
    timelineMoveCancel: "\u53D6\u6D88\uFF08\u4E0D\u4FDD\u5B58\u4FEE\u6539\uFF09",
    timelineMoveOrderOnly: "\u4EC5\u66F4\u65B0\u65F6\u95F4\u8F74\u987A\u5E8F",
    timelineMoveOrderAndProp: "\u66F4\u65B0\u65F6\u95F4\u8F74\u548C\u5C5E\u6027",
    timelineUpdatePrompt: "\u8BF7\u8F93\u5165 {{field}} \u65B0\u503C\uFF08\u7559\u7A7A\u6E05\u9664\uFF09\uFF1A",
    timelineMoveDone: "\u5DF2\u66F4\u65B0\u65F6\u95F4\u8F74\u987A\u5E8F",
    timelineMoveNoChange: "\u5DF2\u53D6\u6D88\uFF0C\u672A\u4FDD\u5B58\u4FEE\u6539",
    boardMoveTitle: "\u770B\u677F\u62D6\u52A8",
    boardMoveChoice: "\u8BF7\u9009\u62E9\u62D6\u52A8\u540E\u7684\u5904\u7406\u65B9\u5F0F\uFF08\u5B57\u6BB5\uFF1A{{field}}\uFF09",
    boardMoveCancel: "\u53D6\u6D88\uFF08\u4E0D\u4FDD\u5B58\u4FEE\u6539\uFF09",
    boardMoveOrderOnly: "\u4EC5\u66F4\u65B0\u770B\u677F\u987A\u5E8F",
    boardMoveOrderAndProp: "\u66F4\u65B0\u770B\u677F\u987A\u5E8F\u548C\u5C5E\u6027",
    boardMoveDone: "\u5DF2\u66F4\u65B0\u770B\u677F\u987A\u5E8F",
    boardMoveNoChange: "\u5DF2\u53D6\u6D88\uFF0C\u672A\u4FDD\u5B58\u4FEE\u6539",
    savePreviewOnClose: "\u5F53\u524D\u4E3A\u9884\u89C8\u914D\u7F6E\uFF0C\u5173\u95ED\u524D\u662F\u5426\u4FDD\u5B58\u4E3A\u9875\u9762\uFF1F",
    refreshPreview: "\u5237\u65B0\u9884\u89C8",
    refreshPreviewDone: "\u5361\u7247\u9884\u89C8\u5DF2\u5237\u65B0",
    exportPage: "\u5BFC\u51FA\u9875\u9762",
    exportFolderTitle: "\u9009\u62E9\u5BFC\u51FA\u6587\u4EF6\u5939",
    exportFolderDesc: "\u8BF7\u9009\u62E9\u5BFC\u51FA\u5230\u54EA\u4E2A\u6587\u4EF6\u5939\uFF08\u53EF\u9009\u6839\u6587\u4EF6\u5939\uFF09",
    exportFolderConfirm: "\u5BFC\u51FA\u5230\u6B64\u6587\u4EF6\u5939",
    exportPageDone: "\u9875\u9762\u914D\u7F6E\u5DF2\u5BFC\u51FA\uFF1A{{path}}",
    exportPageFailed: "\u9875\u9762\u5BFC\u51FA\u5931\u8D25",
    exportBlockTitle: "Smart Folder \u9875\u9762\u5BFC\u51FA",
    exportBlockDesc: "\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u53EF\u6253\u5F00\u8BE5\u9875\u9762\u914D\u7F6E\u3002",
    exportBlockOpen: "\u6253\u5F00\u6B64\u9875\u9762",
    exportBlockImport: "\u5BFC\u5165\u5E76\u4FDD\u5B58\u5230\u9875\u9762\u7BA1\u7406",
    exportBlockInvalid: "\u5BFC\u51FA\u5757\u89E3\u6790\u5931\u8D25",
    colorSettings: "\u989C\u8272\u8BBE\u7F6E",
    saturationBase: "\u9971\u548C\u5EA6\u57FA\u7EBF",
    saturationRange: "\u9971\u548C\u5EA6\u6CE2\u52A8",
    lightnessBase: "\u4EAE\u5EA6\u57FA\u7EBF",
    lightnessRange: "\u4EAE\u5EA6\u6CE2\u52A8",
    fallbackColor: "\u9ED8\u8BA4\u989C\u8272",
    resetDefault: "\u6062\u590D\u9ED8\u8BA4",
    languageMode: "\u754C\u9762\u8BED\u8A00",
    languageAuto: "\u81EA\u52A8\uFF08\u8DDF\u968F Obsidian\uFF09",
    languageZh: "\u4E2D\u6587",
    languageEn: "English",
    languageModeDesc: "\u9ED8\u8BA4\u81EA\u52A8\u5339\u914D\uFF1B\u4F60\u4E5F\u53EF\u4EE5\u624B\u52A8\u56FA\u5B9A\u8BED\u8A00\u3002"
  },
  en: {
    title: "Smart Folder View",
    openBuilder: "Create Smart Folder page",
    openManager: "Manage saved pages",
    openLast: "Open last page",
    noProfile: "No saved pages yet. Please create one first.",
    setupTitle: "Configure page",
    setupDesc: "Page settings anchor data source: folder, template file, and filterable fields. Preview first, then save.",
    profileName: "Page name",
    sourceFolder: "Source folder",
    sourceFolderDesc: "Load cards from this folder",
    templateFile: "Template file",
    templateFileDesc: "Choose a template file from the whole vault; fields come from it plus common folder fields",
    colorField: "Color field",
    sortField: "Sort field",
    displayFields: "Display fields",
    sortOrder: "Sort order",
    viewMode: "View mode",
    boardField: "Board group field",
    preview: "Preview",
    saveAndOpen: "Save and Open",
    choose: "(Choose)",
    rootFolder: "(Vault Root)",
    timeline: "Timeline",
    board: "Board",
    asc: "Ascending (old -> new)",
    desc: "Descending (new -> old)",
    savePage: "Save page",
    updatePage: "Update page",
    openBuilderBtn: "Create page",
    openManagerBtn: "Page manager",
    startActionTitle: "Smart Folder",
    startActionDesc: "Choose an action:",
    startOpenPage: "Open page",
    startNewPage: "Create page",
    pageSaved: "Page saved",
    pageUpdated: "Page updated",
    saveFailed: "Failed to save page",
    pageNamePrompt: "Enter page name",
    managerTitle: "Saved pages",
    open: "Open",
    edit: "Edit",
    delete: "Delete",
    deleteConfirm: "Delete page: {{name}}?",
    noFiles: 'No notes found in "{{folder}}".',
    matched: "{{count}} notes matched",
    noMatch: "No notes match current filters.",
    preset: "Preset",
    presetScopeDesc: "Presets only save mutable view state in this page: filters, sort, and view mode (timeline/board).",
    noPreset: "(No preset)",
    savePreset: "Save preset",
    delPreset: "Delete preset",
    presetPrompt: "Preset name",
    presetNameRequired: "Please enter a preset name",
    presetSaveHint: "Rule: same name = update this preset; new name = save as a new preset and keep the old one unchanged.",
    clear: "Clear",
    noneSelected: "(None selected)",
    allText: "(All)",
    selectAll: "Select all",
    selectNone: "Select none",
    selected: "{{count}} selected",
    allWhenEmpty: "Nothing selected, equivalent to all",
    search: "Search options...",
    saveOrder: "Save current order",
    saveOrderDone: "Current order saved",
    resetOrder: "Reset default order",
    resetOrderDone: "Default order restored",
    undoLastAction: "Undo last action",
    undoDone: "Last action undone",
    undoNone: "Nothing to undo",
    boardUnset: "(Unset)",
    emptyValue: "empty",
    moveAsk: 'Cross-column move: update {{field}} to "{{value}}"?\nOK=recommended, Cancel=manual input',
    moveManual: "Enter new value for {{field}} (empty to clear):",
    moveDone: "Updated: {{field}} = {{value}}",
    moveFail: "Failed to update property",
    timelineMoveTitle: "Timeline move",
    timelineMoveChoice: "Choose how to apply this move (field: {{field}})",
    timelineMoveCancel: "Cancel (do not save)",
    timelineMoveOrderOnly: "Update timeline order only",
    timelineMoveOrderAndProp: "Update timeline order and property",
    timelineUpdatePrompt: "Enter new value for {{field}} (empty to clear):",
    timelineMoveDone: "Timeline order updated",
    timelineMoveNoChange: "Canceled, no changes saved",
    boardMoveTitle: "Board move",
    boardMoveChoice: "Choose how to apply this move (field: {{field}})",
    boardMoveCancel: "Cancel (do not save)",
    boardMoveOrderOnly: "Update board order only",
    boardMoveOrderAndProp: "Update board order and property",
    boardMoveDone: "Board order updated",
    boardMoveNoChange: "Canceled, no changes saved",
    savePreviewOnClose: "This is a preview configuration. Save it before closing?",
    refreshPreview: "Refresh preview",
    refreshPreviewDone: "Card preview refreshed",
    exportPage: "Export page",
    exportFolderTitle: "Choose export folder",
    exportFolderDesc: "Select where to export (including vault root).",
    exportFolderConfirm: "Export here",
    exportPageDone: "Page config exported: {{path}}",
    exportPageFailed: "Failed to export page",
    exportBlockTitle: "Smart Folder page export",
    exportBlockDesc: "Click the button below to open this page configuration.",
    exportBlockOpen: "Open this page",
    exportBlockImport: "Import and save to page manager",
    exportBlockInvalid: "Failed to parse export block",
    colorSettings: "Color settings",
    saturationBase: "Saturation base",
    saturationRange: "Saturation range",
    lightnessBase: "Lightness base",
    lightnessRange: "Lightness range",
    fallbackColor: "Fallback color",
    resetDefault: "Reset default",
    languageMode: "UI language",
    languageAuto: "Auto (follow Obsidian)",
    languageZh: "Chinese",
    languageEn: "English",
    languageModeDesc: "Auto by default; you can also force a fixed language."
  }
};
function tpl(text, vars) {
  if (!vars) return text;
  return text.replace(/\{\{(\w+)\}\}/g, (_m, key) => String(vars[key] ?? ""));
}
function detectLanguage() {
  try {
    const locale = window.moment?.locale?.() || "";
    if (locale.toLowerCase().startsWith("zh")) return "zh";
  } catch {
  }
  return "en";
}
function newId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function colorForValue(value, config) {
  if (!value) return null;
  const hash = hashCode(value);
  const h = hash % 360;
  const s = clamp(config.saturationBase + hash % Math.max(1, config.saturationRange), 20, 90);
  const l = clamp(config.lightnessBase + hash % Math.max(1, config.lightnessRange), 20, 80);
  return `hsl(${h} ${s}% ${l}%)`;
}
function uniqueSorted(items) {
  return [...new Set(items)].sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
}
function toFlatArray(value) {
  if (value == null) return [];
  if (Array.isArray(value)) return value.map((v) => String(v).trim()).filter(Boolean);
  return [String(value).trim()].filter(Boolean);
}
function getFrontmatterValues(cache, key) {
  if (!cache?.frontmatter) return [];
  return toFlatArray(cache.frontmatter[key]);
}
function getAllFrontmatterKeys(caches) {
  const keys = /* @__PURE__ */ new Set();
  for (const cache of caches) {
    if (cache?.frontmatter) {
      for (const key of Object.keys(cache.frontmatter)) {
        if (key !== "position") keys.add(key);
      }
    }
  }
  return uniqueSorted([...keys]);
}
function stripFrontmatter(text) {
  return text.replace(/^---\n[\s\S]*?\n---\n?/, "").trim();
}
function parseDateLike(value) {
  const raw = String(value || "").trim();
  if (!raw) return null;
  const asTimestamp = Date.parse(raw);
  if (Number.isFinite(asTimestamp)) return asTimestamp;
  const normalized = raw.replace(/[年./]/g, "-").replace(/月/g, "-").replace(/日/g, "").replace(/\s+/g, " ").trim();
  const ymd = normalized.match(/(\d{4})-(\d{1,2})(?:-(\d{1,2}))?/);
  if (ymd) return Date.UTC(Number(ymd[1]), Math.max(1, Number(ymd[2])) - 1, Math.max(1, Number(ymd[3] || 1)));
  const year = normalized.match(/\b(\d{3,4})\b/);
  if (year) return Date.UTC(Number(year[1]), 0, 1);
  return null;
}
function parseSortValue(value) {
  const raw = String(value == null ? "" : value).trim();
  const ts = parseDateLike(raw);
  if (ts != null) return { kind: "number", value: ts, raw };
  const numericText = raw.replace(/,/g, "");
  if (/^-?\d+(\.\d+)?$/.test(numericText)) return { kind: "number", value: Number(numericText), raw };
  return { kind: "string", value: raw, raw };
}
function clonePreset(preset) {
  return {
    name: String(preset?.name || ""),
    enabledFilters: Array.isArray(preset?.enabledFilters) ? [...preset.enabledFilters] : [],
    selectedByAttr: JSON.parse(JSON.stringify(preset?.selectedByAttr || {})),
    sortOrder: preset?.sortOrder === "asc" ? "asc" : "desc",
    viewMode: preset?.viewMode === "board" ? "board" : "timeline"
  };
}
function clonePresetList(presets) {
  return (Array.isArray(presets) ? presets : []).map(clonePreset);
}
function cloneSelectedByAttr(state) {
  return JSON.parse(JSON.stringify(state || {}));
}
function makeSelectSearchable(selectEl, placeholder) {
  void selectEl;
  void placeholder;
}
var SetupModal = class extends obsidian.Modal {
  constructor(app, plugin, profile) {
    super(app);
    this.plugin = plugin;
    this.hasPreviewedDraft = false;
    this.skipCloseSavePrompt = false;
    const folders = this.plugin.getFolderOptions();
    const sourceFolder = profile?.sourceFolder || folders[0] || "";
    const template = profile?.templateFile || this.plugin.getTemplateFileOptions()[0] || "";
    this.draft = profile ? { ...profile, displayFields: [...profile.displayFields] } : {
      id: newId(),
      name: "",
      sourceFolder,
      templateFile: template,
      colorField: "",
      displayFields: [],
      sortField: "",
      sortOrder: "desc",
      viewMode: "timeline",
      boardField: "\u72B6\u6001",
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
  }
  render() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("h2", { text: this.plugin.t("setupTitle") });
    contentEl.createEl("p", { text: this.plugin.t("setupDesc") });
    const folders = this.plugin.getFolderOptions();
    if (!folders.includes(this.draft.sourceFolder)) this.draft.sourceFolder = folders[0] || "";
    const templates = this.plugin.getTemplateFileOptions();
    if (!templates.includes(this.draft.templateFile)) this.draft.templateFile = templates[0] || "";
    const fieldOptions = this.plugin.getFieldCandidates(this.draft.sourceFolder, this.draft.templateFile);
    if (!fieldOptions.includes(this.draft.colorField)) this.draft.colorField = fieldOptions[0] || "";
    if (!fieldOptions.includes(this.draft.sortField)) this.draft.sortField = fieldOptions[0] || "";
    if (!fieldOptions.includes(this.draft.boardField)) {
      this.draft.boardField = fieldOptions.includes("\u72B6\u6001") ? "\u72B6\u6001" : fieldOptions[0] || "";
    }
    this.draft.displayFields = this.draft.displayFields.filter((k) => fieldOptions.includes(k));
    if (!this.draft.displayFields.length) this.draft.displayFields = fieldOptions.slice(0, 4);
    new obsidian.Setting(contentEl).setName(this.plugin.t("profileName")).addText((t) => t.setValue(this.draft.name).onChange((v) => {
      this.draft.name = v.trim();
    }));
    new obsidian.Setting(contentEl).setName(this.plugin.t("sourceFolder")).setDesc(this.plugin.t("sourceFolderDesc")).addDropdown((d) => {
      for (const f of folders) d.addOption(f, f || this.plugin.t("rootFolder"));
      d.setValue(this.draft.sourceFolder || "");
      makeSelectSearchable(d.selectEl, this.plugin.t("search"));
      d.onChange((v) => {
        this.draft.sourceFolder = v;
        this.render();
      });
    });
    new obsidian.Setting(contentEl).setName(this.plugin.t("templateFile")).setDesc(this.plugin.t("templateFileDesc")).addDropdown((d) => {
      d.addOption("", this.plugin.t("choose"));
      for (const f of templates) d.addOption(f, f);
      d.setValue(this.draft.templateFile || "");
      makeSelectSearchable(d.selectEl, this.plugin.t("search"));
      d.onChange((v) => {
        this.draft.templateFile = v;
        this.render();
      });
    });
    new obsidian.Setting(contentEl).setName(this.plugin.t("colorField")).addDropdown((d) => {
      d.addOption("", this.plugin.t("choose"));
      for (const k of fieldOptions) d.addOption(k, k);
      d.setValue(this.draft.colorField || "");
      makeSelectSearchable(d.selectEl, this.plugin.t("search"));
      d.onChange((v) => {
        this.draft.colorField = v;
      });
    });
    new obsidian.Setting(contentEl).setName(this.plugin.t("sortField")).addDropdown((d) => {
      d.addOption("", this.plugin.t("choose"));
      for (const k of fieldOptions) d.addOption(k, k);
      d.setValue(this.draft.sortField || "");
      makeSelectSearchable(d.selectEl, this.plugin.t("search"));
      d.onChange((v) => {
        this.draft.sortField = v;
      });
    });
    new obsidian.Setting(contentEl).setName(this.plugin.t("displayFields")).addText((t) => t.setValue(this.draft.displayFields.join(", ")).onChange((v) => {
      this.draft.displayFields = v.split(",").map((s) => s.trim()).filter(Boolean);
    }));
    new obsidian.Setting(contentEl).setName(this.plugin.t("sortOrder")).addDropdown((d) => {
      d.addOption("desc", this.plugin.t("desc"));
      d.addOption("asc", this.plugin.t("asc"));
      d.setValue(this.draft.sortOrder);
      makeSelectSearchable(d.selectEl, this.plugin.t("search"));
      d.onChange((v) => {
        this.draft.sortOrder = v;
      });
    });
    new obsidian.Setting(contentEl).setName(this.plugin.t("viewMode")).addDropdown((d) => {
      d.addOption("timeline", this.plugin.t("timeline"));
      d.addOption("board", this.plugin.t("board"));
      d.setValue(this.draft.viewMode);
      makeSelectSearchable(d.selectEl, this.plugin.t("search"));
      d.onChange((v) => {
        this.draft.viewMode = v === "board" ? "board" : "timeline";
        this.render();
      });
    });
    new obsidian.Setting(contentEl).setName(this.plugin.t("boardField")).addDropdown((d) => {
      d.addOption("", this.plugin.t("choose"));
      for (const k of fieldOptions) d.addOption(k, k);
      d.setValue(this.draft.boardField || "");
      makeSelectSearchable(d.selectEl, this.plugin.t("search"));
      d.onChange((v) => {
        this.draft.boardField = v;
      });
    });
    const action = contentEl.createEl("div");
    action.addClass("sfv-setup-action");
    action.createEl("button", { text: this.plugin.t("preview") }).addEventListener("click", () => {
      this.plugin.setDraftProfile(this.draft);
      void this.plugin.activateView();
      this.hasPreviewedDraft = true;
    });
    const saveBtn = action.createEl("button", { text: this.plugin.t("saveAndOpen") });
    saveBtn.addClass("mod-cta");
    saveBtn.addEventListener("click", () => {
      void (async () => {
        await this.plugin.saveProfile(this.draft, true, false);
        await this.plugin.activateView({ profile: this.draft });
        this.skipCloseSavePrompt = true;
        this.close();
      })();
    });
  }
  onOpen() {
    this.render();
  }
  onClose() {
    this.contentEl.empty();
    if (this.skipCloseSavePrompt || !this.hasPreviewedDraft) return;
    void askConfirm(this.app, this.plugin.t("savePreviewOnClose")).then((ok) => {
      if (!ok) return;
      void this.plugin.saveProfile(this.draft, true, false).then(
        () => void this.plugin.activateView({ profile: this.draft })
      );
    });
  }
};
var TextInputModal = class extends obsidian.Modal {
  constructor(app, title, placeholder, initial, onSubmit, hint) {
    super(app);
    this.titleText = title;
    this.hintText = hint;
    this.placeholderText = placeholder;
    this.initialValue = initial;
    this.onSubmitValue = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("h3", { text: this.titleText });
    if (this.hintText) contentEl.createEl("p", { text: this.hintText }).addClass("sfv-modal-hint");
    const input = contentEl.createEl("input");
    input.type = "text";
    input.placeholder = this.placeholderText;
    input.value = this.initialValue;
    input.addClass("sfv-modal-input");
    const action = contentEl.createEl("div");
    action.addClass("sfv-modal-action");
    action.createEl("button", { text: "Cancel" }).addEventListener("click", () => {
      this.onSubmitValue(null);
      this.close();
    });
    const okBtn = action.createEl("button", { text: "OK" });
    okBtn.addClass("mod-cta");
    okBtn.addEventListener("click", () => {
      this.onSubmitValue(input.value.trim());
      this.close();
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.onSubmitValue(input.value.trim());
        this.close();
      }
    });
    window.setTimeout(() => input.focus(), 0);
  }
  onClose() {
    this.contentEl.empty();
  }
};
function askTextInput(app, title, placeholder, initial, hint) {
  return new Promise((resolve) => {
    new TextInputModal(app, title, placeholder, initial, resolve, hint).open();
  });
}
var ThreeChoiceModal = class extends obsidian.Modal {
  constructor(app, title, message, labels, onSubmit) {
    super(app);
    this.titleText = title;
    this.messageText = message;
    this.labels = labels;
    this.onSubmitValue = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("h3", { text: this.titleText });
    contentEl.createEl("p", { text: this.messageText }).addClass("sfv-modal-hint");
    const action = contentEl.createEl("div");
    action.addClass("sfv-modal-action");
    const addChoice = (key, label, isCta = false) => {
      if (!label) return;
      const btn = action.createEl("button", { text: label });
      if (isCta) btn.addClass("mod-cta");
      btn.addEventListener("click", () => {
        this.onSubmitValue(key);
        this.close();
      });
    };
    addChoice("cancel", this.labels.cancel);
    addChoice("order", this.labels.order);
    addChoice("order+prop", this.labels.orderAndProp, true);
  }
  onClose() {
    this.contentEl.empty();
  }
};
function askThreeChoices(app, title, message, labels) {
  return new Promise((resolve) => {
    new ThreeChoiceModal(app, title, message, labels, resolve).open();
  });
}
var StartActionModal = class extends obsidian.Modal {
  constructor(app, plugin, onSubmit) {
    super(app);
    this.plugin = plugin;
    this.onSubmitValue = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("h3", { text: this.plugin.t("startActionTitle") });
    contentEl.createEl("p", { text: this.plugin.t("startActionDesc") }).addClass("sfv-modal-hint");
    const action = contentEl.createEl("div");
    action.addClass("sfv-modal-action");
    action.createEl("button", { text: this.plugin.t("startOpenPage") }).addEventListener("click", () => {
      this.onSubmitValue("open");
      this.close();
    });
    const createBtn = action.createEl("button", { text: this.plugin.t("startNewPage") });
    createBtn.addClass("mod-cta");
    createBtn.addEventListener("click", () => {
      this.onSubmitValue("create");
      this.close();
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
function askStartAction(app, plugin) {
  return new Promise((resolve) => {
    new StartActionModal(app, plugin, resolve).open();
  });
}
var FolderSelectModal = class extends obsidian.Modal {
  constructor(app, plugin, folders, initialValue, onSubmit) {
    super(app);
    this.plugin = plugin;
    this.folders = folders;
    this.initialValue = initialValue;
    this.onSubmitValue = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("h3", { text: this.plugin.t("exportFolderTitle") });
    contentEl.createEl("p", { text: this.plugin.t("exportFolderDesc") }).addClass("sfv-modal-hint");
    const select = contentEl.createEl("select");
    select.addClass("sfv-modal-select");
    for (const f of this.folders) {
      select.createEl("option", { value: f, text: f || this.plugin.t("rootFolder") });
    }
    select.value = this.initialValue;
    makeSelectSearchable(select, this.plugin.t("search"));
    const action = contentEl.createEl("div");
    action.addClass("sfv-modal-action");
    action.createEl("button", { text: "Cancel" }).addEventListener("click", () => {
      this.onSubmitValue(null);
      this.close();
    });
    const okBtn = action.createEl("button", { text: this.plugin.t("exportFolderConfirm") });
    okBtn.addClass("mod-cta");
    okBtn.addEventListener("click", () => {
      this.onSubmitValue(select.value);
      this.close();
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
function askFolderSelect(app, plugin, folders, initialValue) {
  return new Promise((resolve) => {
    new FolderSelectModal(app, plugin, folders, initialValue, resolve).open();
  });
}
var ConfirmModal = class extends obsidian.Modal {
  constructor(app, message, onResult) {
    super(app);
    this.message = message;
    this.onResultValue = onResult;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("p", { text: this.message });
    const action = contentEl.createEl("div");
    action.addClass("sfv-modal-action");
    action.createEl("button", { text: "Cancel" }).addEventListener("click", () => {
      this.onResultValue(false);
      this.close();
    });
    const ok = action.createEl("button", { text: "OK" });
    ok.addClass("mod-cta");
    ok.addEventListener("click", () => {
      this.onResultValue(true);
      this.close();
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
function askConfirm(app, message) {
  return new Promise((resolve) => {
    new ConfirmModal(app, message, resolve).open();
  });
}
var ProfileManagerModal = class extends obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("h2", { text: this.plugin.t("managerTitle") });
    for (const profile of this.plugin.data.profiles) {
      const s = new obsidian.Setting(contentEl).setName(profile.name || profile.sourceFolder).setDesc(profile.sourceFolder);
      s.addButton((b) => b.setButtonText(this.plugin.t("open")).onClick(() => {
        void (async () => {
          this.plugin.clearDraftProfile();
          this.plugin.data.lastActiveProfileId = profile.id;
          await this.plugin.persist();
          await this.plugin.activateView({ profile, newLeaf: true });
          this.close();
        })();
      }));
      s.addButton((b) => b.setButtonText(this.plugin.t("edit")).onClick(() => {
        new SetupModal(this.app, this.plugin, profile).open();
      }));
      s.addButton((b) => b.setButtonText(this.plugin.t("delete")).onClick(() => {
        void askConfirm(this.app, this.plugin.t("deleteConfirm", { name: profile.name || profile.sourceFolder })).then(async (confirmed) => {
          if (!confirmed) return;
          this.plugin.data.profiles = this.plugin.data.profiles.filter((p) => p.id !== profile.id);
          if (this.plugin.data.lastActiveProfileId === profile.id) this.plugin.data.lastActiveProfileId = "";
          await this.plugin.persist();
          this.onOpen();
        });
      }));
    }
  }
  onClose() {
    this.contentEl.empty();
  }
};
var SmartFolderView = class extends obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.pinnedProfile = null;
    this.stateOwnerId = "";
    this.profileDefaultsKey = "";
    this.timelineDropBusy = false;
    this.timelineDragToken = "";
    this.pendingBoardFieldValueByPath = {};
    this.lastUndoSnapshot = null;
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    const p = this.pinnedProfile || this.plugin.getCurrentProfile();
    return p?.name || p?.sourceFolder || this.plugin.t("title");
  }
  getIcon() {
    return "layout-grid";
  }
  updateLeafTitle() {
    const title = this.getDisplayText();
    const leafAny = this.leaf;
    if (leafAny?.setTitle) leafAny.setTitle(title);
    if (leafAny?.tabHeaderInnerTitleEl?.setText) leafAny.tabHeaderInnerTitleEl.setText(title);
  }
  setPinnedProfile(profile) {
    if (!profile) {
      this.pinnedProfile = null;
    } else {
      this.pinnedProfile = { ...profile, displayFields: [...profile.displayFields || []] };
    }
    this.stateOwnerId = "";
    this.profileDefaultsKey = "";
    this.lastUndoSnapshot = null;
    this.updateLeafTitle();
  }
  getRenderProfile() {
    if (!this.pinnedProfile) return this.plugin.getCurrentProfile();
    const latest = this.plugin.data.profiles.find((p) => p.id === this.pinnedProfile.id) || this.pinnedProfile;
    this.pinnedProfile = { ...latest, displayFields: [...latest.displayFields || []] };
    return this.pinnedProfile;
  }
  ensureState(ownerId, defaultSort, defaultViewMode) {
    const nextDefaultsKey = `${defaultSort}|${defaultViewMode}`;
    if (this.stateOwnerId === ownerId && this.profileDefaultsKey === nextDefaultsKey) return;
    this.stateOwnerId = ownerId;
    this.profileDefaultsKey = nextDefaultsKey;
    try {
      const saved = this.app.loadLocalStorage(FILTER_STORAGE_PREFIX + ownerId) || {};
      this.isFreshFilterState = !saved || Object.keys(saved).length === 0;
      const savedDefaultsKey = typeof saved.profileDefaultsKey === "string" ? saved.profileDefaultsKey : "";
      const defaultsChanged = !!savedDefaultsKey && savedDefaultsKey !== this.profileDefaultsKey;
      this.filterState = {
        enabledFilters: Array.isArray(saved.enabledFilters) ? saved.enabledFilters : [],
        selectedByAttr: saved.selectedByAttr && typeof saved.selectedByAttr === "object" ? saved.selectedByAttr : {},
        sortOrder: defaultsChanged ? defaultSort : saved.sortOrder === "asc" ? "asc" : defaultSort,
        viewMode: defaultsChanged ? defaultViewMode : saved.viewMode === "board" ? "board" : defaultViewMode,
        presetName: typeof saved.presetName === "string" ? saved.presetName : ""
      };
    } catch {
      this.isFreshFilterState = true;
      this.filterState = { enabledFilters: [], selectedByAttr: {}, sortOrder: defaultSort, viewMode: defaultViewMode, presetName: "" };
    }
  }
  saveState() {
    this.app.saveLocalStorage(FILTER_STORAGE_PREFIX + this.stateOwnerId, {
      ...this.filterState,
      profileDefaultsKey: this.profileDefaultsKey
    });
  }
  loadPresets() {
    try {
      const parsed = this.app.loadLocalStorage(FILTER_PRESET_STORAGE_PREFIX + this.stateOwnerId);
      if (!Array.isArray(parsed)) return [];
      return clonePresetList(parsed);
    } catch {
      return [];
    }
  }
  savePresets(presets) {
    this.app.saveLocalStorage(FILTER_PRESET_STORAGE_PREFIX + this.stateOwnerId, clonePresetList(presets));
  }
  contextKey(profile) {
    return JSON.stringify({ profileId: profile.id, selectedByAttr: this.filterState.selectedByAttr, enabled: this.filterState.enabledFilters, sort: this.filterState.sortOrder, viewMode: this.filterState.viewMode, boardField: profile.boardField });
  }
  orderKey(profile, column) {
    return `${this.contextKey(profile)}:${column || "timeline"}`;
  }
  loadOrderStore(ownerId) {
    try {
      const parsed = this.app.loadLocalStorage(MANUAL_ORDER_STORAGE_PREFIX + ownerId);
      return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
    } catch {
      return {};
    }
  }
  saveOrderStore(ownerId, store) {
    this.app.saveLocalStorage(MANUAL_ORDER_STORAGE_PREFIX + ownerId, store);
  }
  applyOrder(ownerId, key, items) {
    const store = this.loadOrderStore(ownerId);
    const order = store[key] || [];
    if (!order.length) return items;
    const rank = /* @__PURE__ */ new Map();
    order.forEach((p, i) => rank.set(p, i));
    return [...items].sort((a, b) => (rank.get(a.file.path) ?? Number.MAX_SAFE_INTEGER) - (rank.get(b.file.path) ?? Number.MAX_SAFE_INTEGER));
  }
  saveOrder(ownerId, key, files) {
    const store = this.loadOrderStore(ownerId);
    store[key] = [...new Set(files.map((f) => f.path))];
    this.saveOrderStore(ownerId, store);
  }
  clearOrder(ownerId, key) {
    const store = this.loadOrderStore(ownerId);
    delete store[key];
    this.saveOrderStore(ownerId, store);
  }
  recordUndoSnapshot(profile) {
    this.lastUndoSnapshot = {
      ownerId: profile.id,
      orderStore: this.loadOrderStore(profile.id),
      pendingBoardFieldValueByPath: { ...this.pendingBoardFieldValueByPath }
    };
  }
  async undoLastAction(profile) {
    if (!this.lastUndoSnapshot || this.lastUndoSnapshot.ownerId !== profile.id) {
      new obsidian.Notice(this.plugin.t("undoNone"));
      return;
    }
    this.saveOrderStore(profile.id, this.lastUndoSnapshot.orderStore || {});
    this.pendingBoardFieldValueByPath = { ...this.lastUndoSnapshot.pendingBoardFieldValueByPath || {} };
    this.lastUndoSnapshot = null;
    await this.rerenderPreserveScroll();
    new obsidian.Notice(this.plugin.t("undoDone"));
  }
  onOpen() {
    this.renderView();
  }
  async rerenderPreserveScroll() {
    const container = this.containerEl.children[1];
    const scrollTop = container?.scrollTop || 0;
    this.renderView();
    const nextContainer = this.containerEl.children[1];
    await new Promise((resolve) => window.requestAnimationFrame(() => window.requestAnimationFrame(resolve)));
    if (nextContainer) nextContainer.scrollTop = scrollTop;
  }
  async askAndMaybeUpdateField(file, field, targetColumn, unsetLabel) {
    const suggested = targetColumn === unsetLabel ? "" : targetColumn;
    const useSuggested = await askConfirm(this.app, this.plugin.t("moveAsk", { field, value: suggested || this.plugin.t("emptyValue") }));
    const finalValue = useSuggested ? suggested : await askTextInput(this.app, this.plugin.t("moveManual", { field }), this.plugin.t("moveManual", { field }), suggested, "");
    if (finalValue == null) return void 0;
    const value = finalValue.trim();
    try {
      await this.app.fileManager.processFrontMatter(file, (fm) => {
        if (value) fm[field] = value;
        else delete fm[field];
      });
      new obsidian.Notice(this.plugin.t("moveDone", { field, value: value || this.plugin.t("emptyValue") }));
      return value;
    } catch {
      new obsidian.Notice(this.plugin.t("moveFail"));
      return void 0;
    }
  }
  getBoardFieldValue(file, cache, boardField) {
    if (Object.prototype.hasOwnProperty.call(this.pendingBoardFieldValueByPath, file.path)) {
      return this.pendingBoardFieldValueByPath[file.path] || "";
    }
    return getFrontmatterValues(cache, boardField)[0] || "";
  }
  getBoardFieldValues(file, cache, boardField) {
    if (Object.prototype.hasOwnProperty.call(this.pendingBoardFieldValueByPath, file.path)) {
      return toFlatArray(this.pendingBoardFieldValueByPath[file.path]);
    }
    return getFrontmatterValues(cache, boardField);
  }
  reconcilePendingBoardValue(file, cache, boardField) {
    if (!Object.prototype.hasOwnProperty.call(this.pendingBoardFieldValueByPath, file.path)) return;
    const pending = this.pendingBoardFieldValueByPath[file.path] || "";
    const actual = getFrontmatterValues(cache, boardField)[0] || "";
    if (pending === actual) delete this.pendingBoardFieldValueByPath[file.path];
  }
  renderCard(parent, file, cache, profile, color, showDot) {
    const card = parent.createEl("section");
    card.addClass("sfv-card");
    card.setCssProps({ "--sfv-color": color });
    if (showDot) {
      card.createEl("span").addClass("sfv-card-dot");
    }
    const top = card.createEl("div");
    top.addClass("sfv-card-top");
    const meta = top.createEl("span");
    meta.setText(profile.displayFields.map((k) => `${k}: ${getFrontmatterValues(cache, k).join("\u3001") || "-"}`).join(" | "));
    meta.addClass("sfv-card-meta");
    const link = top.createEl("a");
    link.setText(file.basename);
    link.className = "internal-link";
    link.setAttribute("data-href", file.path);
    link.setAttribute("href", file.path);
    link.addClass("sfv-card-link");
    const triggerHoverPreview = (e) => {
      this.app.workspace?.trigger?.("hover-link", {
        event: e,
        source: VIEW_TYPE,
        hoverParent: card,
        targetEl: link,
        linktext: file.path
      });
    };
    link.addEventListener("mouseenter", triggerHoverPreview);
    link.addEventListener("mousemove", triggerHoverPreview);
    link.addEventListener("mouseover", triggerHoverPreview);
    link.addEventListener("pointerenter", triggerHoverPreview);
    link.addEventListener("pointermove", triggerHoverPreview);
    link.addEventListener("click", (e) => {
      e.preventDefault();
      this.app.workspace.openLinkText(file.path, file.path, e.ctrlKey || e.metaKey);
    });
    const triggerHoverPreviewForTarget = (e, targetEl) => {
      const linktext = targetEl.getAttribute("data-href") || targetEl.getAttribute("href") || targetEl.textContent?.trim() || "";
      if (!linktext) return;
      this.app.workspace?.trigger?.("hover-link", {
        event: e,
        source: VIEW_TYPE,
        hoverParent: card,
        targetEl,
        linktext
      });
    };
    const getInternalLinkElement = (target) => {
      if (target instanceof Element) return target.closest(".internal-link");
      if (target instanceof Node && target.parentElement) return target.parentElement.closest(".internal-link");
      return null;
    };
    const bodyEl = card.createEl("div");
    bodyEl.addClass("sfv-card-body");
    bodyEl.addEventListener("mouseover", (e) => {
      const el = getInternalLinkElement(e.target);
      if (!el) return;
      triggerHoverPreviewForTarget(e, el);
    }, true);
    bodyEl.addEventListener("pointerover", (e) => {
      const el = getInternalLinkElement(e.target);
      if (!el) return;
      triggerHoverPreviewForTarget(e, el);
    }, true);
    bodyEl.addEventListener("mousemove", (e) => {
      const el = getInternalLinkElement(e.target);
      if (!el) return;
      triggerHoverPreviewForTarget(e, el);
    }, true);
    bodyEl.addEventListener("pointermove", (e) => {
      const el = getInternalLinkElement(e.target);
      if (!el) return;
      triggerHoverPreviewForTarget(e, el);
    }, true);
    bodyEl.addEventListener("click", (e) => {
      const el = getInternalLinkElement(e.target);
      if (!el) return;
      const href = el.getAttribute("data-href") || el.getAttribute("href");
      if (!href) return;
      e.preventDefault();
      this.app.workspace.openLinkText(href, file.path, e.ctrlKey || e.metaKey);
    }, true);
    void this.app.vault.read(file).then((raw) => {
      const body = stripFrontmatter(raw) || "\uFF08\u65E0\u6B63\u6587\uFF09";
      obsidian.MarkdownRenderer.render(this.app, body, bodyEl, file.path, this);
    }).catch(() => bodyEl.setText("\uFF08\u6B63\u6587\u8BFB\u53D6\u5931\u8D25\uFF09"));
  }
  buildDropdown(container, label, options, selectedValues, onChange, onCommit) {
    const wrap = container.createEl("div");
    wrap.addClass("sfv-dd-wrap");
    wrap.createEl("span", { text: label }).addClass("sfv-dd-label");
    const box = wrap.createEl("details");
    box.addClass("sfv-dd-box");
    const summary = box.createEl("summary");
    summary.addClass("sfv-dd-summary");
    const initialValues = [...selectedValues];
    let currentValues = [...initialValues];
    const summarySpan = summary.createEl("span");
    summarySpan.addClass("sfv-dd-summary-text");
    const toDisplayText = (v) => v === EMPTY_OPTION_VALUE ? this.plugin.t("emptyValue") : v;
    const refreshSummary = () => {
      const isAll = currentValues.length === options.length && options.length > 0;
      const full = !currentValues.length ? this.plugin.t("noneSelected") : currentValues.map(toDisplayText).join("\u3001");
      const short = !currentValues.length ? this.plugin.t("noneSelected") : isAll ? this.plugin.t("selectAll") : currentValues.length > 3 ? `${this.plugin.t("selected", { count: currentValues.length })}` : full;
      summarySpan.setText(short);
      summarySpan.title = isAll ? this.plugin.t("selectAll") : full;
    };
    refreshSummary();
    const panel = box.createEl("div");
    panel.addClass("sfv-dd-panel");
    const actionBar = panel.createEl("div");
    actionBar.addClass("sfv-dd-action-bar");
    const allBtn = actionBar.createEl("button", { text: this.plugin.t("selectAll") });
    allBtn.addClass("sfv-dd-action-btn");
    allBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      currentValues = [...options];
      for (const { row } of rows) {
        const cb = row.querySelector('input[type="checkbox"]');
        if (cb) cb.checked = true;
      }
      onChange(currentValues);
      refreshSummary();
    });
    const clearBtn = actionBar.createEl("button", { text: this.plugin.t("selectNone") });
    clearBtn.addClass("sfv-dd-action-btn");
    clearBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      currentValues = [];
      for (const { row } of rows) {
        const cb = row.querySelector('input[type="checkbox"]');
        if (cb) cb.checked = false;
      }
      onChange([]);
      refreshSummary();
    });
    const search = panel.createEl("input");
    search.type = "search";
    search.placeholder = this.plugin.t("search");
    search.addClass("sfv-dd-search");
    const list = panel.createEl("div");
    const rows = [];
    for (const option of options) {
      const row = list.createEl("label");
      row.addClass("sfv-dd-row");
      const cb = row.createEl("input");
      cb.type = "checkbox";
      cb.checked = currentValues.includes(option);
      row.createEl("span", { text: toDisplayText(option) });
      cb.addEventListener("change", () => {
        const next = cb.checked ? [...currentValues, option] : currentValues.filter((v) => v !== option);
        currentValues = [...new Set(next)];
        onChange(currentValues);
        refreshSummary();
      });
      rows.push({ option, row });
    }
    search.addEventListener("input", () => {
      const q = search.value.toLowerCase();
      for (const { option, row } of rows) {
        if (!q || option.toLowerCase().includes(q)) row.removeClass("sfv-hidden");
        else row.addClass("sfv-hidden");
      }
    });
    box.addEventListener("toggle", () => {
      if (box.open) {
        wrap.addClass("sfv-elevated");
        box.addClass("sfv-elevated");
      } else {
        wrap.removeClass("sfv-elevated");
        box.removeClass("sfv-elevated");
        if (onCommit) onCommit();
      }
    });
  }
  renderView() {
    const profile = this.getRenderProfile();
    const container = this.containerEl.children[1];
    container.empty();
    container.classList.add("smart-folder-view-root");
    this.updateLeafTitle();
    if (!profile) {
      container.createEl("p", { text: this.plugin.t("noProfile") });
      return;
    }
    this.ensureState(profile.id, profile.sortOrder, profile.viewMode);
    const topBar = container.createEl("div");
    topBar.addClass("sfv-top-bar");
    const saveBtn = topBar.createEl("button", { text: this.plugin.isDraft(profile.id) ? this.plugin.t("savePage") : this.plugin.t("updatePage") });
    saveBtn.addClass("mod-cta");
    saveBtn.addEventListener("click", () => {
      void (async () => {
        try {
          await this.plugin.saveProfile(profile, true, false);
          await this.rerenderPreserveScroll();
        } catch {
          new obsidian.Notice(this.plugin.t("saveFailed"));
        }
      })();
    });
    topBar.createEl("button", { text: this.plugin.t("openBuilderBtn") }).addEventListener("click", () => new SetupModal(this.app, this.plugin).open());
    topBar.createEl("button", { text: this.plugin.t("openManagerBtn") }).addEventListener("click", () => new ProfileManagerModal(this.app, this.plugin).open());
    topBar.createEl("button", { text: this.plugin.t("exportPage") }).addEventListener("click", () => {
      void this.plugin.exportProfileToMarkdown(profile);
    });
    topBar.createEl("button", { text: this.plugin.t("refreshPreview") }).addEventListener("click", () => {
      this.renderView();
      new obsidian.Notice(this.plugin.t("refreshPreviewDone"));
    });
    const files = this.plugin.getFilesByFolder(profile.sourceFolder);
    if (!files.length) {
      container.createEl("p", { text: this.plugin.t("noFiles", { folder: profile.sourceFolder }) });
      return;
    }
    const entries = files.map((file) => ({ file, cache: this.app.metadataCache.getFileCache(file) }));
    for (const entry of entries) {
      this.reconcilePendingBoardValue(entry.file, entry.cache, profile.boardField);
    }
    const attrKeys = getAllFrontmatterKeys(entries.map((e) => e.cache));
    const optionsByAttr = {};
    for (const key of attrKeys) {
      const values = uniqueSorted(entries.flatMap((e) => getFrontmatterValues(e.cache, key)));
      const hasEmpty = entries.some((e) => getFrontmatterValues(e.cache, key).length === 0);
      optionsByAttr[key] = hasEmpty ? [...values, EMPTY_OPTION_VALUE] : values;
    }
    if (!this.filterState.enabledFilters.length) this.filterState.enabledFilters = attrKeys.slice(0, 4);
    let defaultSelectionInitialized = false;
    for (const key of attrKeys) {
      if (!Array.isArray(this.filterState.selectedByAttr[key])) {
        this.filterState.selectedByAttr[key] = [...optionsByAttr[key] || []];
        defaultSelectionInitialized = true;
      }
    }
    if (defaultSelectionInitialized) this.saveState();
    const switchesEl = container.createEl("div");
    switchesEl.addClass("sfv-switches");
    for (const key of attrKeys) {
      const enabled = this.filterState.enabledFilters.includes(key);
      const chip = switchesEl.createEl("label");
      chip.addClass("sfv-chip");
      const cb = chip.createEl("input");
      cb.type = "checkbox";
      cb.checked = enabled;
      chip.createEl("span", { text: key });
      cb.addEventListener("change", () => {
        const s = new Set(this.filterState.enabledFilters);
        if (cb.checked) s.add(key);
        else s.delete(key);
        this.filterState.enabledFilters = attrKeys.filter((k) => s.has(k));
        this.saveState();
        void this.renderView();
      });
    }
    const controls = container.createEl("div");
    controls.addClass("sfv-controls");
    controls.createEl("p", { text: this.plugin.t("presetScopeDesc") }).addClass("sfv-controls-hint");
    const presets = this.loadPresets();
    const presetWrap = controls.createEl("div");
    presetWrap.addClass("sfv-preset-wrap");
    presetWrap.createEl("span", { text: this.plugin.t("preset") }).addClass("sfv-dd-label");
    const presetSel = presetWrap.createEl("select");
    presetSel.createEl("option", { text: this.plugin.t("noPreset"), value: "" });
    for (const p of presets) {
      const opt = presetSel.createEl("option", { text: p.name, value: p.name });
      if (p.name === this.filterState.presetName) opt.selected = true;
    }
    presetSel.addEventListener("change", () => {
      const currentPresets = this.loadPresets();
      const p = currentPresets.find((x) => x.name === presetSel.value);
      if (!p) {
        this.filterState.presetName = "";
      } else {
        this.filterState.enabledFilters = [...p.enabledFilters];
        this.filterState.selectedByAttr = cloneSelectedByAttr(p.selectedByAttr);
        this.filterState.sortOrder = p.sortOrder;
        this.filterState.viewMode = p.viewMode;
        this.filterState.presetName = p.name;
      }
      this.saveState();
      void this.renderView();
    });
    makeSelectSearchable(presetSel, this.plugin.t("search"));
    presetWrap.createEl("button", { text: this.plugin.t("savePreset") }).addEventListener("click", () => {
      void (async () => {
        const name = (await askTextInput(this.app, this.plugin.t("savePreset"), this.plugin.t("presetPrompt"), this.filterState.presetName || "", this.plugin.t("presetSaveHint")) || "").trim();
        if (!name) {
          new obsidian.Notice(this.plugin.t("presetNameRequired"));
          return;
        }
        const currentPresets = this.loadPresets();
        const next = currentPresets.filter((p) => p.name !== name);
        next.push(clonePreset({ name, enabledFilters: [...this.filterState.enabledFilters], selectedByAttr: cloneSelectedByAttr(this.filterState.selectedByAttr), sortOrder: this.filterState.sortOrder, viewMode: this.filterState.viewMode }));
        this.savePresets(next);
        this.filterState.presetName = name;
        this.saveState();
        this.renderView();
      })();
    });
    presetWrap.createEl("button", { text: this.plugin.t("delPreset") }).addEventListener("click", () => {
      if (!this.filterState.presetName) return;
      const currentPresets = this.loadPresets();
      this.savePresets(currentPresets.filter((p) => p.name !== this.filterState.presetName));
      this.filterState.presetName = "";
      this.saveState();
      void this.renderView();
    });
    const filterGrid = controls.createEl("div");
    filterGrid.addClass("sfv-filter-grid");
    for (const key of this.filterState.enabledFilters) {
      this.buildDropdown(filterGrid, key, optionsByAttr[key] || [], this.filterState.selectedByAttr[key] || [], (vals) => {
        this.filterState.selectedByAttr[key] = [...vals];
        this.saveState();
      }, () => {
        this.renderView();
      });
    }
    this.isFreshFilterState = false;
    const sortWrap = controls.createEl("label");
    sortWrap.addClass("sfv-sort-wrap");
    sortWrap.createEl("span", { text: this.plugin.t("sortOrder") }).addClass("sfv-dd-label");
    const sortSel = sortWrap.createEl("select");
    sortSel.createEl("option", { value: "desc", text: this.plugin.t("desc") });
    sortSel.createEl("option", { value: "asc", text: this.plugin.t("asc") });
    sortSel.value = this.filterState.sortOrder;
    makeSelectSearchable(sortSel, this.plugin.t("search"));
    sortSel.dispatchEvent(new Event("change"));
    sortSel.addEventListener("change", () => {
      this.filterState.sortOrder = sortSel.value;
      this.saveState();
      void this.renderView();
    });
    const modeWrap = controls.createEl("label");
    modeWrap.addClass("sfv-sort-wrap");
    modeWrap.createEl("span", { text: this.plugin.t("viewMode") }).addClass("sfv-dd-label");
    const modeSel = modeWrap.createEl("select");
    modeSel.createEl("option", { value: "timeline", text: this.plugin.t("timeline") });
    modeSel.createEl("option", { value: "board", text: this.plugin.t("board") });
    modeSel.value = this.filterState.viewMode;
    makeSelectSearchable(modeSel, this.plugin.t("search"));
    modeSel.dispatchEvent(new Event("change"));
    modeSel.addEventListener("change", () => {
      this.filterState.viewMode = modeSel.value === "board" ? "board" : "timeline";
      this.saveState();
      void this.renderView();
    });
    if (this.filterState.viewMode === "board") {
      const boardFieldWrap = controls.createEl("label");
      boardFieldWrap.addClass("sfv-sort-wrap");
      boardFieldWrap.createEl("span", { text: this.plugin.t("boardField") }).addClass("sfv-dd-label");
      const boardFieldSel = boardFieldWrap.createEl("select");
      boardFieldSel.createEl("option", { value: "", text: this.plugin.t("choose") });
      for (const k of attrKeys) boardFieldSel.createEl("option", { value: k, text: k });
      boardFieldSel.value = profile.boardField || "";
      makeSelectSearchable(boardFieldSel, this.plugin.t("search"));
      boardFieldSel.addEventListener("change", () => {
        void (async () => {
          const next = boardFieldSel.value;
          profile.boardField = next;
          const idx = this.plugin.data.profiles.findIndex((p) => p.id === profile.id);
          if (idx >= 0) this.plugin.data.profiles[idx].boardField = next;
          if (this.plugin.draftProfile?.id === profile.id) this.plugin.draftProfile.boardField = next;
          await this.plugin.persist();
          this.renderView();
        })();
      });
    }
    const filtered = entries.filter(({ file, cache }) => {
      if (!this.filterState.enabledFilters.length) return true;
      for (const key of this.filterState.enabledFilters) {
        const selected = Array.isArray(this.filterState.selectedByAttr[key]) ? this.filterState.selectedByAttr[key] : [...optionsByAttr[key] || []];
        if (!selected.length) return false;
        const vals = key === profile.boardField ? this.getBoardFieldValues(file, cache, profile.boardField) : getFrontmatterValues(cache, key);
        const matchEmpty = selected.includes(EMPTY_OPTION_VALUE) && vals.length === 0;
        const matchNormal = selected.some((v) => v !== EMPTY_OPTION_VALUE && vals.includes(v));
        if (!(matchEmpty || matchNormal)) return false;
      }
      return true;
    });
    filtered.sort((a, b) => {
      const va = getFrontmatterValues(a.cache, profile.sortField)[0] || a.file.basename;
      const vb = getFrontmatterValues(b.cache, profile.sortField)[0] || b.file.basename;
      const pa = parseSortValue(va);
      const pb = parseSortValue(vb);
      const cmp = pa.kind === "number" && pb.kind === "number" ? Number(pa.value) - Number(pb.value) : String(pa.raw).localeCompare(String(pb.raw), "zh-Hans-CN", { numeric: true, sensitivity: "base" });
      return this.filterState.sortOrder === "asc" ? cmp : -cmp;
    });
    container.createEl("p", { text: this.plugin.t("matched", { count: filtered.length }) }).addClass("sfv-matched");
    if (!filtered.length) {
      container.createEl("p", { text: this.plugin.t("noMatch") });
      return;
    }
    if (this.filterState.viewMode === "timeline") {
      const ordered = this.applyOrder(profile.id, this.orderKey(profile), filtered);
      const orderActions2 = container.createEl("div");
      orderActions2.addClass("sfv-order-actions");
      orderActions2.createEl("button", { text: this.plugin.t("saveOrder") }).addEventListener("click", () => {
        this.saveOrder(profile.id, this.orderKey(profile), ordered.map((e) => e.file));
        new obsidian.Notice(this.plugin.t("saveOrderDone"));
      });
      orderActions2.createEl("button", { text: this.plugin.t("resetOrder") }).addEventListener("click", () => {
        void (async () => {
          this.recordUndoSnapshot(profile);
          this.clearOrder(profile.id, this.orderKey(profile));
          new obsidian.Notice(this.plugin.t("resetOrderDone"));
          await this.rerenderPreserveScroll();
        })();
      });
      orderActions2.createEl("button", { text: this.plugin.t("undoLastAction") }).addEventListener("click", () => {
        void this.undoLastAction(profile);
      });
      const timelineEl = container.createEl("div");
      timelineEl.addClass("sfv-timeline");
      const lineEl = timelineEl.createEl("div");
      lineEl.addClass("sfv-timeline-line");
      const indicator = timelineEl.createEl("div");
      indicator.addClass("sfv-timeline-indicator");
      let dropBeforePath = null;
      const hideIndicator = () => {
        indicator.removeClass("sfv-visible");
      };
      const updateDropIndicator = (clientY) => {
        const cards = Array.from(timelineEl.querySelectorAll("section[data-sfv-path]")).filter((el) => !el.classList.contains("sfv-dragging"));
        if (!cards.length) {
          dropBeforePath = null;
          indicator.setCssProps({ "--sfv-top": "0px" });
          indicator.addClass("sfv-visible");
          return;
        }
        let beforeCard = null;
        for (const cardEl of cards) {
          const rect = cardEl.getBoundingClientRect();
          if (clientY < rect.top + rect.height / 2) {
            beforeCard = cardEl;
            break;
          }
        }
        dropBeforePath = beforeCard?.getAttribute("data-sfv-path") || null;
        let top = 0;
        if (beforeCard) {
          top = beforeCard.offsetTop - 2;
        } else {
          const last = cards[cards.length - 1];
          top = last.offsetTop + last.offsetHeight - 2;
        }
        indicator.setCssProps({ "--sfv-top": `${Math.max(0, top)}px` });
        indicator.addClass("sfv-visible");
      };
      timelineEl.addEventListener("dragover", (e) => {
        e.preventDefault();
        if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
        updateDropIndicator(e.clientY);
      });
      timelineEl.addEventListener("dragleave", (e) => {
        const related = e.relatedTarget;
        if (related instanceof Node && timelineEl.contains(related)) return;
        hideIndicator();
      });
      const handleTimelineDrop = async (path, beforePath) => {
        if (this.timelineDropBusy) return;
        if (beforePath && path === beforePath) return;
        const from = ordered.findIndex((e) => e.file.path === path);
        if (from < 0) return;
        const moved = ordered[from];
        const nextOrdered = ordered.filter((e) => e.file.path !== path);
        const to = beforePath ? nextOrdered.findIndex((e) => e.file.path === beforePath) : -1;
        const insertAt = to >= 0 ? to : nextOrdered.length;
        nextOrdered.splice(insertAt, 0, moved);
        const targetField = profile.sortField || "\u65F6\u95F4";
        const action = await askThreeChoices(this.app, this.plugin.t("timelineMoveTitle"), this.plugin.t("timelineMoveChoice", { field: targetField }), {
          cancel: this.plugin.t("timelineMoveCancel"),
          order: this.plugin.t("timelineMoveOrderOnly"),
          orderAndProp: this.plugin.t("timelineMoveOrderAndProp")
        });
        if (action === "cancel") {
          new obsidian.Notice(this.plugin.t("timelineMoveNoChange"));
          return;
        }
        this.timelineDropBusy = true;
        try {
          this.recordUndoSnapshot(profile);
          ordered.splice(0, ordered.length, ...nextOrdered);
          this.saveOrder(profile.id, this.orderKey(profile), ordered.map((e) => e.file));
          if (action === "order+prop") {
            const field = profile.sortField || "\u65F6\u95F4";
            const current = getFrontmatterValues(this.app.metadataCache.getFileCache(moved.file), field)[0] || "";
            const next = await askTextInput(this.app, this.plugin.t("timelineMoveOrderAndProp"), this.plugin.t("timelineUpdatePrompt", { field }), current, this.plugin.t("timelineUpdatePrompt", { field }));
            if (next != null) {
              const value = next.trim();
              await this.app.fileManager.processFrontMatter(moved.file, (fm) => {
                if (value) fm[field] = value;
                else delete fm[field];
              });
            }
            new obsidian.Notice(this.plugin.t("timelineMoveDone"));
            await this.rerenderPreserveScroll();
          } else {
            const cardEls = /* @__PURE__ */ new Map();
            for (const el of timelineEl.querySelectorAll("section[data-sfv-path]")) {
              cardEls.set(el.getAttribute("data-sfv-path"), el);
            }
            for (const entry of ordered) {
              const el = cardEls.get(entry.file.path);
              if (el) timelineEl.appendChild(el);
            }
            new obsidian.Notice(this.plugin.t("timelineMoveDone"));
          }
        } finally {
          this.timelineDropBusy = false;
        }
      };
      timelineEl.addEventListener("drop", (e) => {
        e.preventDefault();
        hideIndicator();
        const payload = e.dataTransfer?.getData("text/plain") || "";
        if (!payload) return;
        const obj = JSON.parse(payload);
        if (obj.token && this.timelineDragToken && obj.token !== this.timelineDragToken) return;
        if (!obj.path || obj.from !== "timeline") return;
        const beforePath = dropBeforePath;
        void handleTimelineDrop(obj.path, beforePath);
      });
      for (const { file, cache } of ordered) {
        const color = colorForValue(getFrontmatterValues(cache, profile.colorField)[0] || null, this.plugin.data.colorConfig) || this.plugin.data.colorConfig.fallbackColor;
        this.renderCard(timelineEl, file, cache, profile, color, true);
        const card = timelineEl.lastElementChild;
        card.setAttribute("data-sfv-path", file.path);
        card.draggable = true;
        card.addEventListener("dragstart", (e) => {
          this.timelineDragToken = newId();
          card.classList.add("sfv-dragging");
          if (e.dataTransfer) {
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setDragImage(card, 28, 20);
          }
          e.dataTransfer?.setData("text/plain", JSON.stringify({ path: file.path, from: "timeline", token: this.timelineDragToken }));
        });
        card.addEventListener("dragend", () => {
          card.classList.remove("sfv-dragging");
          this.timelineDragToken = "";
          hideIndicator();
        });
        card.addEventListener("dragover", (e) => e.preventDefault());
      }
      return;
    }
    const grouped = /* @__PURE__ */ new Map();
    const unsetLabel = this.plugin.t("boardUnset");
    for (const entry of filtered) {
      const cols = this.getBoardFieldValues(entry.file, entry.cache, profile.boardField);
      const targets = cols.length ? cols : [unsetLabel];
      for (const col of targets) {
        if (!grouped.has(col)) grouped.set(col, []);
        grouped.get(col).push(entry);
      }
    }
    const columns = uniqueSorted([...grouped.keys()]);
    const orderActions = container.createEl("div");
    orderActions.addClass("sfv-order-actions");
    orderActions.createEl("button", { text: this.plugin.t("saveOrder") }).addEventListener("click", () => {
      for (const col of columns) {
        const arr = grouped.get(col) || [];
        this.saveOrder(profile.id, this.orderKey(profile, col), arr.map((e) => e.file));
      }
      new obsidian.Notice(this.plugin.t("saveOrderDone"));
    });
    orderActions.createEl("button", { text: this.plugin.t("resetOrder") }).addEventListener("click", () => {
      this.recordUndoSnapshot(profile);
      for (const col of columns) this.clearOrder(profile.id, this.orderKey(profile, col));
      new obsidian.Notice(this.plugin.t("resetOrderDone"));
      this.renderView();
    });
    orderActions.createEl("button", { text: this.plugin.t("undoLastAction") }).addEventListener("click", () => {
      void this.undoLastAction(profile);
    });
    const boardEl = container.createEl("div");
    boardEl.addClass("sfv-board");
    const handleDrop = async (payload, to, beforePath) => {
      const fromArr = grouped.get(payload.from) || [];
      const toArr = grouped.get(to) || [];
      const idx = fromArr.findIndex((e) => e.file.path === payload.path);
      if (idx < 0) return;
      let action = "order";
      let nextBoardValue = void 0;
      if (payload.from !== to && profile.boardField) {
        action = await askThreeChoices(this.app, this.plugin.t("boardMoveTitle"), this.plugin.t("boardMoveChoice", { field: profile.boardField }), {
          cancel: this.plugin.t("boardMoveCancel"),
          orderAndProp: this.plugin.t("boardMoveOrderAndProp")
        });
        if (action === "cancel") {
          new obsidian.Notice(this.plugin.t("boardMoveNoChange"));
          return;
        }
        nextBoardValue = to === unsetLabel ? "" : to;
      }
      this.recordUndoSnapshot(profile);
      const removed = fromArr.splice(idx, 1)[0];
      const pos = beforePath ? toArr.findIndex((e) => e.file.path === beforePath) : -1;
      const insertAt = pos >= 0 ? pos : toArr.length;
      toArr.splice(insertAt, 0, removed);
      grouped.set(payload.from, fromArr);
      grouped.set(to, toArr);
      this.saveOrder(profile.id, this.orderKey(profile, payload.from), fromArr.map((e) => e.file));
      this.saveOrder(profile.id, this.orderKey(profile, to), toArr.map((e) => e.file));
      if (payload.from !== to && profile.boardField && action === "order+prop") {
        this.pendingBoardFieldValueByPath[removed.file.path] = nextBoardValue;
        if (removed.cache?.frontmatter) {
          if (nextBoardValue) removed.cache.frontmatter[profile.boardField] = nextBoardValue;
          else delete removed.cache.frontmatter[profile.boardField];
        }
        await this.app.fileManager.processFrontMatter(removed.file, (fm) => {
          if (nextBoardValue) fm[profile.boardField] = nextBoardValue;
          else delete fm[profile.boardField];
        });
      }
      new obsidian.Notice(this.plugin.t("boardMoveDone"));
      await this.rerenderPreserveScroll();
    };
    for (const col of columns) {
      const ordered = this.applyOrder(profile.id, this.orderKey(profile, col), grouped.get(col) || []);
      grouped.set(col, ordered);
      const colWrap = boardEl.createEl("section");
      colWrap.addClass("sfv-board-col");
      colWrap.createEl("strong", { text: `${String(col)} (${ordered.length})` });
      const cardsEl = colWrap.createEl("div");
      cardsEl.addClass("sfv-board-cards");
      const dropIndicator = cardsEl.createEl("div");
      dropIndicator.addClass("sfv-drop-indicator");
      let dropBeforePath = null;
      const hideDropIndicator = () => {
        dropIndicator.removeClass("sfv-visible");
        dropBeforePath = null;
      };
      const getNextCardPath = (cardEl) => {
        let next = cardEl.nextElementSibling;
        while (next) {
          if (next.matches?.("section[data-sfv-path]")) return next.getAttribute("data-sfv-path") || null;
          next = next.nextElementSibling;
        }
        return null;
      };
      const getCardDropBeforePath = (cardEl, clientY) => {
        const rect = cardEl.getBoundingClientRect();
        if (clientY < rect.top + rect.height / 2) return cardEl.getAttribute("data-sfv-path") || null;
        return getNextCardPath(cardEl);
      };
      const updateDropIndicator = (clientY) => {
        const cards = Array.from(cardsEl.querySelectorAll("section[data-sfv-path]")).filter((el) => !el.classList.contains("sfv-dragging"));
        if (!cards.length) {
          dropBeforePath = null;
          cardsEl.appendChild(dropIndicator);
          dropIndicator.addClass("sfv-visible");
          return;
        }
        let beforeCard = null;
        for (const cardEl of cards) {
          const rect = cardEl.getBoundingClientRect();
          if (clientY < rect.top + rect.height / 2) {
            beforeCard = cardEl;
            break;
          }
        }
        dropBeforePath = beforeCard?.getAttribute("data-sfv-path") || null;
        if (beforeCard) cardsEl.insertBefore(dropIndicator, beforeCard);
        else cardsEl.appendChild(dropIndicator);
        dropIndicator.addClass("sfv-visible");
      };
      cardsEl.addEventListener("dragover", (e) => {
        e.preventDefault();
        if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
        updateDropIndicator(e.clientY);
      });
      cardsEl.addEventListener("dragleave", (e) => {
        const related = e.relatedTarget;
        if (related instanceof Node && cardsEl.contains(related)) return;
        hideDropIndicator();
      });
      cardsEl.addEventListener("drop", (e) => {
        e.preventDefault();
        const beforePath = dropBeforePath;
        hideDropIndicator();
        const payload = e.dataTransfer?.getData("text/plain") || "";
        if (!payload) return;
        void handleDrop(JSON.parse(payload), col, beforePath);
      });
      for (const { file, cache } of ordered) {
        const color = colorForValue(getFrontmatterValues(cache, profile.colorField)[0] || null, this.plugin.data.colorConfig) || this.plugin.data.colorConfig.fallbackColor;
        this.renderCard(cardsEl, file, cache, profile, color, false);
        const card = cardsEl.lastElementChild;
        card.setAttribute("data-sfv-path", file.path);
        card.draggable = true;
        card.addEventListener("dragstart", (e) => {
          card.classList.add("sfv-dragging");
          e.dataTransfer?.setData("text/plain", JSON.stringify({ path: file.path, from: col }));
        });
        card.addEventListener("dragend", () => {
          card.classList.remove("sfv-dragging");
          hideDropIndicator();
        });
        card.addEventListener("dragover", (e) => {
          e.preventDefault();
          updateDropIndicator(e.clientY);
        });
        card.addEventListener("drop", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const beforePath = getCardDropBeforePath(card, e.clientY);
          hideDropIndicator();
          const payload = e.dataTransfer?.getData("text/plain") || "";
          if (!payload) return;
          void handleDrop(JSON.parse(payload), col, beforePath);
        });
      }
    }
  }
  onClose() {
  }
};
var SmartFolderSettingTab = class extends obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: this.plugin.t("title") });
    new obsidian.Setting(containerEl).setName(this.plugin.t("openBuilder")).addButton((b) => b.setButtonText(this.plugin.t("openBuilder")).onClick(() => new SetupModal(this.app, this.plugin).open()));
    new obsidian.Setting(containerEl).setName(this.plugin.t("openManager")).addButton((b) => b.setButtonText(this.plugin.t("openManager")).onClick(() => new ProfileManagerModal(this.app, this.plugin).open()));
    new obsidian.Setting(containerEl).setName(this.plugin.t("languageMode")).setDesc(this.plugin.t("languageModeDesc")).addDropdown((d) => {
      d.addOption("auto", this.plugin.t("languageAuto"));
      d.addOption("zh", this.plugin.t("languageZh"));
      d.addOption("en", this.plugin.t("languageEn"));
      d.setValue(this.plugin.data.languageMode);
      makeSelectSearchable(d.selectEl, this.plugin.t("search"));
      d.onChange(async (v) => {
        this.plugin.data.languageMode = v;
        await this.plugin.persist();
        this.display();
      });
    });
    containerEl.createEl("h3", { text: this.plugin.t("colorSettings") });
    new obsidian.Setting(containerEl).setName(this.plugin.t("saturationBase")).setDesc("20-80").addSlider((s) => s.setLimits(20, 80, 1).setValue(this.plugin.data.colorConfig.saturationBase).setDynamicTooltip().onChange(async (v) => {
      this.plugin.data.colorConfig.saturationBase = v;
      await this.plugin.persist();
    }));
    new obsidian.Setting(containerEl).setName(this.plugin.t("saturationRange")).setDesc("1-40").addSlider((s) => s.setLimits(1, 40, 1).setValue(this.plugin.data.colorConfig.saturationRange).setDynamicTooltip().onChange(async (v) => {
      this.plugin.data.colorConfig.saturationRange = v;
      await this.plugin.persist();
    }));
    new obsidian.Setting(containerEl).setName(this.plugin.t("lightnessBase")).setDesc("20-70").addSlider((s) => s.setLimits(20, 70, 1).setValue(this.plugin.data.colorConfig.lightnessBase).setDynamicTooltip().onChange(async (v) => {
      this.plugin.data.colorConfig.lightnessBase = v;
      await this.plugin.persist();
    }));
    new obsidian.Setting(containerEl).setName(this.plugin.t("lightnessRange")).setDesc("1-30").addSlider((s) => s.setLimits(1, 30, 1).setValue(this.plugin.data.colorConfig.lightnessRange).setDynamicTooltip().onChange(async (v) => {
      this.plugin.data.colorConfig.lightnessRange = v;
      await this.plugin.persist();
    }));
    new obsidian.Setting(containerEl).setName(this.plugin.t("fallbackColor")).setDesc("CSS color value, e.g. #3b82f6 or var(--interactive-accent)").addText((t) => t.setPlaceholder("e.g. var(--interactive-accent)").setValue(this.plugin.data.colorConfig.fallbackColor).onChange(async (v) => {
      this.plugin.data.colorConfig.fallbackColor = v.trim() || DEFAULT_COLOR_CONFIG.fallbackColor;
      await this.plugin.persist();
    })).addButton((b) => b.setButtonText(this.plugin.t("resetDefault")).onClick(async () => {
      this.plugin.data.colorConfig = { ...DEFAULT_COLOR_CONFIG };
      await this.plugin.persist();
      this.display();
    }));
  }
};
var SmartFolderPlugin = class extends obsidian.Plugin {
  t(key, vars) {
    const mode = this.data?.languageMode || "auto";
    const lang = mode === "auto" ? detectLanguage() : mode;
    return tpl(I18N[lang]?.[key] || key, vars);
  }
  getFolderOptions() {
    const set = /* @__PURE__ */ new Set();
    for (const f of this.app.vault.getMarkdownFiles()) {
      if (f.parent?.path) set.add(f.parent.path);
    }
    return ["", ...uniqueSorted([...set])];
  }
  getFilesByFolder(sourceFolder) {
    if (!sourceFolder) return this.app.vault.getMarkdownFiles();
    const prefix = sourceFolder.replace(/\/$/, "") + "/";
    return this.app.vault.getMarkdownFiles().filter((f) => f.path.startsWith(prefix) || f.parent?.path === sourceFolder);
  }
  getTemplateFileOptions() {
    return this.app.vault.getMarkdownFiles().map((f) => f.path);
  }
  getFieldCandidates(sourceFolder, templateFile) {
    const template = templateFile ? this.app.vault.getAbstractFileByPath(templateFile) : null;
    const templateKeys = template instanceof obsidian.TFile ? getAllFrontmatterKeys([this.app.metadataCache.getFileCache(template)]) : [];
    const files = this.getFilesByFolder(sourceFolder);
    const caches = files.map((f) => this.app.metadataCache.getFileCache(f));
    const allKeys = getAllFrontmatterKeys(caches);
    const common = allKeys.filter((k) => caches.every((c) => !c?.frontmatter || k in c.frontmatter));
    return uniqueSorted([...templateKeys, ...common]);
  }
  getCurrentProfile() {
    if (this.draftProfile) return this.draftProfile;
    const id = this.data.lastActiveProfileId;
    return this.data.profiles.find((p) => p.id === id) || null;
  }
  isDraft(id) {
    return !!this.draftProfile && this.draftProfile.id === id;
  }
  setDraftProfile(profile) {
    this.draftProfile = { ...profile, displayFields: [...profile.displayFields || []], updatedAt: Date.now() };
  }
  clearDraftProfile() {
    this.draftProfile = null;
  }
  async saveProfile(profile, setActive, askNameIfEmpty) {
    const next = { ...profile, displayFields: [...profile.displayFields || []], updatedAt: Date.now() };
    if (!next.name && askNameIfEmpty) next.name = (await askTextInput(this.app, this.t("pageNamePrompt"), this.t("pageNamePrompt"), next.sourceFolder || "", "") || "").trim();
    if (!next.name) next.name = next.sourceFolder || `Page-${(/* @__PURE__ */ new Date()).toISOString()}`;
    const idx = this.data.profiles.findIndex((p) => p.id === next.id);
    if (idx >= 0) {
      this.data.profiles[idx] = { ...this.data.profiles[idx], ...next };
      new obsidian.Notice(this.t("pageUpdated"));
    } else {
      next.createdAt = next.createdAt || Date.now();
      this.data.profiles.push(next);
      new obsidian.Notice(this.t("pageSaved"));
    }
    if (setActive) this.data.lastActiveProfileId = next.id;
    if (this.draftProfile?.id === next.id) this.draftProfile = null;
    await this.persist();
  }
  normalizeExportProfile(raw) {
    if (!raw || typeof raw !== "object") return null;
    const profile = {
      id: String(raw.id || newId()),
      name: String(raw.name || ""),
      sourceFolder: String(raw.sourceFolder || ""),
      templateFile: String(raw.templateFile || ""),
      colorField: String(raw.colorField || ""),
      displayFields: Array.isArray(raw.displayFields) ? raw.displayFields.map((v) => String(v)).filter(Boolean) : [],
      sortField: String(raw.sortField || ""),
      sortOrder: raw.sortOrder === "asc" ? "asc" : "desc",
      viewMode: raw.viewMode === "board" ? "board" : "timeline",
      boardField: String(raw.boardField || ""),
      createdAt: typeof raw.createdAt === "number" ? raw.createdAt : Date.now(),
      updatedAt: Date.now()
    };
    return profile;
  }
  async openProfileFromExport(raw) {
    const profile = this.normalizeExportProfile(raw);
    if (!profile) return false;
    await this.activateView({ profile, newLeaf: true, persistLastActive: false });
    return true;
  }
  async importProfileFromExport(raw) {
    const profile = this.normalizeExportProfile(raw);
    if (!profile) return false;
    const existing = this.data.profiles.find((p) => p.id === profile.id) || this.data.profiles.find((p) => p.name === profile.name && p.sourceFolder === profile.sourceFolder);
    if (existing) {
      profile.id = existing.id;
      profile.createdAt = existing.createdAt || profile.createdAt;
    }
    await this.saveProfile(profile, true, false);
    await this.activateView({ profile, newLeaf: true });
    return true;
  }
  async exportProfileToMarkdown(profile) {
    if (!profile) {
      new obsidian.Notice(this.t("noProfile"));
      return;
    }
    try {
      const folders = this.getFolderOptions();
      const defaultFolder = this.app.vault.getAbstractFileByPath("00 Homepage") instanceof obsidian.TFolder ? "00 Homepage" : "";
      const chosenFolder = await askFolderSelect(this.app, this, folders, defaultFolder);
      if (chosenFolder == null) return;
      const safeBase = (profile.name || profile.sourceFolder || "smart-folder-page").replace(/[\\/:*?"<>|]/g, "-").trim() || "smart-folder-page";
      const folderPrefix = chosenFolder ? `${String(chosenFolder)}/` : "";
      let path = `${folderPrefix}${safeBase}.smart-folder-page.md`;
      let i = 1;
      while (this.app.vault.getAbstractFileByPath(path)) {
        path = `${folderPrefix}${safeBase}.smart-folder-page-${i}.md`;
        i += 1;
      }
      const payload = {
        ...profile,
        exportedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      const content = [
        "---",
        "type: smart-folder-view-page-export",
        `name: ${String(profile.name || "").replace(/\n/g, " ")}`,
        `sourceFolder: ${String(profile.sourceFolder || "").replace(/\n/g, " ")}`,
        `templateFile: ${String(profile.templateFile || "").replace(/\n/g, " ")}`,
        `viewMode: ${profile.viewMode || "timeline"}`,
        `sortField: ${String(profile.sortField || "").replace(/\n/g, " ")}`,
        `sortOrder: ${profile.sortOrder || "desc"}`,
        `boardField: ${String(profile.boardField || "").replace(/\n/g, " ")}`,
        `exportedAt: ${(/* @__PURE__ */ new Date()).toISOString()}`,
        "---",
        "",
        "# Smart Folder \u9875\u9762\u5BFC\u51FA",
        "",
        "```smart-folder-page",
        JSON.stringify(payload, null, 2),
        "```",
        ""
      ].join("\n");
      await this.app.vault.create(path, content);
      new obsidian.Notice(this.t("exportPageDone", { path }));
    } catch {
      new obsidian.Notice(this.t("exportPageFailed"));
    }
  }
  async onload() {
    await this.loadPluginData();
    this.registerView(VIEW_TYPE, (leaf) => new SmartFolderView(leaf, this));
    this.registerMarkdownCodeBlockProcessor("smart-folder-page", (source, el) => {
      el.empty();
      let raw;
      try {
        raw = JSON.parse(source || "{}");
      } catch {
        el.createEl("p", { text: this.t("exportBlockInvalid") });
        return;
      }
      const profile = this.normalizeExportProfile(raw);
      if (!profile) {
        el.createEl("p", { text: this.t("exportBlockInvalid") });
        return;
      }
      if (!el.dataset.sfvAutoOpened) {
        el.dataset.sfvAutoOpened = "1";
        window.setTimeout(() => {
          void this.openProfileFromExport(raw);
        }, 0);
      }
      const wrap = el.createEl("div");
      wrap.addClass("sfv-export-block");
      wrap.createEl("strong", { text: this.t("exportBlockTitle") });
      wrap.createEl("p", { text: `${this.t("exportBlockDesc")} ${profile.name || profile.sourceFolder}` }).addClass("sfv-export-desc");
      const row = wrap.createEl("div");
      row.addClass("sfv-export-row");
      const openBtn = row.createEl("button", { text: this.t("exportBlockOpen") });
      openBtn.addClass("mod-cta");
      openBtn.addEventListener("click", () => {
        void this.openProfileFromExport(raw).then((ok) => {
          if (!ok) new obsidian.Notice(this.t("exportBlockInvalid"));
        });
      });
      const importBtn = row.createEl("button", { text: this.t("exportBlockImport") });
      importBtn.addEventListener("click", () => {
        void this.importProfileFromExport(raw).then((ok) => {
          if (!ok) new obsidian.Notice(this.t("exportBlockInvalid"));
        });
      });
    });
    this.registerDomEvent(document, "pointerdown", (ev) => {
      const target = ev.target;
      if (!(target instanceof Element)) return;
      const openBoxes = document.querySelectorAll(".smart-folder-view-root details[open]");
      for (const box of openBoxes) {
        if (box.contains(target)) continue;
        box.removeAttribute("open");
      }
    }, true);
    this.registerDomEvent(document, "keydown", (ev) => {
      if (ev.key !== "Escape") return;
      const openBoxes = document.querySelectorAll(".smart-folder-view-root details[open]");
      for (const box of openBoxes) box.removeAttribute("open");
    });
    this.addRibbonIcon("layout-grid", this.t("title"), () => {
      void askStartAction(this.app, this).then((action) => {
        if (action === "open") new ProfileManagerModal(this.app, this).open();
        else if (action === "create") new SetupModal(this.app, this).open();
      });
    });
    this.addCommand({ id: "create-page", name: this.t("openBuilder"), callback: () => new SetupModal(this.app, this).open() });
    this.addCommand({ id: "create-page-2", name: this.t("openBuilder"), callback: () => new SetupModal(this.app, this).open() });
    this.addCommand({ id: "open-manager", name: this.t("openManager"), callback: () => new ProfileManagerModal(this.app, this).open() });
    this.addCommand({ id: "open-last", name: this.t("openLast"), callback: () => {
      void (async () => {
        if (!this.getCurrentProfile()) {
          new obsidian.Notice(this.t("noProfile"));
          new SetupModal(this.app, this).open();
          return;
        }
        await this.activateView({ profile: this.getCurrentProfile(), newLeaf: true });
      })();
    } });
    this.addCommand({ id: "export-page", name: this.t("exportPage"), callback: () => {
      void (async () => {
        const profile = this.getCurrentProfile();
        if (!profile) {
          new obsidian.Notice(this.t("noProfile"));
          return;
        }
        await this.exportProfileToMarkdown(profile);
      })();
    } });
    this.addSettingTab(new SmartFolderSettingTab(this.app, this));
  }
  async activateView(opts = {}) {
    const { profile = null, newLeaf = false, persistLastActive = true } = opts;
    const { workspace } = this.app;
    let leaf = null;
    if (!newLeaf) leaf = workspace.getLeavesOfType(VIEW_TYPE)[0] || null;
    if (!leaf) {
      leaf = workspace.getLeaf("tab");
      await leaf.setViewState({ type: VIEW_TYPE, active: true });
    }
    void workspace.revealLeaf(leaf);
    const view = leaf.view;
    if (view instanceof SmartFolderView) {
      view.setPinnedProfile(profile || null);
      if (persistLastActive && profile?.id) {
        this.data.lastActiveProfileId = profile.id;
        await this.persist();
      }
      view.onOpen();
    }
  }
  onunload() {
  }
  async loadPluginData() {
    const raw = await this.loadData();
    this.data = {
      language: raw?.language === "zh" || raw?.language === "en" ? raw.language : detectLanguage(),
      languageMode: raw?.languageMode === "auto" || raw?.languageMode === "zh" || raw?.languageMode === "en" ? raw.languageMode : "auto",
      profiles: Array.isArray(raw?.profiles) ? raw.profiles : [],
      lastActiveProfileId: typeof raw?.lastActiveProfileId === "string" ? raw.lastActiveProfileId : "",
      colorConfig: {
        saturationBase: typeof raw?.colorConfig?.saturationBase === "number" ? clamp(raw.colorConfig.saturationBase, 20, 80) : DEFAULT_COLOR_CONFIG.saturationBase,
        saturationRange: typeof raw?.colorConfig?.saturationRange === "number" ? clamp(raw.colorConfig.saturationRange, 1, 40) : DEFAULT_COLOR_CONFIG.saturationRange,
        lightnessBase: typeof raw?.colorConfig?.lightnessBase === "number" ? clamp(raw.colorConfig.lightnessBase, 20, 70) : DEFAULT_COLOR_CONFIG.lightnessBase,
        lightnessRange: typeof raw?.colorConfig?.lightnessRange === "number" ? clamp(raw.colorConfig.lightnessRange, 1, 30) : DEFAULT_COLOR_CONFIG.lightnessRange,
        fallbackColor: typeof raw?.colorConfig?.fallbackColor === "string" && raw.colorConfig.fallbackColor.trim() ? raw.colorConfig.fallbackColor : DEFAULT_COLOR_CONFIG.fallbackColor
      }
    };
    this.draftProfile = null;
  }
  async persist() {
    await this.saveData(this.data);
  }
};
module.exports = SmartFolderPlugin;
