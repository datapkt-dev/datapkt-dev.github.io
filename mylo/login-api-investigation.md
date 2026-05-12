# MYLO 登入頁後端連線檢查結果

檢查時間：2026-05-12  
檔案範圍：`mylo/index.html`、`mylo/assets/index-cXlvhlzc.js`

## 1) 編譯後 JS 是否有 API 請求 / Base URL / 認證處理

有，且是 **axios + Bearer token** 流程（不是 fetch / Firebase / Supabase）。

### 證據（`mylo/assets/index-cXlvhlzc.js`）

> 這個 bundle 是單行壓縮檔，以下為原字串片段：

```js
let apiUrl="";apiUrl="";
const apiRequest=axios.create({baseURL:`${apiUrl}`,headers:{Authorization:`Bearer ${localStorage.getItem("AccessToken")}`}})
```

```js
apiRequest.interceptors.request.use(async t=>(DataLoadingOn(),t.headers.Authorization=`Bearer ${localStorage.getItem("AccessToken")}`,t)
```

```js
const Login=async t=>apiRequest.post("/api/v1/login",t)
```

補充：
- `fetch(` 字串存在於第三方程式碼（如 Vue/prefetch 與 PDF/worker 相關），但登入主流程是 `axios.create(...)` + `apiRequest.post(...)`。
- 未看到 `supabase` / `firebase` 關鍵字。

## 2) 登入功能流程與按鈕點擊實際行為

是「真的送 HTTP 請求」的前端流程，不是純前端 mock。

### 證據（`mylo/assets/index-cXlvhlzc.js`）

```js
_sfc_main$t={__name:"loginPage",setup(t){
  const l=ref("mylo02"),u=ref("abcd1234"),
  o=()=>{Login({employee_no:l.value,password:u.value})
    .then(c=>{let{token:i}=c.data;
      n.value=!0;
      a.value={name:"",role:"",token:i};
      localStorage.setItem("isLogin",!0);
      localStorage.setItem("userInfo",JSON.stringify(a.value));
      s.push("/contract/active")
    }).catch(c=>{alert(c.response.data.error.message)})};
```

```js
createBaseVNode("button",{class:"btn ... login-btn",onClick:i[2]||(i[2]=d=>o())},"登入")
```

流程解讀：
1. 點「登入」按鈕會觸發 `o()`
2. `o()` 呼叫 `Login(...)`
3. `Login(...)` 會 `POST /api/v1/login`
4. 成功才把 token 寫進 store/localStorage 並導向 `/contract/active`
5. 失敗則 `alert(...)`

## 3) 結論（是否真的對外呼叫後端）

- **有發出後端 API 請求的前端程式碼**（`axios.post("/api/v1/login")`）。
- 但 `apiUrl` 在目前 bundle 中是空字串（`apiUrl=""`），因此登入請求會走 **相對路徑** `/api/v1/login`（同網域）。
- 以本 repo（GitHub Pages 靜態站）內容來看，沒有後端服務程式；所以這份部署本身不是「內建後端」，需要外部同網域反向代理/後端才會成功。

**技術總結：**  
MYLO 登入頁不是純前端假登入；它會真的呼叫 API。  
但目前可見設定是空 base URL + 相對路徑，是否能打到「真後端」取決於部署環境是否另有 `/api/*` 後端入口。
