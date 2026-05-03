# Smart Folder View - 下一步执行清单

更新时间：2026-05-03

## 当前状态

- 社区插件提交流程已完成：PR 已创建并通过自动校验（Ready for review）。
- 插件仓库已发布 `0.1.0` 正式 Release（非 pre-release）。

## 下次开工先做这 3 件事

1. 打开社区 PR，查看是否有人工审核评论。
2. 如果有修改意见：在仓库修复 -> 发新 Release 资产 -> 在同一个 PR 回复“已修复”。
3. 如果没有评论：转去完善 README（截图/GIF/使用示例），提升安装转化。

## 审核阶段操作规范

- 不要新开 PR，所有修改都在现有 PR 上继续。
- 不要关闭 PR。
- 每次修改后都在 PR 下留一句简短回复，说明改了什么。
- 如果改了影响发布的文件（如 `main.js`、`manifest.json`、`styles.css`），要同步更新 GitHub Release 资产。

## README 强化清单（优先级高）

- [ ] 增加 1 张总览截图（时间轴 + 看板）
- [ ] 增加 3-4 段短 GIF（每段 10-20 秒）
- [ ] 增加“30 秒上手”步骤
- [ ] 增加“典型使用场景”
- [ ] 增加“常见问题 / 排查”
- [ ] 增加中英文标题锚点（便于分享）

## 演示素材脚本（可直接照着录）

### GIF 1：创建页面

1. 打开命令：Create Smart Folder Page
2. 选择来源文件夹、模板、字段
3. 点击 Preview
4. 点击 Save and Open

### GIF 2：时间轴操作

1. 切换筛选条件
2. 拖动卡片调整顺序
3. 点击 Undo last action

### GIF 3：看板操作

1. 切换到 Board
2. 跨列拖拽卡片
3. 展示自动更新分组字段

### GIF 4：预设与复用

1. 保存 preset
2. 切换 preset
3. 展示状态持久化

## 版本发布 SOP（后续每个版本都按这个走）

1. 修改代码。
2. 更新 `manifest.json` 的 `version` 与必要字段。
3. 更新 `versions.json`：新增 `"新版本": "最低兼容版本"`。
4. 打包并创建 GitHub Release（tag 必须与版本号完全一致，不加 `v`）。
5. 上传 Release 资产：
   - `main.js`
   - `manifest.json`
   - `styles.css`（如有）
6. 在社区 PR（审核期）或新版本发布说明（已上架后）同步说明变更。

## 你可以晚点再做的优化

- [ ] 配置 Git 全局身份，消除 commit 提示：
  - `git config --global user.name "your-name"`
  - `git config --global user.email "your-email"`
- [ ] 补一个 `CHANGELOG.md`（可选）
- [ ] 增加 issue 模板（bug / feature request）

## 快速入口链接

- 插件仓库：<https://github.com/sixtarocyan/smart-folder-view>
- 社区提交 PR：<https://github.com/obsidianmd/obsidian-releases/pull/12499>
- Obsidian 插件指南：<https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines>
