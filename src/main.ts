// @ts-nocheck
import * as obsidian from 'obsidian';

const VIEW_TYPE = 'smart-folder-view';
const FILTER_STORAGE_PREFIX = 'smart-folder-view-filter:';
const FILTER_PRESET_STORAGE_PREFIX = 'smart-folder-view-presets:';
const MANUAL_ORDER_STORAGE_PREFIX = 'smart-folder-view-manual-order:';
const EMPTY_OPTION_VALUE = '__SFV_EMPTY__';

const DEFAULT_COLOR_CONFIG = {
  saturationBase: 55,
  saturationRange: 20,
  lightnessBase: 44,
  lightnessRange: 14,
  fallbackColor: 'var(--interactive-accent)',
};

const I18N = {
  zh: {
    title: 'Smart Folder View',
    openBuilder: '新建 Smart Folder 页面',
    openManager: '管理已保存页面',
    openLast: '打开上次页面',
    noProfile: '还没有保存任何页面，请先新建。',
    setupTitle: '配置页面',
    setupDesc: '页面设置用于锚定数据来源：文件夹、模板文件、可筛选属性。设置后先预览，再保存。',
    profileName: '页面名称',
    sourceFolder: '来源文件夹',
    sourceFolderDesc: '从该文件夹读取卡片数据',
    templateFile: '模板文件',
    templateFileDesc: '从全库选择模板文件读取元数据字段（并融合该文件夹共用字段）',
    colorField: '颜色字段',
    sortField: '排序字段',
    displayFields: '展示字段',
    sortOrder: '排序方向',
    viewMode: '视图模式',
    boardField: '看板分组字段',
    preview: '预览',
    saveAndOpen: '保存并打开',
    choose: '(请选择)',
    rootFolder: '(根文件夹)',
    timeline: '时间轴',
    board: '看板',
    asc: '升序（旧→新）',
    desc: '倒序（新→旧）',
    savePage: '保存页面',
    updatePage: '更新页面',
    openBuilderBtn: '新建页面',
    openManagerBtn: '页面管理',
    startActionTitle: 'Smart Folder',
    startActionDesc: '请选择操作：',
    startOpenPage: '打开页面',
    startNewPage: '新建页面',
    pageSaved: '页面已保存',
    pageUpdated: '页面已更新',
    saveFailed: '页面保存失败',
    pageNamePrompt: '请输入页面名称',
    managerTitle: '已保存页面',
    open: '打开',
    edit: '编辑',
    delete: '删除',
    deleteConfirm: '确认删除页面：{{name}}？',
    noFiles: '文件夹 "{{folder}}" 里暂无笔记。',
    matched: '匹配到 {{count}} 条记录',
    noMatch: '没有匹配筛选条件的笔记。',
    preset: '预设',
    presetScopeDesc: '预设只保存当前页面下的可变视图状态：筛选、排序、显示模式（时间轴/看板）。',
    noPreset: '(不使用预设)',
    savePreset: '保存预设',
    delPreset: '删除预设',
    presetPrompt: '预设名称',
    presetNameRequired: '请输入预设名称',
    presetSaveHint: '说明：名称不变=覆盖更新当前预设；名称改为新名字=另存为新预设，旧预设保持不变。',
    clear: '清空',
    noneSelected: '(全不选)',
    allText: '(全部)',
    selectAll: '全选',
    selectNone: '全不选',
    selected: '已选 {{count}} 项',
    allWhenEmpty: '未选择，等同于全部',
    search: '搜索选项...',
    saveOrder: '保存当前排序',
    saveOrderDone: '已保存当前顺序',
    resetOrder: '恢复默认顺序',
    resetOrderDone: '已恢复默认顺序',
    undoLastAction: '撤销上一步',
    undoDone: '已撤销上一步操作',
    undoNone: '没有可撤销的操作',
    boardUnset: '(未设置)',
    emptyValue: '空值',
    moveAsk: '跨列拖拽：是否将 {{field}} 更新为 "{{value}}"？\n确定=自动推荐，取消=手动输入',
    moveManual: '请输入 {{field}} 新值（留空清除）：',
    moveDone: '属性已更新：{{field}} = {{value}}',
    moveFail: '属性更新失败',
    timelineMoveTitle: '时间轴拖动',
    timelineMoveChoice: '请选择拖动后的处理方式（字段：{{field}}）',
    timelineMoveCancel: '取消（不保存修改）',
    timelineMoveOrderOnly: '仅更新时间轴顺序',
    timelineMoveOrderAndProp: '更新时间轴和属性',
    timelineUpdatePrompt: '请输入 {{field}} 新值（留空清除）：',
    timelineMoveDone: '已更新时间轴顺序',
    timelineMoveNoChange: '已取消，未保存修改',
    boardMoveTitle: '看板拖动',
    boardMoveChoice: '请选择拖动后的处理方式（字段：{{field}}）',
    boardMoveCancel: '取消（不保存修改）',
    boardMoveOrderOnly: '仅更新看板顺序',
    boardMoveOrderAndProp: '更新看板顺序和属性',
    boardMoveDone: '已更新看板顺序',
    boardMoveNoChange: '已取消，未保存修改',
    savePreviewOnClose: '当前为预览配置，关闭前是否保存为页面？',
    refreshPreview: '刷新预览',
    refreshPreviewDone: '卡片预览已刷新',
    exportPage: '导出页面',
    exportFolderTitle: '选择导出文件夹',
    exportFolderDesc: '请选择导出到哪个文件夹（可选根文件夹）',
    exportFolderConfirm: '导出到此文件夹',
    exportPageDone: '页面配置已导出：{{path}}',
    exportPageFailed: '页面导出失败',
    exportBlockTitle: 'Smart Folder 页面导出',
    exportBlockDesc: '点击下方按钮可打开该页面配置。',
    exportBlockOpen: '打开此页面',
    exportBlockImport: '导入并保存到页面管理',
    exportBlockInvalid: '导出块解析失败',
    colorSettings: '颜色设置',
    saturationBase: '饱和度基线',
    saturationRange: '饱和度波动',
    lightnessBase: '亮度基线',
    lightnessRange: '亮度波动',
    fallbackColor: '默认颜色',
    resetDefault: '恢复默认',
    languageMode: '界面语言',
    languageAuto: '自动（跟随 Obsidian）',
    languageZh: '中文',
    languageEn: 'English',
    languageModeDesc: '默认自动匹配；你也可以手动固定语言。',
  },
  en: {
    title: 'Smart Folder View',
    openBuilder: 'Create Smart Folder Page',
    openManager: 'Manage Saved Pages',
    openLast: 'Open Last Page',
    noProfile: 'No saved pages yet. Please create one first.',
    setupTitle: 'Configure Page',
    setupDesc: 'Page settings anchor data source: folder, template file, and filterable fields. Preview first, then save.',
    profileName: 'Page name',
    sourceFolder: 'Source folder',
    sourceFolderDesc: 'Load cards from this folder',
    templateFile: 'Template file',
    templateFileDesc: 'Choose a template file from the whole vault; fields come from it plus common folder fields',
    colorField: 'Color field',
    sortField: 'Sort field',
    displayFields: 'Display fields',
    sortOrder: 'Sort order',
    viewMode: 'View mode',
    boardField: 'Board group field',
    preview: 'Preview',
    saveAndOpen: 'Save and Open',
    choose: '(Choose)',
    rootFolder: '(Vault Root)',
    timeline: 'Timeline',
    board: 'Board',
    asc: 'Ascending (old -> new)',
    desc: 'Descending (new -> old)',
    savePage: 'Save Page',
    updatePage: 'Update Page',
    openBuilderBtn: 'Create Page',
    openManagerBtn: 'Page Manager',
    startActionTitle: 'Smart Folder',
    startActionDesc: 'Choose an action:',
    startOpenPage: 'Open Page',
    startNewPage: 'Create Page',
    pageSaved: 'Page saved',
    pageUpdated: 'Page updated',
    saveFailed: 'Failed to save page',
    pageNamePrompt: 'Enter page name',
    managerTitle: 'Saved Pages',
    open: 'Open',
    edit: 'Edit',
    delete: 'Delete',
    deleteConfirm: 'Delete page: {{name}}?',
    noFiles: 'No notes found in "{{folder}}".',
    matched: '{{count}} notes matched',
    noMatch: 'No notes match current filters.',
    preset: 'Preset',
    presetScopeDesc: 'Presets only save mutable view state in this page: filters, sort, and view mode (timeline/board).',
    noPreset: '(No preset)',
    savePreset: 'Save preset',
    delPreset: 'Delete preset',
    presetPrompt: 'Preset name',
    presetNameRequired: 'Please enter a preset name',
    presetSaveHint: 'Rule: same name = update this preset; new name = save as a new preset and keep the old one unchanged.',
    clear: 'Clear',
    noneSelected: '(None selected)',
    allText: '(All)',
    selectAll: 'Select all',
    selectNone: 'Select none',
    selected: '{{count}} selected',
    allWhenEmpty: 'Nothing selected, equivalent to all',
    search: 'Search options...',
    saveOrder: 'Save current order',
    saveOrderDone: 'Current order saved',
    resetOrder: 'Reset default order',
    resetOrderDone: 'Default order restored',
    undoLastAction: 'Undo last action',
    undoDone: 'Last action undone',
    undoNone: 'Nothing to undo',
    boardUnset: '(Unset)',
    emptyValue: 'empty',
    moveAsk: 'Cross-column move: update {{field}} to "{{value}}"?\nOK=recommended, Cancel=manual input',
    moveManual: 'Enter new value for {{field}} (empty to clear):',
    moveDone: 'Updated: {{field}} = {{value}}',
    moveFail: 'Failed to update property',
    timelineMoveTitle: 'Timeline move',
    timelineMoveChoice: 'Choose how to apply this move (field: {{field}})',
    timelineMoveCancel: 'Cancel (do not save)',
    timelineMoveOrderOnly: 'Update timeline order only',
    timelineMoveOrderAndProp: 'Update timeline order and property',
    timelineUpdatePrompt: 'Enter new value for {{field}} (empty to clear):',
    timelineMoveDone: 'Timeline order updated',
    timelineMoveNoChange: 'Canceled, no changes saved',
    boardMoveTitle: 'Board move',
    boardMoveChoice: 'Choose how to apply this move (field: {{field}})',
    boardMoveCancel: 'Cancel (do not save)',
    boardMoveOrderOnly: 'Update board order only',
    boardMoveOrderAndProp: 'Update board order and property',
    boardMoveDone: 'Board order updated',
    boardMoveNoChange: 'Canceled, no changes saved',
    savePreviewOnClose: 'This is a preview configuration. Save it before closing?',
    refreshPreview: 'Refresh preview',
    refreshPreviewDone: 'Card preview refreshed',
    exportPage: 'Export page',
    exportFolderTitle: 'Choose export folder',
    exportFolderDesc: 'Select where to export (including vault root).',
    exportFolderConfirm: 'Export here',
    exportPageDone: 'Page config exported: {{path}}',
    exportPageFailed: 'Failed to export page',
    exportBlockTitle: 'Smart Folder page export',
    exportBlockDesc: 'Click the button below to open this page configuration.',
    exportBlockOpen: 'Open this page',
    exportBlockImport: 'Import and save to page manager',
    exportBlockInvalid: 'Failed to parse export block',
    colorSettings: 'Color settings',
    saturationBase: 'Saturation base',
    saturationRange: 'Saturation range',
    lightnessBase: 'Lightness base',
    lightnessRange: 'Lightness range',
    fallbackColor: 'Fallback color',
    resetDefault: 'Reset default',
    languageMode: 'UI language',
    languageAuto: 'Auto (follow Obsidian)',
    languageZh: 'Chinese',
    languageEn: 'English',
    languageModeDesc: 'Auto by default; you can also force a fixed language.',
  },
};

function tpl(text, vars) {
  if (!vars) return text;
  return text.replace(/\{\{(\w+)\}\}/g, (_m, key) => String(vars[key] ?? ''));
}

function detectLanguage() {
  try {
    const locale = window.moment?.locale?.() || '';
    if (locale.toLowerCase().startsWith('zh')) return 'zh';
  } catch {}
  return 'en';
}

function newId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i);
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
  const s = clamp(config.saturationBase + (hash % Math.max(1, config.saturationRange)), 20, 90);
  const l = clamp(config.lightnessBase + (hash % Math.max(1, config.lightnessRange)), 20, 80);
  return `hsl(${h} ${s}% ${l}%)`;
}

function uniqueSorted(items) {
  return [...new Set(items)].sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'));
}

function toFlatArray(value) {
  if (value == null) return [];
  if (Array.isArray(value)) return value.map(v => String(v).trim()).filter(Boolean);
  return [String(value).trim()].filter(Boolean);
}

function getFrontmatterValues(cache, key) {
  if (!cache?.frontmatter) return [];
  return toFlatArray(cache.frontmatter[key]);
}

function getAllFrontmatterKeys(caches) {
  const keys = new Set();
  for (const cache of caches) {
    if (cache?.frontmatter) {
      for (const key of Object.keys(cache.frontmatter)) {
        if (key !== 'position') keys.add(key);
      }
    }
  }
  return uniqueSorted([...keys]);
}

function stripFrontmatter(text) {
  return text.replace(/^---\n[\s\S]*?\n---\n?/, '').trim();
}

function parseDateLike(value) {
  const raw = String(value || '').trim();
  if (!raw) return null;
  const asTimestamp = Date.parse(raw);
  if (Number.isFinite(asTimestamp)) return asTimestamp;
  const normalized = raw.replace(/[年./]/g, '-').replace(/月/g, '-').replace(/日/g, '').replace(/\s+/g, ' ').trim();
  const ymd = normalized.match(/(\d{4})-(\d{1,2})(?:-(\d{1,2}))?/);
  if (ymd) return Date.UTC(Number(ymd[1]), Math.max(1, Number(ymd[2])) - 1, Math.max(1, Number(ymd[3] || 1)));
  const year = normalized.match(/\b(\d{3,4})\b/);
  if (year) return Date.UTC(Number(year[1]), 0, 1);
  return null;
}

function parseSortValue(value) {
  const raw = String(value == null ? '' : value).trim();
  const ts = parseDateLike(raw);
  if (ts != null) return { kind: 'number', value: ts, raw };
  const numericText = raw.replace(/,/g, '');
  if (/^-?\d+(\.\d+)?$/.test(numericText)) return { kind: 'number', value: Number(numericText), raw };
  return { kind: 'string', value: raw, raw };
}

function clonePreset(preset) {
  return {
    name: String(preset?.name || ''),
    enabledFilters: Array.isArray(preset?.enabledFilters) ? [...preset.enabledFilters] : [],
    selectedByAttr: JSON.parse(JSON.stringify(preset?.selectedByAttr || {})),
    sortOrder: preset?.sortOrder === 'asc' ? 'asc' : 'desc',
    viewMode: preset?.viewMode === 'board' ? 'board' : 'timeline',
  };
}

function clonePresetList(presets) {
  return (Array.isArray(presets) ? presets : []).map(clonePreset);
}

function cloneSelectedByAttr(state) {
  return JSON.parse(JSON.stringify(state || {}));
}

function makeSelectSearchable(selectEl, placeholder) {
  const host = selectEl?.parentElement;
  if (!host || selectEl.dataset.searchable === '1') return;
  selectEl.dataset.searchable = '1';

  selectEl.style.display = 'none';
  const box = host.createEl('details');
  box.style.cssText = 'position:relative;display:block;z-index:1;';
  const summary = box.createEl('summary');
  summary.style.cssText = 'list-style:none;cursor:pointer;min-height:30px;padding:5px 10px;border-radius:8px;border:1px solid var(--background-modifier-border);';
  const summaryText = summary.createEl('span');

  const panel = box.createEl('div');
  panel.style.cssText = 'position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:60;max-height:220px;overflow:auto;padding:8px;border-radius:10px;border:1px solid var(--background-modifier-border);background:var(--background-primary);';

  const input = panel.createEl('input');
  input.type = 'search';
  input.placeholder = placeholder;
  input.style.cssText = 'width:100%;height:28px;padding:2px 8px;border-radius:8px;border:1px solid var(--background-modifier-border);margin-bottom:6px;';

  const list = panel.createEl('div');
  const rows = [];
  const optionTexts = Array.from(selectEl.options).map(opt => opt.textContent || '');
  const meter = document.createElement('span');
  meter.style.cssText = 'position:fixed;visibility:hidden;white-space:nowrap;font:var(--font-ui-medium);';
  document.body.appendChild(meter);
  let maxTextWidth = 0;
  for (const text of optionTexts) {
    meter.textContent = text;
    maxTextWidth = Math.max(maxTextWidth, meter.getBoundingClientRect().width);
  }
  meter.remove();
  const fixedWidth = Math.max(170, Math.ceil(maxTextWidth) + 44);
  const clampedWidth = Math.min(fixedWidth, 340);
  box.style.width = '100%';
  box.style.maxWidth = `${clampedWidth}px`;
  panel.style.minWidth = `${Math.min(clampedWidth, 260)}px`;
  panel.style.maxWidth = `${clampedWidth}px`;

  for (const opt of Array.from(selectEl.options)) {
    const row = list.createEl('button', { text: opt.textContent || '' });
    row.type = 'button';
    row.style.cssText = 'all:unset;display:block;width:100%;box-sizing:border-box;text-align:left;padding:5px 8px;cursor:pointer;border-radius:6px;';
    row.addEventListener('mouseenter', () => row.style.background = 'var(--background-modifier-hover)');
    row.addEventListener('mouseleave', () => row.style.background = 'transparent');
    row.addEventListener('click', () => {
      selectEl.value = opt.value;
      selectEl.dispatchEvent(new Event('change'));
      box.removeAttribute('open');
    });
    rows.push({ text: (opt.textContent || '').toLowerCase(), row });
  }

  const refreshSummary = () => {
    const selected = selectEl.selectedOptions[0];
    summaryText.setText(selected?.textContent || '');
    summaryText.style.cssText = 'display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;';
  };

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    for (const { text, row } of rows) {
      row.style.display = !q || text.includes(q) ? 'block' : 'none';
    }
  });

  box.addEventListener('toggle', () => {
    if (box.open) {
      box.style.zIndex = '160';
      input.value = '';
      for (const { row } of rows) row.style.display = 'block';
      window.setTimeout(() => input.focus(), 0);
    } else {
      box.style.zIndex = '1';
    }
  });

  selectEl.addEventListener('change', refreshSummary);
  refreshSummary();
}

class SetupModal extends obsidian.Modal {
  constructor(app, plugin, profile) {
    super(app);
    this.plugin = plugin;
    this.hasPreviewedDraft = false;
    this.skipCloseSavePrompt = false;
    const folders = this.plugin.getFolderOptions();
    const sourceFolder = profile?.sourceFolder || folders[0] || '';
    const template = profile?.templateFile || this.plugin.getTemplateFileOptions()[0] || '';
    this.draft = profile ? { ...profile, displayFields: [...profile.displayFields] } : {
      id: newId(),
      name: '',
      sourceFolder,
      templateFile: template,
      colorField: '',
      displayFields: [],
      sortField: '',
      sortOrder: 'desc',
      viewMode: 'timeline',
      boardField: '状态',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
  }

  render() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl('h2', { text: this.plugin.t('setupTitle') });
    contentEl.createEl('p', { text: this.plugin.t('setupDesc') });

    const folders = this.plugin.getFolderOptions();
    if (!folders.includes(this.draft.sourceFolder)) this.draft.sourceFolder = folders[0] || '';

    const templates = this.plugin.getTemplateFileOptions();
    if (!templates.includes(this.draft.templateFile)) this.draft.templateFile = templates[0] || '';

    const fieldOptions = this.plugin.getFieldCandidates(this.draft.sourceFolder, this.draft.templateFile);
    if (!fieldOptions.includes(this.draft.colorField)) this.draft.colorField = fieldOptions[0] || '';
    if (!fieldOptions.includes(this.draft.sortField)) this.draft.sortField = fieldOptions[0] || '';
    if (!fieldOptions.includes(this.draft.boardField)) {
      this.draft.boardField = fieldOptions.includes('状态') ? '状态' : (fieldOptions[0] || '');
    }
    this.draft.displayFields = this.draft.displayFields.filter(k => fieldOptions.includes(k));
    if (!this.draft.displayFields.length) this.draft.displayFields = fieldOptions.slice(0, 4);

    new obsidian.Setting(contentEl)
      .setName(this.plugin.t('profileName'))
      .addText(t => t.setValue(this.draft.name).onChange(v => { this.draft.name = v.trim(); }));

    new obsidian.Setting(contentEl)
      .setName(this.plugin.t('sourceFolder'))
      .setDesc(this.plugin.t('sourceFolderDesc'))
      .addDropdown(d => {
        for (const f of folders) d.addOption(f, f || this.plugin.t('rootFolder'));
        d.setValue(this.draft.sourceFolder || '');
        makeSelectSearchable(d.selectEl, this.plugin.t('search'));
        d.onChange(v => {
          this.draft.sourceFolder = v;
          this.render();
        });
      });

    new obsidian.Setting(contentEl)
      .setName(this.plugin.t('templateFile'))
      .setDesc(this.plugin.t('templateFileDesc'))
      .addDropdown(d => {
        d.addOption('', this.plugin.t('choose'));
        for (const f of templates) d.addOption(f, f);
        d.setValue(this.draft.templateFile || '');
        makeSelectSearchable(d.selectEl, this.plugin.t('search'));
        d.onChange(v => {
          this.draft.templateFile = v;
          this.render();
        });
      });

    new obsidian.Setting(contentEl)
      .setName(this.plugin.t('colorField'))
      .addDropdown(d => {
        d.addOption('', this.plugin.t('choose'));
        for (const k of fieldOptions) d.addOption(k, k);
        d.setValue(this.draft.colorField || '');
        makeSelectSearchable(d.selectEl, this.plugin.t('search'));
        d.onChange(v => { this.draft.colorField = v; });
      });

    new obsidian.Setting(contentEl)
      .setName(this.plugin.t('sortField'))
      .addDropdown(d => {
        d.addOption('', this.plugin.t('choose'));
        for (const k of fieldOptions) d.addOption(k, k);
        d.setValue(this.draft.sortField || '');
        makeSelectSearchable(d.selectEl, this.plugin.t('search'));
        d.onChange(v => { this.draft.sortField = v; });
      });

    new obsidian.Setting(contentEl)
      .setName(this.plugin.t('displayFields'))
      .addText(t => t.setValue(this.draft.displayFields.join(', ')).onChange(v => {
        this.draft.displayFields = v.split(',').map(s => s.trim()).filter(Boolean);
      }));

    new obsidian.Setting(contentEl)
      .setName(this.plugin.t('sortOrder'))
      .addDropdown(d => {
        d.addOption('desc', this.plugin.t('desc'));
        d.addOption('asc', this.plugin.t('asc'));
        d.setValue(this.draft.sortOrder);
        makeSelectSearchable(d.selectEl, this.plugin.t('search'));
        d.onChange(v => { this.draft.sortOrder = v; });
      });

    new obsidian.Setting(contentEl)
      .setName(this.plugin.t('viewMode'))
      .addDropdown(d => {
        d.addOption('timeline', this.plugin.t('timeline'));
        d.addOption('board', this.plugin.t('board'));
        d.setValue(this.draft.viewMode);
        makeSelectSearchable(d.selectEl, this.plugin.t('search'));
        d.onChange(v => {
          this.draft.viewMode = v === 'board' ? 'board' : 'timeline';
          this.render();
        });
      });

    new obsidian.Setting(contentEl)
      .setName(this.plugin.t('boardField'))
      .addDropdown(d => {
        d.addOption('', this.plugin.t('choose'));
        for (const k of fieldOptions) d.addOption(k, k);
        d.setValue(this.draft.boardField || '');
        makeSelectSearchable(d.selectEl, this.plugin.t('search'));
        d.onChange(v => { this.draft.boardField = v; });
      });

    const action = contentEl.createEl('div');
    action.style.cssText = 'display:flex;justify-content:flex-end;gap:8px;margin-top:10px;';

    action.createEl('button', { text: this.plugin.t('preview') }).addEventListener('click', async () => {
      this.plugin.setDraftProfile(this.draft);
      await this.plugin.activateView();
      this.hasPreviewedDraft = true;
    });

    const saveBtn = action.createEl('button', { text: this.plugin.t('saveAndOpen') });
    saveBtn.addClass('mod-cta');
    saveBtn.addEventListener('click', async () => {
      await this.plugin.saveProfile(this.draft, true, false);
      await this.plugin.activateView({ profile: this.draft });
      this.skipCloseSavePrompt = true;
      this.close();
    });
  }

  onOpen() { this.render(); }
  async onClose() {
    this.contentEl.empty();
    if (this.skipCloseSavePrompt) return;
    if (!this.hasPreviewedDraft) return;
    if (!window.confirm(this.plugin.t('savePreviewOnClose'))) return;
    await this.plugin.saveProfile(this.draft, true, false);
    await this.plugin.activateView({ profile: this.draft });
  }
}

class TextInputModal extends obsidian.Modal {
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
    contentEl.createEl('h3', { text: this.titleText });
    if (this.hintText) contentEl.createEl('p', { text: this.hintText }).style.cssText = 'margin:6px 0;color:var(--text-muted);font-size:0.9em;';

    const input = contentEl.createEl('input');
    input.type = 'text';
    input.placeholder = this.placeholderText;
    input.value = this.initialValue;
    input.style.cssText = 'width:100%;margin-top:6px;';

    const action = contentEl.createEl('div');
    action.style.cssText = 'display:flex;justify-content:flex-end;gap:8px;margin-top:12px;';
    action.createEl('button', { text: 'Cancel' }).addEventListener('click', () => {
      this.onSubmitValue(null);
      this.close();
    });
    const okBtn = action.createEl('button', { text: 'OK' });
    okBtn.addClass('mod-cta');
    okBtn.addEventListener('click', () => {
      this.onSubmitValue(input.value.trim());
      this.close();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
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
}

function askTextInput(app, title, placeholder, initial, hint) {
  return new Promise(resolve => {
    new TextInputModal(app, title, placeholder, initial, resolve, hint).open();
  });
}

class ThreeChoiceModal extends obsidian.Modal {
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
    contentEl.createEl('h3', { text: this.titleText });
    contentEl.createEl('p', { text: this.messageText }).style.cssText = 'margin:6px 0 10px;color:var(--text-muted);font-size:0.9em;';

    const action = contentEl.createEl('div');
    action.style.cssText = 'display:flex;justify-content:flex-end;gap:8px;flex-wrap:wrap;';

    const addChoice = (key, label, isCta = false) => {
      if (!label) return;
      const btn = action.createEl('button', { text: label });
      if (isCta) btn.addClass('mod-cta');
      btn.addEventListener('click', () => {
        this.onSubmitValue(key);
        this.close();
      });
    };

    addChoice('cancel', this.labels.cancel);
    addChoice('order', this.labels.order);
    addChoice('order+prop', this.labels.orderAndProp, true);
  }

  onClose() {
    this.contentEl.empty();
  }
}

function askThreeChoices(app, title, message, labels) {
  return new Promise(resolve => {
    new ThreeChoiceModal(app, title, message, labels, resolve).open();
  });
}

class StartActionModal extends obsidian.Modal {
  constructor(app, plugin, onSubmit) {
    super(app);
    this.plugin = plugin;
    this.onSubmitValue = onSubmit;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl('h3', { text: this.plugin.t('startActionTitle') });
    contentEl.createEl('p', { text: this.plugin.t('startActionDesc') }).style.cssText = 'margin:6px 0 10px;color:var(--text-muted);font-size:0.9em;';
    const action = contentEl.createEl('div');
    action.style.cssText = 'display:flex;justify-content:flex-end;gap:8px;';
    action.createEl('button', { text: this.plugin.t('startOpenPage') }).addEventListener('click', () => {
      this.onSubmitValue('open');
      this.close();
    });
    const createBtn = action.createEl('button', { text: this.plugin.t('startNewPage') });
    createBtn.addClass('mod-cta');
    createBtn.addEventListener('click', () => {
      this.onSubmitValue('create');
      this.close();
    });
  }

  onClose() {
    this.contentEl.empty();
  }
}

function askStartAction(app, plugin) {
  return new Promise(resolve => {
    new StartActionModal(app, plugin, resolve).open();
  });
}

class FolderSelectModal extends obsidian.Modal {
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
    contentEl.createEl('h3', { text: this.plugin.t('exportFolderTitle') });
    contentEl.createEl('p', { text: this.plugin.t('exportFolderDesc') }).style.cssText = 'margin:6px 0 10px;color:var(--text-muted);font-size:0.9em;';

    const select = contentEl.createEl('select');
    select.style.cssText = 'width:100%;';
    for (const f of this.folders) {
      select.createEl('option', { value: f, text: f || this.plugin.t('rootFolder') });
    }
    select.value = this.initialValue;
    makeSelectSearchable(select, this.plugin.t('search'));

    const action = contentEl.createEl('div');
    action.style.cssText = 'display:flex;justify-content:flex-end;gap:8px;margin-top:12px;';
    action.createEl('button', { text: 'Cancel' }).addEventListener('click', () => {
      this.onSubmitValue(null);
      this.close();
    });
    const okBtn = action.createEl('button', { text: this.plugin.t('exportFolderConfirm') });
    okBtn.addClass('mod-cta');
    okBtn.addEventListener('click', () => {
      this.onSubmitValue(select.value);
      this.close();
    });
  }

  onClose() {
    this.contentEl.empty();
  }
}

function askFolderSelect(app, plugin, folders, initialValue) {
  return new Promise(resolve => {
    new FolderSelectModal(app, plugin, folders, initialValue, resolve).open();
  });
}

class ProfileManagerModal extends obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl('h2', { text: this.plugin.t('managerTitle') });

    for (const profile of this.plugin.data.profiles) {
      const s = new obsidian.Setting(contentEl).setName(profile.name || profile.sourceFolder).setDesc(profile.sourceFolder);
      s.addButton(b => b.setButtonText(this.plugin.t('open')).onClick(async () => {
        this.plugin.clearDraftProfile();
        this.plugin.data.lastActiveProfileId = profile.id;
        await this.plugin.persist();
        await this.plugin.activateView({ profile, newLeaf: true });
        this.close();
      }));
      s.addButton(b => b.setButtonText(this.plugin.t('edit')).onClick(() => {
        new SetupModal(this.app, this.plugin, profile).open();
      }));
      s.addButton(b => b.setButtonText(this.plugin.t('delete')).onClick(async () => {
        if (!window.confirm(this.plugin.t('deleteConfirm', { name: profile.name || profile.sourceFolder }))) return;
        this.plugin.data.profiles = this.plugin.data.profiles.filter(p => p.id !== profile.id);
        if (this.plugin.data.lastActiveProfileId === profile.id) this.plugin.data.lastActiveProfileId = '';
        await this.plugin.persist();
        this.onOpen();
      }));
    }
  }

  onClose() { this.contentEl.empty(); }
}

class SmartFolderView extends obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.pinnedProfile = null;
    this.stateOwnerId = '';
    this.profileDefaultsKey = '';
    this.timelineDropBusy = false;
    this.timelineDragToken = '';
    this.pendingBoardFieldValueByPath = {};
    this.lastUndoSnapshot = null;
  }

  getViewType() { return VIEW_TYPE; }
  getDisplayText() {
    const p = this.pinnedProfile || this.plugin.getCurrentProfile();
    return p?.name || p?.sourceFolder || this.plugin.t('title');
  }
  getIcon() { return 'layout-grid'; }

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
      this.pinnedProfile = { ...profile, displayFields: [...(profile.displayFields || [])] };
    }
    this.stateOwnerId = '';
    this.profileDefaultsKey = '';
    this.lastUndoSnapshot = null;
    this.updateLeafTitle();
  }

  getRenderProfile() {
    if (!this.pinnedProfile) return this.plugin.getCurrentProfile();
    const latest = this.plugin.data.profiles.find(p => p.id === this.pinnedProfile.id) || this.pinnedProfile;
    this.pinnedProfile = { ...latest, displayFields: [...(latest.displayFields || [])] };
    return this.pinnedProfile;
  }

  ensureState(ownerId, defaultSort, defaultViewMode) {
    const nextDefaultsKey = `${defaultSort}|${defaultViewMode}`;
    if (this.stateOwnerId === ownerId && this.profileDefaultsKey === nextDefaultsKey) return;
    this.stateOwnerId = ownerId;
    this.profileDefaultsKey = nextDefaultsKey;
    try {
      const saved = JSON.parse(localStorage.getItem(FILTER_STORAGE_PREFIX + ownerId) || '{}');
      this.isFreshFilterState = !saved || Object.keys(saved).length === 0;
      const savedDefaultsKey = typeof saved.profileDefaultsKey === 'string' ? saved.profileDefaultsKey : '';
      const defaultsChanged = !!savedDefaultsKey && savedDefaultsKey !== this.profileDefaultsKey;
      this.filterState = {
        enabledFilters: Array.isArray(saved.enabledFilters) ? saved.enabledFilters : [],
        selectedByAttr: (saved.selectedByAttr && typeof saved.selectedByAttr === 'object') ? saved.selectedByAttr : {},
        sortOrder: defaultsChanged ? defaultSort : (saved.sortOrder === 'asc' ? 'asc' : defaultSort),
        viewMode: defaultsChanged ? defaultViewMode : (saved.viewMode === 'board' ? 'board' : defaultViewMode),
        presetName: typeof saved.presetName === 'string' ? saved.presetName : '',
      };
    } catch {
      this.isFreshFilterState = true;
      this.filterState = { enabledFilters: [], selectedByAttr: {}, sortOrder: defaultSort, viewMode: defaultViewMode, presetName: '' };
    }
  }

  saveState() {
    localStorage.setItem(FILTER_STORAGE_PREFIX + this.stateOwnerId, JSON.stringify({
      ...this.filterState,
      profileDefaultsKey: this.profileDefaultsKey,
    }));
  }

  loadPresets() {
    try {
      const parsed = JSON.parse(localStorage.getItem(FILTER_PRESET_STORAGE_PREFIX + this.stateOwnerId) || '[]');
      if (!Array.isArray(parsed)) return [];
      return clonePresetList(parsed);
    } catch { return []; }
  }

  savePresets(presets) {
    localStorage.setItem(FILTER_PRESET_STORAGE_PREFIX + this.stateOwnerId, JSON.stringify(clonePresetList(presets)));
  }

  contextKey(profile) {
    return JSON.stringify({ profileId: profile.id, selectedByAttr: this.filterState.selectedByAttr, enabled: this.filterState.enabledFilters, sort: this.filterState.sortOrder, viewMode: this.filterState.viewMode, boardField: profile.boardField });
  }

  orderKey(profile, column) {
    return `${this.contextKey(profile)}:${column || 'timeline'}`;
  }

  loadOrderStore(ownerId) {
    try {
      const parsed = JSON.parse(localStorage.getItem(MANUAL_ORDER_STORAGE_PREFIX + ownerId) || '{}');
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch { return {}; }
  }

  saveOrderStore(ownerId, store) {
    localStorage.setItem(MANUAL_ORDER_STORAGE_PREFIX + ownerId, JSON.stringify(store));
  }

  applyOrder(ownerId, key, items) {
    const store = this.loadOrderStore(ownerId);
    const order = store[key] || [];
    if (!order.length) return items;
    const rank = new Map();
    order.forEach((p, i) => rank.set(p, i));
    return [...items].sort((a, b) => (rank.get(a.file.path) ?? Number.MAX_SAFE_INTEGER) - (rank.get(b.file.path) ?? Number.MAX_SAFE_INTEGER));
  }

  saveOrder(ownerId, key, files) {
    const store = this.loadOrderStore(ownerId);
    store[key] = [...new Set(files.map(f => f.path))];
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
      pendingBoardFieldValueByPath: { ...this.pendingBoardFieldValueByPath },
    };
  }

  async undoLastAction(profile) {
    if (!this.lastUndoSnapshot || this.lastUndoSnapshot.ownerId !== profile.id) {
      new obsidian.Notice(this.plugin.t('undoNone'));
      return;
    }
    this.saveOrderStore(profile.id, this.lastUndoSnapshot.orderStore || {});
    this.pendingBoardFieldValueByPath = { ...(this.lastUndoSnapshot.pendingBoardFieldValueByPath || {}) };
    this.lastUndoSnapshot = null;
    await this.rerenderPreserveScroll();
    new obsidian.Notice(this.plugin.t('undoDone'));
  }

  async onOpen() {
    await this.renderView();
  }

  async rerenderPreserveScroll() {
    const container = this.containerEl.children[1];
    const scrollTop = container?.scrollTop || 0;
    await this.renderView();
    const nextContainer = this.containerEl.children[1];
    // Wait two animation frames to ensure browser has completed layout before restoring scroll
    await new Promise(resolve => window.requestAnimationFrame(() => window.requestAnimationFrame(resolve)));
    if (nextContainer) nextContainer.scrollTop = scrollTop;
  }

  async askAndMaybeUpdateField(file, field, targetColumn, unsetLabel) {
    const suggested = targetColumn === unsetLabel ? '' : targetColumn;
    const useSuggested = window.confirm(this.plugin.t('moveAsk', { field, value: suggested || this.plugin.t('emptyValue') }));
    const finalValue = useSuggested ? suggested : window.prompt(this.plugin.t('moveManual', { field }), suggested);
    if (finalValue == null) return undefined;
    const value = finalValue.trim();
    try {
      await this.app.fileManager.processFrontMatter(file, fm => {
        if (value) fm[field] = value;
        else delete fm[field];
      });
      new obsidian.Notice(this.plugin.t('moveDone', { field, value: value || this.plugin.t('emptyValue') }));
      return value;
    } catch {
      new obsidian.Notice(this.plugin.t('moveFail'));
      return undefined;
    }
  }

  getBoardFieldValue(file, cache, boardField) {
    if (Object.prototype.hasOwnProperty.call(this.pendingBoardFieldValueByPath, file.path)) {
      return this.pendingBoardFieldValueByPath[file.path] || '';
    }
    return getFrontmatterValues(cache, boardField)[0] || '';
  }

  getBoardFieldValues(file, cache, boardField) {
    if (Object.prototype.hasOwnProperty.call(this.pendingBoardFieldValueByPath, file.path)) {
      return toFlatArray(this.pendingBoardFieldValueByPath[file.path]);
    }
    return getFrontmatterValues(cache, boardField);
  }

  reconcilePendingBoardValue(file, cache, boardField) {
    if (!Object.prototype.hasOwnProperty.call(this.pendingBoardFieldValueByPath, file.path)) return;
    const pending = this.pendingBoardFieldValueByPath[file.path] || '';
    const actual = getFrontmatterValues(cache, boardField)[0] || '';
    if (pending === actual) delete this.pendingBoardFieldValueByPath[file.path];
  }

  renderCard(parent, file, cache, profile, color, showDot) {
    const card = parent.createEl('section');
    card.style.cssText = `position:relative;margin:0 0 12px;padding:12px 14px;border:1px solid var(--background-modifier-border);border-left:4px solid ${color};border-radius:12px;background:color-mix(in srgb, ${color} 9%, var(--background-primary) 91%);`;

    if (showDot) {
      card.createEl('span').style.cssText = `position:absolute;left:-26px;top:17px;width:12px;height:12px;border-radius:50%;background:${color};border:2px solid var(--background-primary);`;
    }

    const top = card.createEl('div');
    top.style.cssText = 'display:flex;align-items:center;gap:10px;overflow:hidden;margin-bottom:5px;';

    const meta = top.createEl('span');
    meta.setText(profile.displayFields.map(k => `${k}: ${getFrontmatterValues(cache, k).join('、') || '-'}`).join(' | '));
    meta.style.cssText = 'font-size:0.85em;color:var(--text-muted);white-space:nowrap;overflow-x:auto;flex:1 1 auto;min-width:100px;';

    const link = top.createEl('a');
    link.setText(file.basename);
    link.className = 'internal-link';
    link.setAttribute('data-href', file.path);
    link.setAttribute('href', file.path);
    link.style.cssText = 'font-size:1em;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:0 1 220px;min-width:80px;';
    const triggerHoverPreview = (e) => {
      this.app.workspace?.trigger?.('hover-link', {
        event: e,
        source: VIEW_TYPE,
        hoverParent: card,
        targetEl: link,
        linktext: file.path,
      });
    };
    link.addEventListener('mouseenter', triggerHoverPreview);
    link.addEventListener('mousemove', triggerHoverPreview);
    link.addEventListener('mouseover', triggerHoverPreview);
    link.addEventListener('pointerenter', triggerHoverPreview);
    link.addEventListener('pointermove', triggerHoverPreview);
    link.addEventListener('click', (e) => {
      e.preventDefault();
      this.app.workspace.openLinkText(file.path, file.path, e.ctrlKey || e.metaKey);
    });

    const triggerHoverPreviewForTarget = (e, targetEl) => {
      const linktext = targetEl.getAttribute('data-href') || targetEl.getAttribute('href') || targetEl.textContent?.trim() || '';
      if (!linktext) return;
      this.app.workspace?.trigger?.('hover-link', {
        event: e,
        source: VIEW_TYPE,
        hoverParent: card,
        targetEl,
        linktext,
      });
    };

    const getInternalLinkElement = (target) => {
      if (target instanceof Element) return target.closest('.internal-link');
      if (target instanceof Node && target.parentElement) return target.parentElement.closest('.internal-link');
      return null;
    };

    const bodyEl = card.createEl('div');
    bodyEl.addClass('sfv-card-body');
    bodyEl.style.cssText = 'max-height:calc(var(--line-height-normal) * 1em * 3);overflow-y:auto;overflow-x:hidden;padding-right:4px;';
    bodyEl.addEventListener('mouseover', (e) => {
      const el = getInternalLinkElement(e.target);
      if (!el) return;
      triggerHoverPreviewForTarget(e, el);
    }, true);
    bodyEl.addEventListener('pointerover', (e) => {
      const el = getInternalLinkElement(e.target);
      if (!el) return;
      triggerHoverPreviewForTarget(e, el);
    }, true);
    bodyEl.addEventListener('mousemove', (e) => {
      const el = getInternalLinkElement(e.target);
      if (!el) return;
      triggerHoverPreviewForTarget(e, el);
    }, true);
    bodyEl.addEventListener('pointermove', (e) => {
      const el = getInternalLinkElement(e.target);
      if (!el) return;
      triggerHoverPreviewForTarget(e, el);
    }, true);
    bodyEl.addEventListener('click', (e) => {
      const el = getInternalLinkElement(e.target);
      if (!el) return;
      const href = el.getAttribute('data-href') || el.getAttribute('href');
      if (!href) return;
      e.preventDefault();
      this.app.workspace.openLinkText(href, file.path, e.ctrlKey || e.metaKey);
    }, true);
    this.app.vault.read(file).then(raw => {
      const body = stripFrontmatter(raw) || '（无正文）';
      obsidian.MarkdownRenderer.render(this.app, body, bodyEl, file.path, this);
    }).catch(() => bodyEl.setText('（正文读取失败）'));
  }

  buildDropdown(container, label, options, selectedValues, onChange, onCommit) {
    const wrap = container.createEl('div');
    wrap.style.cssText = 'display:flex;align-items:flex-start;gap:8px;flex:1 1 420px;min-width:320px;max-width:420px;position:relative;z-index:1;';
    wrap.createEl('span', { text: label }).style.cssText = 'font-size:1em;color:var(--text-normal);min-width:72px;padding-top:8px;white-space:nowrap;';

    const box = wrap.createEl('details');
    box.style.cssText = 'flex:1;position:relative;z-index:1;min-width:0;';
    const summary = box.createEl('summary');
    summary.style.cssText = 'list-style:none;cursor:pointer;height:36px;padding:7px 34px 7px 12px;border-radius:10px;border:1px solid var(--background-modifier-border);font-size:1em;box-sizing:border-box;overflow:hidden;';
    const initialValues = [...selectedValues];
    let currentValues = [...initialValues];
    const summarySpan = summary.createEl('span');
    summarySpan.style.cssText = 'color:var(--text-normal);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
    const toDisplayText = (v) => v === EMPTY_OPTION_VALUE ? this.plugin.t('emptyValue') : v;
    const refreshSummary = () => {
      const isAll = currentValues.length === options.length && options.length > 0;
      const full = !currentValues.length
        ? this.plugin.t('noneSelected')
        : currentValues.map(toDisplayText).join('、');
      const short = !currentValues.length
        ? this.plugin.t('noneSelected')
        : isAll
          ? this.plugin.t('selectAll')
          : (currentValues.length > 3 ? `${this.plugin.t('selected', { count: currentValues.length })}` : full);
      summarySpan.setText(short);
      summarySpan.title = isAll ? this.plugin.t('selectAll') : full;
    };
    refreshSummary();

    const panel = box.createEl('div');
    panel.style.cssText = 'position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:30;max-height:260px;overflow:auto;padding:8px;border-radius:10px;border:1px solid var(--background-modifier-border);background:var(--background-primary);';

    const actionBar = panel.createEl('div');
    actionBar.style.cssText = 'display:flex;gap:10px;align-items:center;margin-bottom:4px;';

    const allBtn = actionBar.createEl('button', { text: this.plugin.t('selectAll') });
    allBtn.style.cssText = 'border:none;background:transparent;color:var(--interactive-accent);cursor:pointer;';
    allBtn.addEventListener('click', (e) => {
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

    const clearBtn = actionBar.createEl('button', { text: this.plugin.t('selectNone') });
    clearBtn.style.cssText = 'border:none;background:transparent;color:var(--interactive-accent);cursor:pointer;';
    clearBtn.addEventListener('click', (e) => {
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

    const search = panel.createEl('input');
    search.type = 'search';
    search.placeholder = this.plugin.t('search');
    search.style.cssText = 'width:100%;height:32px;padding:4px 8px;border-radius:8px;border:1px solid var(--background-modifier-border);margin:6px 0;';

    const list = panel.createEl('div');
    const rows = [];
    for (const option of options) {
      const row = list.createEl('label');
      row.style.cssText = 'display:flex;align-items:center;gap:6px;padding:4px;font-size:1em;';
      const cb = row.createEl('input');
      cb.type = 'checkbox';
      cb.checked = currentValues.includes(option);
      row.createEl('span', { text: toDisplayText(option) });
      cb.addEventListener('change', () => {
        const next = cb.checked ? [...currentValues, option] : currentValues.filter(v => v !== option);
        currentValues = [...new Set(next)];
        onChange(currentValues);
        refreshSummary();
      });
      rows.push({ option, row });
    }

    search.addEventListener('input', () => {
      const q = search.value.toLowerCase();
      for (const { option, row } of rows) row.style.display = (!q || option.toLowerCase().includes(q)) ? 'flex' : 'none';
    });

    box.addEventListener('toggle', () => {
      if (box.open) {
        wrap.style.zIndex = '170';
        box.style.zIndex = '170';
      } else {
        wrap.style.zIndex = '1';
        box.style.zIndex = '1';
        if (onCommit) onCommit();
      }
    });
  }

  async renderView() {
    const profile = this.getRenderProfile();
    const container = this.containerEl.children[1];
    container.empty();
    container.classList.add('smart-folder-view-root');
    this.updateLeafTitle();
    container.style.padding = '16px 18px';
    container.style.overflowY = 'auto';

    if (!profile) {
      container.createEl('p', { text: this.plugin.t('noProfile') });
      return;
    }

    this.ensureState(profile.id, profile.sortOrder, profile.viewMode);

    const topBar = container.createEl('div');
    topBar.style.cssText = 'display:flex;justify-content:flex-start;gap:8px;margin-bottom:10px;';
    const saveBtn = topBar.createEl('button', { text: this.plugin.isDraft(profile.id) ? this.plugin.t('savePage') : this.plugin.t('updatePage') });
    saveBtn.addClass('mod-cta');
    saveBtn.addEventListener('click', async () => {
      try {
        // Save current page config directly into saved pages/history list.
        await this.plugin.saveProfile(profile, true, false);
        await this.rerenderPreserveScroll();
      } catch {
        new obsidian.Notice(this.plugin.t('saveFailed'));
      }
    });
    topBar.createEl('button', { text: this.plugin.t('openBuilderBtn') }).addEventListener('click', () => new SetupModal(this.app, this.plugin).open());
    topBar.createEl('button', { text: this.plugin.t('openManagerBtn') }).addEventListener('click', () => new ProfileManagerModal(this.app, this.plugin).open());
    topBar.createEl('button', { text: this.plugin.t('exportPage') }).addEventListener('click', async () => {
      await this.plugin.exportProfileToMarkdown(profile);
    });
    topBar.createEl('button', { text: this.plugin.t('refreshPreview') }).addEventListener('click', async () => {
      await this.renderView();
      new obsidian.Notice(this.plugin.t('refreshPreviewDone'));
    });

    const files = this.plugin.getFilesByFolder(profile.sourceFolder);
    if (!files.length) {
      container.createEl('p', { text: this.plugin.t('noFiles', { folder: profile.sourceFolder }) });
      return;
    }

    const entries = files.map(file => ({ file, cache: this.app.metadataCache.getFileCache(file) }));
    for (const entry of entries) {
      this.reconcilePendingBoardValue(entry.file, entry.cache, profile.boardField);
    }
    const attrKeys = getAllFrontmatterKeys(entries.map(e => e.cache));
    const optionsByAttr = {};
    for (const key of attrKeys) {
      const values = uniqueSorted(entries.flatMap(e => getFrontmatterValues(e.cache, key)));
      const hasEmpty = entries.some(e => getFrontmatterValues(e.cache, key).length === 0);
      optionsByAttr[key] = hasEmpty ? [...values, EMPTY_OPTION_VALUE] : values;
    }

    if (!this.filterState.enabledFilters.length) this.filterState.enabledFilters = attrKeys.slice(0, 4);

    // Initialize any filter key that has no saved selection to all-selected by default
    let defaultSelectionInitialized = false;
    for (const key of attrKeys) {
      if (!Array.isArray(this.filterState.selectedByAttr[key])) {
        this.filterState.selectedByAttr[key] = [...(optionsByAttr[key] || [])];
        defaultSelectionInitialized = true;
      }
    }
    if (defaultSelectionInitialized) this.saveState();

    const switchesEl = container.createEl('div');
    switchesEl.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px;';
    for (const key of attrKeys) {
      const enabled = this.filterState.enabledFilters.includes(key);
      const chip = switchesEl.createEl('label');
      chip.style.cssText = 'display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;border:1px solid var(--background-modifier-border);font-size:1em;color:var(--text-normal);';
      const cb = chip.createEl('input');
      cb.type = 'checkbox';
      cb.checked = enabled;
      chip.createEl('span', { text: key });
      cb.addEventListener('change', () => {
        const s = new Set(this.filterState.enabledFilters);
        if (cb.checked) s.add(key); else s.delete(key);
        this.filterState.enabledFilters = attrKeys.filter(k => s.has(k));
        this.saveState();
        this.renderView();
      });
    }

    const controls = container.createEl('div');
    controls.style.cssText = 'display:flex;flex-direction:column;gap:8px;margin-bottom:12px;position:relative;z-index:120;overflow:visible;';
    controls.createEl('p', { text: this.plugin.t('presetScopeDesc') }).style.cssText = 'margin:0;color:var(--text-muted);font-size:0.85em;';

    const presets = this.loadPresets();
    const presetWrap = controls.createEl('div');
    presetWrap.style.cssText = 'display:flex;gap:8px;align-items:center;';
    presetWrap.createEl('span', { text: this.plugin.t('preset') }).style.cssText = 'min-width:72px;color:var(--text-normal);';
    const presetSel = presetWrap.createEl('select');
    presetSel.createEl('option', { text: this.plugin.t('noPreset'), value: '' });
    for (const p of presets) {
      const opt = presetSel.createEl('option', { text: p.name, value: p.name });
      if (p.name === this.filterState.presetName) opt.selected = true;
    }
    presetSel.addEventListener('change', () => {
      const currentPresets = this.loadPresets();
      const p = currentPresets.find(x => x.name === presetSel.value);
      if (!p) {
        this.filterState.presetName = '';
      } else {
        this.filterState.enabledFilters = [...p.enabledFilters];
        this.filterState.selectedByAttr = cloneSelectedByAttr(p.selectedByAttr);
        this.filterState.sortOrder = p.sortOrder;
        this.filterState.viewMode = p.viewMode;
        this.filterState.presetName = p.name;
      }
      this.saveState();
      this.renderView();
    });
    makeSelectSearchable(presetSel, this.plugin.t('search'));

    presetWrap.createEl('button', { text: this.plugin.t('savePreset') }).addEventListener('click', async () => {
      const name = (await askTextInput(this.app, this.plugin.t('savePreset'), this.plugin.t('presetPrompt'), this.filterState.presetName || '', this.plugin.t('presetSaveHint')) || '').trim();
      if (!name) {
        new obsidian.Notice(this.plugin.t('presetNameRequired'));
        return;
      }
      const currentPresets = this.loadPresets();
      const next = currentPresets.filter(p => p.name !== name);
      next.push(clonePreset({ name, enabledFilters: [...this.filterState.enabledFilters], selectedByAttr: cloneSelectedByAttr(this.filterState.selectedByAttr), sortOrder: this.filterState.sortOrder, viewMode: this.filterState.viewMode }));
      this.savePresets(next);
      this.filterState.presetName = name;
      this.saveState();
      await this.renderView();
    });

    presetWrap.createEl('button', { text: this.plugin.t('delPreset') }).addEventListener('click', () => {
      if (!this.filterState.presetName) return;
      const currentPresets = this.loadPresets();
      this.savePresets(currentPresets.filter(p => p.name !== this.filterState.presetName));
      this.filterState.presetName = '';
      this.saveState();
      this.renderView();
    });

    const filterGrid = controls.createEl('div');
    filterGrid.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px 10px;align-items:flex-start;';
    for (const key of this.filterState.enabledFilters) {
      this.buildDropdown(filterGrid, key, optionsByAttr[key] || [], this.filterState.selectedByAttr[key] || [], (vals) => {
        this.filterState.selectedByAttr[key] = [...vals];
        this.saveState();
      }, () => {
        this.renderView();
      });
    }
    this.isFreshFilterState = false;

    const sortWrap = controls.createEl('label');
    sortWrap.style.cssText = 'display:flex;gap:8px;align-items:center;';
    sortWrap.createEl('span', { text: this.plugin.t('sortOrder') }).style.cssText = 'min-width:72px;color:var(--text-normal);';
    const sortSel = sortWrap.createEl('select');
    sortSel.createEl('option', { value: 'desc', text: this.plugin.t('desc') });
    sortSel.createEl('option', { value: 'asc', text: this.plugin.t('asc') });
    sortSel.value = this.filterState.sortOrder;
    makeSelectSearchable(sortSel, this.plugin.t('search'));
    sortSel.dispatchEvent(new Event('change'));
    sortSel.addEventListener('change', () => {
      this.filterState.sortOrder = sortSel.value;
      this.saveState();
      this.renderView();
    });

    const modeWrap = controls.createEl('label');
    modeWrap.style.cssText = 'display:flex;gap:8px;align-items:center;';
    modeWrap.createEl('span', { text: this.plugin.t('viewMode') }).style.cssText = 'min-width:72px;color:var(--text-normal);';
    const modeSel = modeWrap.createEl('select');
    modeSel.createEl('option', { value: 'timeline', text: this.plugin.t('timeline') });
    modeSel.createEl('option', { value: 'board', text: this.plugin.t('board') });
    modeSel.value = this.filterState.viewMode;
    makeSelectSearchable(modeSel, this.plugin.t('search'));
    modeSel.dispatchEvent(new Event('change'));
    modeSel.addEventListener('change', async () => {
      this.filterState.viewMode = modeSel.value === 'board' ? 'board' : 'timeline';
      this.saveState();
      this.renderView();
    });

    if (this.filterState.viewMode === 'board') {
      const boardFieldWrap = controls.createEl('label');
      boardFieldWrap.style.cssText = 'display:flex;gap:8px;align-items:center;';
      boardFieldWrap.createEl('span', { text: this.plugin.t('boardField') }).style.cssText = 'min-width:72px;color:var(--text-normal);';
      const boardFieldSel = boardFieldWrap.createEl('select');
      boardFieldSel.createEl('option', { value: '', text: this.plugin.t('choose') });
      for (const k of attrKeys) boardFieldSel.createEl('option', { value: k, text: k });
      boardFieldSel.value = profile.boardField || '';
      makeSelectSearchable(boardFieldSel, this.plugin.t('search'));
      boardFieldSel.addEventListener('change', async () => {
        const next = boardFieldSel.value;
        profile.boardField = next;
        const idx = this.plugin.data.profiles.findIndex(p => p.id === profile.id);
        if (idx >= 0) this.plugin.data.profiles[idx].boardField = next;
        if (this.plugin.draftProfile?.id === profile.id) this.plugin.draftProfile.boardField = next;
        await this.plugin.persist();
        await this.renderView();
      });
    }

    const filtered = entries.filter(({ file, cache }) => {
      if (!this.filterState.enabledFilters.length) return true;
      for (const key of this.filterState.enabledFilters) {
        const selected = Array.isArray(this.filterState.selectedByAttr[key])
          ? this.filterState.selectedByAttr[key]
          : [...(optionsByAttr[key] || [])];
        if (!selected.length) return false;
        const vals = key === profile.boardField
          ? this.getBoardFieldValues(file, cache, profile.boardField)
          : getFrontmatterValues(cache, key);
        const matchEmpty = selected.includes(EMPTY_OPTION_VALUE) && vals.length === 0;
        const matchNormal = selected.some(v => v !== EMPTY_OPTION_VALUE && vals.includes(v));
        if (!(matchEmpty || matchNormal)) return false;
      }
      return true;
    });

    filtered.sort((a, b) => {
      const va = getFrontmatterValues(a.cache, profile.sortField)[0] || a.file.basename;
      const vb = getFrontmatterValues(b.cache, profile.sortField)[0] || b.file.basename;
      const pa = parseSortValue(va);
      const pb = parseSortValue(vb);
      const cmp = (pa.kind === 'number' && pb.kind === 'number')
        ? Number(pa.value) - Number(pb.value)
        : String(pa.raw).localeCompare(String(pb.raw), 'zh-Hans-CN', { numeric: true, sensitivity: 'base' });
      return this.filterState.sortOrder === 'asc' ? cmp : -cmp;
    });

    container.createEl('p', { text: this.plugin.t('matched', { count: filtered.length }) }).style.cssText = 'color:var(--text-muted);margin:0 0 10px;';
    if (!filtered.length) {
      container.createEl('p', { text: this.plugin.t('noMatch') });
      return;
    }

    if (this.filterState.viewMode === 'timeline') {
      const ordered = this.applyOrder(profile.id, this.orderKey(profile), filtered);
      const orderActions = container.createEl('div');
      orderActions.style.cssText = 'display:flex;gap:8px;align-items:center;margin:0 0 10px;';
      orderActions.createEl('button', { text: this.plugin.t('saveOrder') }).addEventListener('click', () => {
        this.saveOrder(profile.id, this.orderKey(profile), ordered.map(e => e.file));
        new obsidian.Notice(this.plugin.t('saveOrderDone'));
      });
      orderActions.createEl('button', { text: this.plugin.t('resetOrder') }).addEventListener('click', async () => {
        this.recordUndoSnapshot(profile);
        this.clearOrder(profile.id, this.orderKey(profile));
        new obsidian.Notice(this.plugin.t('resetOrderDone'));
        await this.renderView();
      });
      orderActions.createEl('button', { text: this.plugin.t('undoLastAction') }).addEventListener('click', async () => {
        await this.undoLastAction(profile);
      });

      const timelineEl = container.createEl('div');
      timelineEl.style.cssText = 'position:relative;padding-left:34px;margin-top:8px;';
      const lineEl = timelineEl.createEl('div');
      lineEl.style.cssText = 'position:absolute;left:16px;top:0;bottom:0;width:2px;background:var(--background-modifier-border);';
      const indicator = timelineEl.createEl('div');
      indicator.style.cssText = 'position:absolute;left:22px;right:0;height:4px;border-radius:6px;background:var(--interactive-accent);opacity:0;pointer-events:none;z-index:40;transition:opacity 80ms ease;';
      let dropBeforePath = null;
      const hideIndicator = () => {
        indicator.style.opacity = '0';
      };
      const updateDropIndicator = (clientY) => {
        const cards = Array.from(timelineEl.querySelectorAll('section[data-sfv-path]')).filter(el => !el.classList.contains('sfv-dragging'));
        if (!cards.length) {
          dropBeforePath = null;
          indicator.style.top = '0px';
          indicator.style.opacity = '1';
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
        dropBeforePath = beforeCard?.getAttribute('data-sfv-path') || null;
        let top = 0;
        if (beforeCard) {
          top = beforeCard.offsetTop - 2;
        } else {
          const last = cards[cards.length - 1];
          top = last.offsetTop + last.offsetHeight - 2;
        }
        indicator.style.top = `${Math.max(0, top)}px`;
        indicator.style.opacity = '1';
      };

      timelineEl.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
        updateDropIndicator(e.clientY);
      });
      timelineEl.addEventListener('dragleave', (e) => {
        const related = e.relatedTarget;
        if (related instanceof Node && timelineEl.contains(related)) return;
        hideIndicator();
      });

      const handleTimelineDrop = async (path, beforePath) => {
        if (this.timelineDropBusy) return;
        if (beforePath && path === beforePath) return;
        const from = ordered.findIndex(e => e.file.path === path);
        if (from < 0) return;
        const moved = ordered[from];
        const nextOrdered = ordered.filter(e => e.file.path !== path);
        const to = beforePath ? nextOrdered.findIndex(e => e.file.path === beforePath) : -1;
        const insertAt = to >= 0 ? to : nextOrdered.length;
        nextOrdered.splice(insertAt, 0, moved);

        const targetField = profile.sortField || '时间';
        const action = await askThreeChoices(this.app, this.plugin.t('timelineMoveTitle'), this.plugin.t('timelineMoveChoice', { field: targetField }), {
          cancel: this.plugin.t('timelineMoveCancel'),
          order: this.plugin.t('timelineMoveOrderOnly'),
          orderAndProp: this.plugin.t('timelineMoveOrderAndProp'),
        });

        if (action === 'cancel') {
          new obsidian.Notice(this.plugin.t('timelineMoveNoChange'));
          return;
        }

        this.timelineDropBusy = true;
        try {
          this.recordUndoSnapshot(profile);
          ordered.splice(0, ordered.length, ...nextOrdered);
          this.saveOrder(profile.id, this.orderKey(profile), ordered.map(e => e.file));

          if (action === 'order+prop') {
            const field = profile.sortField || '时间';
            const current = getFrontmatterValues(this.app.metadataCache.getFileCache(moved.file), field)[0] || '';
            const next = await askTextInput(this.app, this.plugin.t('timelineMoveOrderAndProp'), this.plugin.t('timelineUpdatePrompt', { field }), current, this.plugin.t('timelineUpdatePrompt', { field }));
            if (next != null) {
              const value = next.trim();
              await this.app.fileManager.processFrontMatter(moved.file, fm => {
                if (value) fm[field] = value;
                else delete fm[field];
              });
            }
            new obsidian.Notice(this.plugin.t('timelineMoveDone'));
            await this.rerenderPreserveScroll();
          } else {
            // "order only": re-order existing card DOM nodes directly — no full re-render, no scroll jump
            const cardEls = new Map();
            for (const el of timelineEl.querySelectorAll('section[data-sfv-path]')) {
              cardEls.set(el.getAttribute('data-sfv-path'), el);
            }
            for (const entry of ordered) {
              const el = cardEls.get(entry.file.path);
              if (el) timelineEl.appendChild(el); // moves to end, re-ordering in place
            }
            new obsidian.Notice(this.plugin.t('timelineMoveDone'));
          }
        } finally {
          this.timelineDropBusy = false;
        }
      };

      timelineEl.addEventListener('drop', async (e) => {
        e.preventDefault();
        hideIndicator();
        const payload = e.dataTransfer?.getData('text/plain') || '';
        if (!payload) return;
        const obj = JSON.parse(payload);
        if (obj.token && this.timelineDragToken && obj.token !== this.timelineDragToken) return;
        if (!obj.path || obj.from !== 'timeline') return;
        const beforePath = dropBeforePath;
        await handleTimelineDrop(obj.path, beforePath);
      });

      for (const { file, cache } of ordered) {
        const color = colorForValue(getFrontmatterValues(cache, profile.colorField)[0] || null, this.plugin.data.colorConfig) || this.plugin.data.colorConfig.fallbackColor;
        this.renderCard(timelineEl, file, cache, profile, color, true);
        const card = timelineEl.lastElementChild;
        card.setAttribute('data-sfv-path', file.path);
        card.draggable = true;
        card.addEventListener('dragstart', (e) => {
          this.timelineDragToken = newId();
          card.classList.add('sfv-dragging');
          if (e.dataTransfer) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setDragImage(card, 28, 20);
          }
          e.dataTransfer?.setData('text/plain', JSON.stringify({ path: file.path, from: 'timeline', token: this.timelineDragToken }));
        });
        card.addEventListener('dragend', () => {
          card.classList.remove('sfv-dragging');
          this.timelineDragToken = '';
          hideIndicator();
        });
        card.addEventListener('dragover', e => e.preventDefault());
      }
      return;
    }

    const grouped = new Map();
    const unsetLabel = this.plugin.t('boardUnset');
    for (const entry of filtered) {
      const cols = this.getBoardFieldValues(entry.file, entry.cache, profile.boardField);
      const targets = cols.length ? cols : [unsetLabel];
      for (const col of targets) {
        if (!grouped.has(col)) grouped.set(col, []);
        grouped.get(col).push(entry);
      }
    }

    const columns = uniqueSorted([...grouped.keys()]);

    const orderActions = container.createEl('div');
    orderActions.style.cssText = 'display:flex;gap:8px;align-items:center;margin:0 0 10px;';

    orderActions.createEl('button', { text: this.plugin.t('saveOrder') }).addEventListener('click', () => {
      for (const col of columns) {
        const arr = grouped.get(col) || [];
        this.saveOrder(profile.id, this.orderKey(profile, col), arr.map(e => e.file));
      }
      new obsidian.Notice(this.plugin.t('saveOrderDone'));
    });
    orderActions.createEl('button', { text: this.plugin.t('resetOrder') }).addEventListener('click', async () => {
      this.recordUndoSnapshot(profile);
      for (const col of columns) this.clearOrder(profile.id, this.orderKey(profile, col));
      new obsidian.Notice(this.plugin.t('resetOrderDone'));
      await this.renderView();
    });
    orderActions.createEl('button', { text: this.plugin.t('undoLastAction') }).addEventListener('click', async () => {
      await this.undoLastAction(profile);
    });

    const boardEl = container.createEl('div');
    boardEl.style.cssText = 'display:flex;gap:12px;align-items:flex-start;overflow-x:auto;margin-top:2px;padding-top:2px;';

    const handleDrop = async (payload, to, beforePath) => {
      const fromArr = grouped.get(payload.from) || [];
      const toArr = grouped.get(to) || [];
      const idx = fromArr.findIndex(e => e.file.path === payload.path);
      if (idx < 0) return;
      const moved = fromArr[idx];

      let action = 'order';
      let nextBoardValue = undefined;
      if (payload.from !== to && profile.boardField) {
        action = await askThreeChoices(this.app, this.plugin.t('boardMoveTitle'), this.plugin.t('boardMoveChoice', { field: profile.boardField }), {
          cancel: this.plugin.t('boardMoveCancel'),
          orderAndProp: this.plugin.t('boardMoveOrderAndProp'),
        });
        if (action === 'cancel') {
          new obsidian.Notice(this.plugin.t('boardMoveNoChange'));
          return;
        }
        nextBoardValue = to === unsetLabel ? '' : to;
      }

      this.recordUndoSnapshot(profile);
      const removed = fromArr.splice(idx, 1)[0];
      const pos = beforePath ? toArr.findIndex(e => e.file.path === beforePath) : -1;
      const insertAt = pos >= 0 ? pos : toArr.length;
      toArr.splice(insertAt, 0, removed);
      grouped.set(payload.from, fromArr);
      grouped.set(to, toArr);
      this.saveOrder(profile.id, this.orderKey(profile, payload.from), fromArr.map(e => e.file));
      this.saveOrder(profile.id, this.orderKey(profile, to), toArr.map(e => e.file));

      if (payload.from !== to && profile.boardField && action === 'order+prop') {
        this.pendingBoardFieldValueByPath[removed.file.path] = nextBoardValue;
        if (removed.cache?.frontmatter) {
          if (nextBoardValue) removed.cache.frontmatter[profile.boardField] = nextBoardValue;
          else delete removed.cache.frontmatter[profile.boardField];
        }
        await this.app.fileManager.processFrontMatter(removed.file, fm => {
          if (nextBoardValue) fm[profile.boardField] = nextBoardValue;
          else delete fm[profile.boardField];
        });
      }

      new obsidian.Notice(this.plugin.t('boardMoveDone'));
      await this.rerenderPreserveScroll();
    };

    for (const col of columns) {
      const ordered = this.applyOrder(profile.id, this.orderKey(profile, col), grouped.get(col) || []);
      grouped.set(col, ordered);

      const colWrap = boardEl.createEl('section');
      colWrap.style.cssText = 'min-width:280px;max-width:320px;flex:0 0 300px;border:1px solid var(--background-modifier-border);border-radius:12px;background:var(--background-primary-alt);padding:8px;';
      colWrap.createEl('strong', { text: `${col} (${ordered.length})` });
      const cardsEl = colWrap.createEl('div');
      cardsEl.style.cssText = 'margin-top:8px;min-height:40px;position:relative;';
      const dropIndicator = cardsEl.createEl('div');
      dropIndicator.style.cssText = 'height:10px;border:2px dashed var(--interactive-accent);border-radius:8px;background:color-mix(in srgb, var(--interactive-accent) 12%, transparent);margin:4px 0;opacity:0;pointer-events:none;transition:opacity 80ms ease;';
      let dropBeforePath = null;
      const hideDropIndicator = () => {
        dropIndicator.style.opacity = '0';
        dropBeforePath = null;
      };
      const getNextCardPath = (cardEl) => {
        let next = cardEl.nextElementSibling;
        while (next) {
          if (next.matches?.('section[data-sfv-path]')) return next.getAttribute('data-sfv-path') || null;
          next = next.nextElementSibling;
        }
        return null;
      };
      const getCardDropBeforePath = (cardEl, clientY) => {
        const rect = cardEl.getBoundingClientRect();
        if (clientY < rect.top + rect.height / 2) return cardEl.getAttribute('data-sfv-path') || null;
        return getNextCardPath(cardEl);
      };
      const updateDropIndicator = (clientY) => {
        const cards = Array.from(cardsEl.querySelectorAll('section[data-sfv-path]')).filter(el => !el.classList.contains('sfv-dragging'));
        if (!cards.length) {
          dropBeforePath = null;
          cardsEl.appendChild(dropIndicator);
          dropIndicator.style.opacity = '1';
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
        dropBeforePath = beforeCard?.getAttribute('data-sfv-path') || null;
        if (beforeCard) cardsEl.insertBefore(dropIndicator, beforeCard);
        else cardsEl.appendChild(dropIndicator);
        dropIndicator.style.opacity = '1';
      };
      cardsEl.addEventListener('dragover', e => {
        e.preventDefault();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
        updateDropIndicator(e.clientY);
      });
      cardsEl.addEventListener('dragleave', (e) => {
        const related = e.relatedTarget;
        if (related instanceof Node && cardsEl.contains(related)) return;
        hideDropIndicator();
      });
      cardsEl.addEventListener('drop', async (e) => {
        e.preventDefault();
        const beforePath = dropBeforePath;
        hideDropIndicator();
        const payload = e.dataTransfer?.getData('text/plain') || '';
        if (!payload) return;
        await handleDrop(JSON.parse(payload), col, beforePath);
      });

      for (const { file, cache } of ordered) {
        const color = colorForValue(getFrontmatterValues(cache, profile.colorField)[0] || null, this.plugin.data.colorConfig) || this.plugin.data.colorConfig.fallbackColor;
        this.renderCard(cardsEl, file, cache, profile, color, false);
        const card = cardsEl.lastElementChild;
        card.setAttribute('data-sfv-path', file.path);
        card.draggable = true;
        card.addEventListener('dragstart', (e) => {
          card.classList.add('sfv-dragging');
          e.dataTransfer?.setData('text/plain', JSON.stringify({ path: file.path, from: col }));
        });
        card.addEventListener('dragend', () => {
          card.classList.remove('sfv-dragging');
          hideDropIndicator();
        });
        card.addEventListener('dragover', e => {
          e.preventDefault();
          updateDropIndicator(e.clientY);
        });
        card.addEventListener('drop', async (e) => {
          e.preventDefault();
          e.stopPropagation();
          const beforePath = getCardDropBeforePath(card, e.clientY);
          hideDropIndicator();
          const payload = e.dataTransfer?.getData('text/plain') || '';
          if (!payload) return;
          await handleDrop(JSON.parse(payload), col, beforePath);
        });
      }
    }
  }

  async onClose() {}
}

class SmartFolderSettingTab extends obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl('h2', { text: this.plugin.t('title') });

    new obsidian.Setting(containerEl)
      .setName(this.plugin.t('openBuilder'))
      .addButton(b => b.setButtonText(this.plugin.t('openBuilder')).onClick(() => new SetupModal(this.app, this.plugin).open()));

    new obsidian.Setting(containerEl)
      .setName(this.plugin.t('openManager'))
      .addButton(b => b.setButtonText(this.plugin.t('openManager')).onClick(() => new ProfileManagerModal(this.app, this.plugin).open()));

    new obsidian.Setting(containerEl)
      .setName(this.plugin.t('languageMode'))
      .setDesc(this.plugin.t('languageModeDesc'))
      .addDropdown(d => {
        d.addOption('auto', this.plugin.t('languageAuto'));
        d.addOption('zh', this.plugin.t('languageZh'));
        d.addOption('en', this.plugin.t('languageEn'));
        d.setValue(this.plugin.data.languageMode);
        makeSelectSearchable(d.selectEl, this.plugin.t('search'));
        d.onChange(async (v) => {
          this.plugin.data.languageMode = v;
          await this.plugin.persist();
          this.display();
        });
      });

    containerEl.createEl('h3', { text: this.plugin.t('colorSettings') });

    new obsidian.Setting(containerEl)
      .setName(this.plugin.t('saturationBase'))
      .setDesc('20-80')
      .addSlider(s => s
        .setLimits(20, 80, 1)
        .setValue(this.plugin.data.colorConfig.saturationBase)
        .setDynamicTooltip()
        .onChange(async (v) => {
          this.plugin.data.colorConfig.saturationBase = v;
          await this.plugin.persist();
        }));

    new obsidian.Setting(containerEl)
      .setName(this.plugin.t('saturationRange'))
      .setDesc('1-40')
      .addSlider(s => s
        .setLimits(1, 40, 1)
        .setValue(this.plugin.data.colorConfig.saturationRange)
        .setDynamicTooltip()
        .onChange(async (v) => {
          this.plugin.data.colorConfig.saturationRange = v;
          await this.plugin.persist();
        }));

    new obsidian.Setting(containerEl)
      .setName(this.plugin.t('lightnessBase'))
      .setDesc('20-70')
      .addSlider(s => s
        .setLimits(20, 70, 1)
        .setValue(this.plugin.data.colorConfig.lightnessBase)
        .setDynamicTooltip()
        .onChange(async (v) => {
          this.plugin.data.colorConfig.lightnessBase = v;
          await this.plugin.persist();
        }));

    new obsidian.Setting(containerEl)
      .setName(this.plugin.t('lightnessRange'))
      .setDesc('1-30')
      .addSlider(s => s
        .setLimits(1, 30, 1)
        .setValue(this.plugin.data.colorConfig.lightnessRange)
        .setDynamicTooltip()
        .onChange(async (v) => {
          this.plugin.data.colorConfig.lightnessRange = v;
          await this.plugin.persist();
        }));

    new obsidian.Setting(containerEl)
      .setName(this.plugin.t('fallbackColor'))
      .setDesc('CSS color value, e.g. #3b82f6 or var(--interactive-accent)')
      .addText(t => t
        .setPlaceholder('var(--interactive-accent)')
        .setValue(this.plugin.data.colorConfig.fallbackColor)
        .onChange(async (v) => {
          this.plugin.data.colorConfig.fallbackColor = v.trim() || DEFAULT_COLOR_CONFIG.fallbackColor;
          await this.plugin.persist();
        }))
      .addButton(b => b
        .setButtonText(this.plugin.t('resetDefault'))
        .onClick(async () => {
          this.plugin.data.colorConfig = { ...DEFAULT_COLOR_CONFIG };
          await this.plugin.persist();
          this.display();
        }));
  }
}

class SmartFolderPlugin extends obsidian.Plugin {
  t(key, vars) {
    const mode = this.data?.languageMode || 'auto';
    const lang = mode === 'auto' ? detectLanguage() : mode;
    return tpl(I18N[lang]?.[key] || key, vars);
  }

  getFolderOptions() {
    const set = new Set();
    for (const f of this.app.vault.getMarkdownFiles()) {
      if (f.parent?.path) set.add(f.parent.path);
    }
    return ['', ...uniqueSorted([...set])];
  }

  getFilesByFolder(sourceFolder) {
    if (!sourceFolder) return this.app.vault.getMarkdownFiles();
    const prefix = sourceFolder.replace(/\/$/, '') + '/';
    return this.app.vault.getMarkdownFiles().filter(f => f.path.startsWith(prefix) || f.parent?.path === sourceFolder);
  }

  getTemplateFileOptions() {
    return this.app.vault.getMarkdownFiles().map(f => f.path);
  }

  getFieldCandidates(sourceFolder, templateFile) {
    const template = templateFile ? this.app.vault.getAbstractFileByPath(templateFile) : null;
    const templateKeys = (template instanceof obsidian.TFile)
      ? getAllFrontmatterKeys([this.app.metadataCache.getFileCache(template)])
      : [];

    const files = this.getFilesByFolder(sourceFolder);
    const caches = files.map(f => this.app.metadataCache.getFileCache(f));
    const allKeys = getAllFrontmatterKeys(caches);
    const common = allKeys.filter(k => caches.every(c => !c?.frontmatter || k in c.frontmatter));
    return uniqueSorted([...templateKeys, ...common]);
  }

  getCurrentProfile() {
    if (this.draftProfile) return this.draftProfile;
    const id = this.data.lastActiveProfileId;
    return this.data.profiles.find(p => p.id === id) || null;
  }

  isDraft(id) {
    return !!this.draftProfile && this.draftProfile.id === id;
  }

  setDraftProfile(profile) {
    this.draftProfile = { ...profile, displayFields: [...(profile.displayFields || [])], updatedAt: Date.now() };
  }

  clearDraftProfile() {
    this.draftProfile = null;
  }

  async saveProfile(profile, setActive, askNameIfEmpty) {
    const next = { ...profile, displayFields: [...(profile.displayFields || [])], updatedAt: Date.now() };
    if (!next.name && askNameIfEmpty) next.name = (window.prompt(this.t('pageNamePrompt'), next.sourceFolder || '') || '').trim();
    if (!next.name) next.name = next.sourceFolder || `Page-${new Date().toISOString()}`;

    const idx = this.data.profiles.findIndex(p => p.id === next.id);
    if (idx >= 0) {
      this.data.profiles[idx] = { ...this.data.profiles[idx], ...next };
      new obsidian.Notice(this.t('pageUpdated'));
    } else {
      next.createdAt = next.createdAt || Date.now();
      this.data.profiles.push(next);
      new obsidian.Notice(this.t('pageSaved'));
    }

    if (setActive) this.data.lastActiveProfileId = next.id;
    if (this.draftProfile?.id === next.id) this.draftProfile = null;
    await this.persist();
  }

  normalizeExportProfile(raw) {
    if (!raw || typeof raw !== 'object') return null;
    const profile = {
      id: String(raw.id || newId()),
      name: String(raw.name || ''),
      sourceFolder: String(raw.sourceFolder || ''),
      templateFile: String(raw.templateFile || ''),
      colorField: String(raw.colorField || ''),
      displayFields: Array.isArray(raw.displayFields) ? raw.displayFields.map(v => String(v)).filter(Boolean) : [],
      sortField: String(raw.sortField || ''),
      sortOrder: raw.sortOrder === 'asc' ? 'asc' : 'desc',
      viewMode: raw.viewMode === 'board' ? 'board' : 'timeline',
      boardField: String(raw.boardField || ''),
      createdAt: typeof raw.createdAt === 'number' ? raw.createdAt : Date.now(),
      updatedAt: Date.now(),
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
    const existing = this.data.profiles.find(p => p.id === profile.id)
      || this.data.profiles.find(p => p.name === profile.name && p.sourceFolder === profile.sourceFolder);
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
      new obsidian.Notice(this.t('noProfile'));
      return;
    }
    try {
      const folders = this.getFolderOptions();
      const defaultFolder = this.app.vault.getAbstractFileByPath('00 Homepage') instanceof obsidian.TFolder ? '00 Homepage' : '';
      const chosenFolder = await askFolderSelect(this.app, this, folders, defaultFolder);
      if (chosenFolder == null) return;

      const safeBase = (profile.name || profile.sourceFolder || 'smart-folder-page')
        .replace(/[\\/:*?"<>|]/g, '-')
        .trim() || 'smart-folder-page';
      const folderPrefix = chosenFolder ? `${chosenFolder}/` : '';
      let path = `${folderPrefix}${safeBase}.smart-folder-page.md`;
      let i = 1;
      while (this.app.vault.getAbstractFileByPath(path)) {
        path = `${folderPrefix}${safeBase}.smart-folder-page-${i}.md`;
        i += 1;
      }

      const payload = {
        ...profile,
        exportedAt: new Date().toISOString(),
      };
      const content = [
        '---',
        'type: smart-folder-view-page-export',
        `name: ${String(profile.name || '').replace(/\n/g, ' ')}`,
        `sourceFolder: ${String(profile.sourceFolder || '').replace(/\n/g, ' ')}`,
        `templateFile: ${String(profile.templateFile || '').replace(/\n/g, ' ')}`,
        `viewMode: ${profile.viewMode || 'timeline'}`,
        `sortField: ${String(profile.sortField || '').replace(/\n/g, ' ')}`,
        `sortOrder: ${profile.sortOrder || 'desc'}`,
        `boardField: ${String(profile.boardField || '').replace(/\n/g, ' ')}`,
        `exportedAt: ${new Date().toISOString()}`,
        '---',
        '',
        '# Smart Folder 页面导出',
        '',
        '```smart-folder-page',
        JSON.stringify(payload, null, 2),
        '```',
        '',
      ].join('\n');

      await this.app.vault.create(path, content);
      new obsidian.Notice(this.t('exportPageDone', { path }));
    } catch {
      new obsidian.Notice(this.t('exportPageFailed'));
    }
  }

  async onload() {
    await this.loadPluginData();

    this.styleEl = document.createElement('style');
    this.styleEl.textContent = `
      .smart-folder-view-root {
        position: relative;
        font-size: 12px;
        line-height: 1.45;
        border-radius: 12px;
        overflow: hidden;
        background: rgba(252, 253, 255, 0.8);
        backdrop-filter: blur(8px) saturate(1.03);
        box-shadow: inset 0 0 0 9999px rgba(255, 255, 255, 0.28);
      }
      .theme-dark .smart-folder-view-root {
        background: rgba(5, 8, 12, 0.8);
        backdrop-filter: blur(8px) saturate(0.95);
        box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, 0.28);
      }
      .smart-folder-view-root details {
        position: relative;
      }
      .smart-folder-view-root details[open] {
        z-index: 200;
      }
      .smart-folder-view-root .sfv-dragging {
        opacity: 0.72;
      }
      .smart-folder-view-root .sfv-card-body,
      .smart-folder-view-root .sfv-card-body p,
      .smart-folder-view-root .sfv-card-body li,
      .smart-folder-view-root .sfv-card-body ul,
      .smart-folder-view-root .sfv-card-body ol,
      .smart-folder-view-root .sfv-card-body a,
      .smart-folder-view-root .sfv-card-body strong,
      .smart-folder-view-root .sfv-card-body em,
      .smart-folder-view-root .sfv-card-body code,
      .smart-folder-view-root .sfv-card-body span,
      .smart-folder-view-root .sfv-card-body h1,
      .smart-folder-view-root .sfv-card-body h2,
      .smart-folder-view-root .sfv-card-body h3,
      .smart-folder-view-root .sfv-card-body h4,
      .smart-folder-view-root .sfv-card-body h5,
      .smart-folder-view-root .sfv-card-body h6 {
        font-size: calc(var(--font-text-size) - 1px) !important;
        line-height: var(--line-height-normal) !important;
      }
      .smart-folder-view-root button,
      .smart-folder-view-root input,
      .smart-folder-view-root select,
      .smart-folder-view-root summary,
      .smart-folder-view-root label,
      .smart-folder-view-root span,
      .smart-folder-view-root p {
        font-size: 12px;
      }
    `;
    document.head.appendChild(this.styleEl);

    this.registerView(VIEW_TYPE, leaf => new SmartFolderView(leaf, this));

    this.registerMarkdownCodeBlockProcessor('smart-folder-page', async (source, el) => {
      el.empty();
      let raw;
      try {
        raw = JSON.parse(source || '{}');
      } catch {
        el.createEl('p', { text: this.t('exportBlockInvalid') });
        return;
      }

      const profile = this.normalizeExportProfile(raw);
      if (!profile) {
        el.createEl('p', { text: this.t('exportBlockInvalid') });
        return;
      }

      if (!el.dataset.sfvAutoOpened) {
        el.dataset.sfvAutoOpened = '1';
        window.setTimeout(async () => {
          await this.openProfileFromExport(raw);
        }, 0);
      }

      const wrap = el.createEl('div');
      wrap.style.cssText = 'border:1px solid var(--background-modifier-border);border-radius:10px;padding:10px;background:var(--background-primary-alt);';
      wrap.createEl('strong', { text: this.t('exportBlockTitle') });
      wrap.createEl('p', { text: `${this.t('exportBlockDesc')} ${profile.name || profile.sourceFolder}` }).style.cssText = 'margin:6px 0;color:var(--text-muted);';
      const row = wrap.createEl('div');
      row.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;';
      const openBtn = row.createEl('button', { text: this.t('exportBlockOpen') });
      openBtn.addClass('mod-cta');
      openBtn.addEventListener('click', async () => {
        const ok = await this.openProfileFromExport(raw);
        if (!ok) new obsidian.Notice(this.t('exportBlockInvalid'));
      });
      const importBtn = row.createEl('button', { text: this.t('exportBlockImport') });
      importBtn.addEventListener('click', async () => {
        const ok = await this.importProfileFromExport(raw);
        if (!ok) new obsidian.Notice(this.t('exportBlockInvalid'));
      });
    });

    this.registerDomEvent(document, 'pointerdown', (ev) => {
      const target = ev.target;
      if (!(target instanceof Element)) return;
      const openBoxes = document.querySelectorAll('.smart-folder-view-root details[open]');
      for (const box of openBoxes) {
        if (box.contains(target)) continue;
        box.removeAttribute('open');
      }
    }, true);
    this.registerDomEvent(document, 'keydown', (ev) => {
      if (ev.key !== 'Escape') return;
      const openBoxes = document.querySelectorAll('.smart-folder-view-root details[open]');
      for (const box of openBoxes) box.removeAttribute('open');
    });

    this.addRibbonIcon('layout-grid', this.t('title'), async () => {
      const action = await askStartAction(this.app, this);
      if (action === 'open') new ProfileManagerModal(this.app, this).open();
      else if (action === 'create') new SetupModal(this.app, this).open();
    });
    this.addCommand({ id: 'open-smart-folder-view', name: this.t('openBuilder'), callback: () => new SetupModal(this.app, this).open() });
    this.addCommand({ id: 'open-smart-folder-view-builder', name: this.t('openBuilder'), callback: () => new SetupModal(this.app, this).open() });
    this.addCommand({ id: 'open-smart-folder-view-manager', name: this.t('openManager'), callback: () => new ProfileManagerModal(this.app, this).open() });
    this.addCommand({ id: 'open-smart-folder-view-last', name: this.t('openLast'), callback: async () => {
      if (!this.getCurrentProfile()) {
        new obsidian.Notice(this.t('noProfile'));
        new SetupModal(this.app, this).open();
        return;
      }
      await this.activateView({ profile: this.getCurrentProfile(), newLeaf: true });
    } });
    this.addCommand({ id: 'export-smart-folder-page', name: this.t('exportPage'), callback: async () => {
      const profile = this.getCurrentProfile();
      if (!profile) {
        new obsidian.Notice(this.t('noProfile'));
        return;
      }
      await this.exportProfileToMarkdown(profile);
    } });

    this.addSettingTab(new SmartFolderSettingTab(this.app, this));
  }

  async activateView(opts = {}) {
    const { profile = null, newLeaf = false, persistLastActive = true } = opts;
    const { workspace } = this.app;
    let leaf = null;
    if (!newLeaf) leaf = workspace.getLeavesOfType(VIEW_TYPE)[0] || null;
    if (!leaf) {
      leaf = workspace.getLeaf('tab');
      await leaf.setViewState({ type: VIEW_TYPE, active: true });
    }
    workspace.revealLeaf(leaf);
    const view = leaf.view;
    if (view instanceof SmartFolderView) {
      view.setPinnedProfile(profile || null);
      if (persistLastActive && profile?.id) {
        this.data.lastActiveProfileId = profile.id;
        await this.persist();
      }
      await view.onOpen();
    }
  }

  onunload() {
    if (this.styleEl) this.styleEl.remove();
    this.app.workspace.detachLeavesOfType(VIEW_TYPE);
  }

  async loadPluginData() {
    const raw = await this.loadData();
    this.data = {
      language: raw?.language === 'zh' || raw?.language === 'en' ? raw.language : detectLanguage(),
      languageMode: raw?.languageMode === 'auto' || raw?.languageMode === 'zh' || raw?.languageMode === 'en'
        ? raw.languageMode
        : 'auto',
      profiles: Array.isArray(raw?.profiles) ? raw.profiles : [],
      lastActiveProfileId: typeof raw?.lastActiveProfileId === 'string' ? raw.lastActiveProfileId : '',
      colorConfig: {
        saturationBase: typeof raw?.colorConfig?.saturationBase === 'number' ? clamp(raw.colorConfig.saturationBase, 20, 80) : DEFAULT_COLOR_CONFIG.saturationBase,
        saturationRange: typeof raw?.colorConfig?.saturationRange === 'number' ? clamp(raw.colorConfig.saturationRange, 1, 40) : DEFAULT_COLOR_CONFIG.saturationRange,
        lightnessBase: typeof raw?.colorConfig?.lightnessBase === 'number' ? clamp(raw.colorConfig.lightnessBase, 20, 70) : DEFAULT_COLOR_CONFIG.lightnessBase,
        lightnessRange: typeof raw?.colorConfig?.lightnessRange === 'number' ? clamp(raw.colorConfig.lightnessRange, 1, 30) : DEFAULT_COLOR_CONFIG.lightnessRange,
        fallbackColor: typeof raw?.colorConfig?.fallbackColor === 'string' && raw.colorConfig.fallbackColor.trim()
          ? raw.colorConfig.fallbackColor
          : DEFAULT_COLOR_CONFIG.fallbackColor,
      },
    };
    this.draftProfile = null;
  }

  async persist() {
    await this.saveData(this.data);
  }
}

module.exports = SmartFolderPlugin;
