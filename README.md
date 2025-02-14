<h1>消金 Angular - 官網</h1>

<h2>目錄</h2>

- [使用技術](#使用技術)
- [開發環境需求](#開發環境需求)
- [目錄架構](#目錄架構)
- [NPM 常用指令](#npm-常用指令)
- [啟動](#啟動)
  - [啟動專案](#啟動專案)
  - [本地直接連測試機](#本地直接連測試機)
  - [編譯](#編譯)
  - [預覽編譯](#預覽編譯)
- [部署](#部署)
  - [分支與部署](#分支與部署)
  - [版本發布](#版本發布)
- [Git Message](#git-message)
- [Linter](#linter)
  - [程式碼檢查](#程式碼檢查)
  - [Git Message 檢查](#git-message-檢查)
- [Git Commit Trigger Event](#git-commit-trigger-event)
- [更新 browserslist](#更新-browserslist)
- [NPM Script](#npm-script)
- [命名格式](#命名格式)
  - [目錄與檔案命名規則](#目錄與檔案命名規則)
  - [變數命名規則](#變數命名規則)
- [檔案內容排序規則](#檔案內容排序規則)
  - [規則](#規則)
  - [範例](#範例)
- [TSDoc 註解](#tsdoc-註解)
  - [@param](#param)
  - [@example](#example)
- [功能說明](#功能說明)
  - [表單 back 按鈕導向判斷邏輯](#表單-back-按鈕導向判斷邏輯)
  - [功能的狀態碼](#功能的狀態碼)
    - [status translate text](#status-translate-text)

<hr>

### 使用技術

- [Angular - v15](https://angular.io)
- [TypeScript](https://www.typescriptlang.org)
- [RxJS - v7](https://rxjs.dev)
- [SCSS](https://sass-lang.com)
- [TailwindCSS - v3](https://tailwindcss.com/)

### 開發環境需求

- [Nodejs = 14.21.3 LTS](https://nodejs.org/zh-tw/)
- [VSCode](https://code.visualstudio.com/)
  - P.S. 安裝專案下 .vscode/extensions.json 所列的 extension
- [Angular 13](https://github.com/angular/angular/tree/13.3.11)
- [Angular DevTools](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh)

### 目錄架構

```sh
├── .angular                      # angular cache
├── .vscode                       # 此專案的 vscode 設定
│   ├── extensions.json           # 專案所需的 extensions
│   └── settings.json             # 專案所需的設定
├── dist                          # 專案編譯後的路徑
├── node_modules                  # 存放安裝的套件
├── src                           # 原始碼
│   ├── app                       # 主程式資料夾
│   │   ├── core                  # 存放核心模組 (singleton)
│   │   ├── features              # 存放功能模組
│   │   │   └── pages             # 主要開發的功能頁面
│   │   ├── layout                # layout 首頁
│   │   ├── shared                # 共用模組
│   │   ├── app-routing.module    # 主要路由設定
│   │   ├── app.component.html    # 根元件 html
│   │   ├── app.component.scss    # 根元件 scss
│   │   ├── app.component.ts      # 根元件 ts
│   │   └── app.module.ts         # 根模組
│   ├── assets                    # 靜態資源
│   │   ├── i18n                  # 多國語系
│   │   ├── images                # 圖片
│   │   └── styles                # scss
│   ├── environments              # 區分不同環境設定檔
│   ├── favicon.ico               # 網頁 favicon.ico
│   ├── index.html                # 入口頁面
│   ├── main.ts                   # angular 入口檔案
│   ├── polyfills.ts              # polyfills
│   ├── styles.scss               # 存放 scss
│   └── test.ts                   # 測試入口點
├── .browserslistrc               # 瀏覽器兼容性配置
├── .commitlintrc.json            # commit檢查配置
├── .editorconfig                 # 編碼樣式的文件格式配置
├── .eslintrc.js                  # eslint 配置
├── .gitignore                    # git 忽略配置
├── .gitlab-ci.yml                # gitlab CI/CD 配置
├── .lintstagedrc.json            # lint staged 配置
├── .npmrc                        # npm 配置
├── .nvmrc                        # nvm 配置
├── angular.json                  # angular 配置
├── Dockerfile                    # Dockerfile
├── nginx.conf                    # docker nginx 配置
├── package-lock.json             # package-lock.json
├── package.json                  # package.json
├── pom.xml                       # war檔配置
├── README.md                     # 專案說明
├── tailwind.config.js            # tailwindcss 配置
├── tsconfig.app.json             # typescript 配置
├── tsconfig.doc.json             # typescript compodoc 配置
├── tsconfig.json                 # typescript 配置
├── version.sh                    # CI/CD 取得當前版號 script
└── web.xml                       # war檔案路徑配置
```

### NPM 常用指令

- `npm install` 安裝 json.package 所有套件
- `npm install [package]` 安裝套件
- `npm install -D [package]` 安裝 dev 套件
- `npm install -g [package]` 安裝在電腦全域中
- `npm uninstall [package]` 移除專案套件

### 啟動

#### 啟動專案

1. 安裝專案所需套件
   ```sh
   npm ci
   ```
   > P.S. 請確認 nodejs 版本是否為 .nvmrc 所設定版本。
2. 啟動開發
   ```sh
   npm start
   ```

#### 本地直接連測試機

TPI SIT

```sh
npm run start
```

cathay SIT

```sh
npm run start:sit:cathay
```

#### 編譯

```sh
npm run build
```

產生檔案路徑為 `dist/official-web`

#### 預覽編譯

```sh
npm run preview
```

### 部署

#### 分支與部署

| 分支             | 主機
| :--------------- | :------- |
| develop-v2-tpi   | 昕力-SIT |
| develop          | 數銀-UAT |

### Git Message

採用 https://www.conventionalcommits.org/zh-hant/ 規範
主要有以下 type

- chore: 其他瑣事
- core: 核心
- docs: 文件
- feat: 功能/修改
- fix: 修正
- perf: 優化
- refactor: 重構
- revert: 恢復
- style: 排版樣式
- test: 單元測試


#### 程式碼檢查

使用的是 `eslint`, 如需調整可參考專案下 `.eslintrc.json`。

手動執行修正的指令。

```sh
npm run lint:fix
```

#### Git Message 檢查

使用的是 `commitlint,` 如需調整可參考專案下 `.commitlintrc.json`。


### 更新 browserslist

```sh
npm run browserslist:update
```

[Why You Need to Call it Regularly](https://github.com/browserslist/update-db#why-you-need-to-call-it-regularly)

> This update will bring data about new browsers to polyfills tools like Autoprefixer or Babel and reduce already unnecessary polyfills.

### NPM Script

執行方式 `npm run [script-name]`。

- `lint` 程式碼檢查。
- `lint:only_error` 程式碼檢查只顯示 Error 層級。
- `lint:eslint_current_rule` 顯示當前 eslint 規則。
- `lint:per_rule_performance` 顯示 eslint 規則檢查到錯誤的佔比。
- `fix` 手動執行檢查並修正 程式碼、樣式、排版。

### 命名格式

| Formatting  | Name                   |
| ----------- | ---------------------- |
| helloWorld  | `CAMEL_CASE`           |
| HelloWorld  | `PASCAL_CASE`          |
| hello_world | `SNAKE_CASE`           |
| hello-world | `KEBAB_CASE`           |
| HELLO_WORLD | `SCREAMING_SNAKE_CASE` |

#### 目錄與檔案命名規則

大原則：統一使用 `KEBAB_CASE` 格式命名。

angular 檔案的檔名後綴請加上目錄單數名稱 `types/file-name.type.ts`，例如：

| Type      | Folder     | Example                             |
| --------- | ---------- | ----------------------------------- |
| component | components | components/hello-world.component.ts |
| directive | directives | directives/hello-world.directive.ts |
| pipe      | pipes      | pipes/hello-world.pipe.ts           |
| validator | validators | pipes/hello-world.validator.ts      |
| model     | models     | models/hello-world.model.ts         |
| guard     | guards     | guards/hello-world.guard.ts         |
| service   | services   | services/hello-world.service.ts     |

#### 變數命名規則

<table>
  <tr>
    <td>Type</td>
    <td>Formatting</td>
    <td>Example</td>
  </tr>
  <tr>
    <td>interface</td>
    <td>PascalCase</td>
    <td><pre>interface Foo {}</pre></td>
  </tr>
  <tr>
    <td>type</td>
    <td>PascalCase</td>
    <td><pre>type Foo = string</pre></td>
  </tr>
  <tr>
    <td>enum</td>
    <td>PascalCase</td>
    <td><pre>enum Foo {}</pre></td>
  </tr>
  <tr>
    <td>enum member</td>
    <td>camelCase、PascalCase</td>
    <td><pre>enum Foo { bar: 'bar' Bar: 'bar' }</pre></td>
  </tr>
  <tr>
    <td>variable</td>
    <td>camelCase</td>
    <td><pre>let foo = 'bar'</pre></td>
  </tr>
  <tr>
    <td>const variable</td>
    <td>camelCase、PascalCase、PascalCase</td>
    <td>
      <pre>const foo = 'bar' const Foo = 'bar' const FOO_BAR = 'bar'</pre>
    </td>
  </tr>
  <tr>
    <td>function</td>
    <td>camelCase</td>
    <td><pre>function foo() {}</pre></td>
  </tr>
  <tr>
    <td>function parameter</td>
    <td>camelCase</td>
    <td><pre>function foo(bar: string) {}</pre></td>
  </tr>
  <tr>
    <td>class</td>
    <td>PascalCase</td>
    <td><pre>class Foo {}</pre></td>
  </tr>
  <tr>
    <td>class property</td>
    <td>camelCase、PascalCase、UPPER_CASE</td>
    <td><pre>class Foo { bar = 'bar' Bar = 'bar' BAR = 'bar' }</pre></td>
  </tr>
  <tr>
    <td>readonly class property</td>
    <td>UPPER_CASE</td>
    <td><pre>class Foo { readonly BAR = 'bar' }</pre></td>
  </tr>
  <tr>
    <td>
      private class property 、 <br>
      private constructor parameter、 <br>
      private function
    </td>
    <td>add underscore prefix</td>
    <td>
      <pre>
class Foo {
  private _bar = bar';
  constructor(private _barService: BarService) {};
  private function _getBar() {} ;
}</pre>
    </td>
  </tr>
</table>

> P.S. 實際請依據 `.eslintrc.json ` 中的 @typescript-eslint/naming-convention 設定為主。

### 檔案內容排序規則

#### 規則

1. 先依照類型順序
   1. field
   2. constructor
   3. setters、getters
   4. methods
2. 再依照
   1. static
   2. decorated
   3. instance
3. 再依照 Accessibility 順序
   1. public
   2. protected
   3. private

#### 範例

```typescript
class Foo {
  protected static aField: string; // field

  @Input() bField = 'bar'; // field

  public cField: string; // field

  protected dField: string; // field

  private _eField: string; // field

  constructor() {} // constructor

  set aSetter(value: string) {} // setters、getters

  get aGetter(): string {
    return 'bar';
  } // setters、getters

  public static fnA(): void {} // method

  @HostListener('click', ['$event.target'])
  fnClick(): void {} // method

  public fnB(): void {} // method

  protected fnC(): void {} // method

  private _fnD(): void {} // method
}
```

> P.S. 實際請依據 `.eslintrc.json ` 中的 @typescript-eslint/member-ordering 設定為主。

### TSDoc 註解

參考 https://tsdoc.org/

- `@param` 描述傳遞給函式的參數
- `@returns` 描述一個函式的返回值
- `@example` 舉例

#### @param

```typescript
/**
 * 數字相加
 * @param a - 描述參數 a
 * @param b - 描述參數 b
 * @returns 數字總和
 *
 */
function add(a: number, b: number): number {
  return a + b;
}
```

#### @example

````typescript
/**
 * Custom Directive
 *
 * @example
 * ``` html
 * <div app-custom></div>
 * ```
 */
@Directive({
  selector: '[appCustom]',
})
export class CustomDirective
````


#### 表單 back 按鈕導向判斷邏輯

```html
<!-- src/app/shared/directives/back.directive.ts -->
<button [appBack]="backRouterLink">back</button>
```

- `appBack` 屬性是否有設定路由 ?
  - Y: 導向到 `appBack` 設定的路由
  - N: 是否有 `backRouterLink` query string 參數 ?
    - Y: 導向到 `backRouterLink`
    - N: 是否是首次載入的頁面 (history.state?.navigationId === 1) ?
      - Y: 導向到 預設路由('' = home)
      - N: 回上一頁


##### status translate text

```html
{{ statusCode | statusTranslate: 'Common' }}
```

- 作用: 依據狀態顯示對應的翻譯文字。
- 檔案: src/app/shared/pipes/status-translate.pipe.ts

