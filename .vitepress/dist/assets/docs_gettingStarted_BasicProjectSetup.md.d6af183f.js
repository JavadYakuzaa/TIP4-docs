import{I as o}from"./chunks/BKDImgContainer.cbc55db5.js";import{d as s,_ as r,J as n,c as l,N as e,V as a,k as i,o as c}from"./chunks/framework.af8f98c2.js";const p=s({name:"Diagrams",components:{ImgContainer:o},setup(){return{}}}),C=JSON.parse('{"title":"Setup of TIP-4 Contracts in a Project","description":"","frontmatter":{},"headers":[],"relativePath":"docs/gettingStarted/BasicProjectSetup.md","filePath":"docs/gettingStarted/BasicProjectSetup.md"}'),d=a(`<h1 id="setup-of-tip-4-contracts-in-a-project" tabindex="-1">Setup of TIP-4 Contracts in a Project <a class="header-anchor" href="#setup-of-tip-4-contracts-in-a-project" aria-label="Permalink to &quot;Setup of TIP-4 Contracts in a Project&quot;">​</a></h1><p>This guide will walk you through the process of setting up a project with TIP-4 contracts. Although the TIP4 standard already has couple of implementations such as <a href="https://github.com/itgoldio/everscale-tip" target="_blank" rel="noreferrer">itgoldio</a> or <a href="https://github.com/grandbazar-io/everscale-tip4-contracts" target="_blank" rel="noreferrer">grandbazar</a> implementations, we prefer to implement the TIP4 Collection and Nft contracts ourselves and see what will happened under the hood.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>First, make sure you have the nodeJs and npm installed on your machine.</p><p>And it will be very good if you are already familiar with the basics of <a href="https://github.com/ever-guild/ever-solidity" target="_blank" rel="noreferrer">Everscale-solidity</a>.</p><h2 id="step-1-create-a-new-project-directory" tabindex="-1">Step 1: Create a New Project Directory <a class="header-anchor" href="#step-1-create-a-new-project-directory" aria-label="Permalink to &quot;Step 1: Create a New Project Directory&quot;">​</a></h2><p>First, let&#39;s create a new directory for our project. We&#39;ll call it &quot;TIP4Implementation&quot;, but you can name it anything you want.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">TIP4Implementation</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">TIP4Implementation</span></span></code></pre></div><h2 id="step-2-initialize-a-locklift-project" tabindex="-1">Step 2: Initialize a Locklift Project <a class="header-anchor" href="#step-2-initialize-a-locklift-project" aria-label="Permalink to &quot;Step 2: Initialize a Locklift Project&quot;">​</a></h2><p>Locklift is a tool that simplifies the development and management of smart contracts. We can initialize a locklift project in our new directory. This command will also install locklift if it&#39;s not already installed.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">locklift</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div>`,11),h=i("p",null,"We should get such a project structure:",-1),u=a('<h2 id="step-3-install-contract-packages" tabindex="-1">Step 3: Install Contract Packages <a class="header-anchor" href="#step-3-install-contract-packages" aria-label="Permalink to &quot;Step 3: Install Contract Packages&quot;">​</a></h2><p>Next, we&#39;ll install the <code>@broxus/tip4</code> and the <code>@broxus/contracts</code> packages. <code>@broxus/tip4</code> contracts represent non-fungible tokens standard contracts for the TVM based networks, and <code>@broxus/contracts</code>provides smart contract interfaces.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">@broxus/contracts</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">@broxus/tip4</span></span></code></pre></div><p>And that&#39;s it! You&#39;ve set up a project with TIP4 contracts and prepared it for TIP4 implementation integration.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can also refer to below provided links for more guidance.</p><p><a href="https://www.youtube.com/watch?v=NiTSfDwNwg0" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=NiTSfDwNwg0</a></p><p><a href="https://docs.locklift.io/" target="_blank" rel="noreferrer">https://docs.locklift.io/</a></p></div>',5);function m(f,g,y,b,k,w){const t=n("ImgContainer");return c(),l("div",null,[d,e(t,{src:"/llOutput.png",width:"100%",altText:"locklift initialization output"}),h,e(t,{src:"/llStructureTip4.png",width:"70%",altText:"locklift structure after initialization"}),u])}const v=r(p,[["render",m]]);export{C as __pageData,v as default};
