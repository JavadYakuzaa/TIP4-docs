import{I as o}from"./chunks/BKDImgContainer.cbc55db5.js";import{d as a,_ as n,J as l,c,N as p,V as r,k as s,a as e,o as i}from"./chunks/framework.af8f98c2.js";const d=a({name:"Diagrams",components:{ImgContainer:o},setup(){return{}}}),B=JSON.parse('{"title":"Locklift Config Setting","description":"","frontmatter":{},"headers":[],"relativePath":"docs/gettingStarted/LockliftConfigSetting.md","filePath":"docs/gettingStarted/LockliftConfigSetting.md"}'),h=r(`<h1 id="locklift-config-setting" tabindex="-1">Locklift Config Setting <a class="header-anchor" href="#locklift-config-setting" aria-label="Permalink to &quot;Locklift Config Setting&quot;">​</a></h1><p>In this section we will learn how to use the TIP-4 contracts inside of our locklift project.</p><h2 id="step-1-add-the-external-contracts" tabindex="-1">Step 1: Add the External Contracts <a class="header-anchor" href="#step-1-add-the-external-contracts" aria-label="Permalink to &quot;Step 1: Add the External Contracts&quot;">​</a></h2><p>We must specify for the compiler that we have some external contracts, in this case the Index, IndexBasis, TIP-4_1Collection, TIP4_1Nft, OwnableExternal and Account contracts are needed.</p><p>Account contract artifacts are also needed for deploying and using an account in the next section. Thus, we will include the path to these artifacts.</p><p>Add this line to locklift.config.ts/compiler</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">externalContracts</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node_modules/@broxus/tip4/precompiled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IndexBasis</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node_modules/@broxus/tip4/contracts/access</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OwnableExternal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OwnableInternal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node_modules/@broxus/contracts/contracts/wallets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Account</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span></code></pre></div><h2 id="step-3-change-the-compiler-version" tabindex="-1">Step 3: Change the Compiler Version <a class="header-anchor" href="#step-3-change-the-compiler-version" aria-label="Permalink to &quot;Step 3: Change the Compiler Version&quot;">​</a></h2><p>replace the following line with the version of your compiler in the locklift.config.ts/compiler/version file:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.61.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span></code></pre></div><h2 id="step-3-build-the-artifacts" tabindex="-1">Step 3: Build the Artifacts <a class="header-anchor" href="#step-3-build-the-artifacts" aria-label="Permalink to &quot;Step 3: Build the Artifacts&quot;">​</a></h2><p>To generate the necessary artifacts for these three contracts, including .abi.json, .tvc, .code, and .base64 files, execute the following command in your shell.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Please note that the <code>Index</code> and <code>INdexBasis</code> contracts are precompiled so <strong>&quot;DO NOT REBUILD <code>Index</code> AND <code>IndexBasis</code> CONTRACTS ARTIFACTS!&quot;</strong></p></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">locklift</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span></span></code></pre></div><p>After completing the process there should be a folder named <strong><em>build</em></strong> with this structure:</p>`,15),u=s("p",null,[e("Please refer to the "),s("a",{href:"https://docs.locklift.io/",target:"_blank",rel:"noreferrer"},"Locklift documentation"),e(" for more detailed information.")],-1);function D(F,y,f,g,m,C){const t=l("ImgContainer");return i(),c("div",null,[h,p(t,{src:"/llBuildStructure.png",width:"50%",altText:"buildStructure"}),u])}const q=n(d,[["render",D]]);export{B as __pageData,q as default};
