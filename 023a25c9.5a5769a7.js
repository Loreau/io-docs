(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var i=a(2),n=a(6),r=(a(0),a(76)),o={title:"Development guidelines"},c={unversionedId:"io-handbook/development-guidelines",id:"io-handbook/development-guidelines",isDocsHomePage:!1,title:"Development guidelines",description:"Principles",source:"@site/docs/io-handbook/development-guidelines.md",slug:"/io-handbook/development-guidelines",permalink:"/io-docs/io-handbook/development-guidelines",editUrl:"https://github.com/pagopa/io-docs/edit/main/docs/io-handbook/development-guidelines.md",version:"current",sidebar:"docs",previous:{title:"Development workflow",permalink:"/io-docs/io-handbook/development-workflow"},next:{title:"Development styleguide",permalink:"/io-docs/io-handbook/development-styleguide"}},l=[{value:"Principles",id:"principles",children:[]},{value:"The Open Source Way",id:"the-open-source-way",children:[]},{value:"General Guidelines",id:"general-guidelines",children:[]},{value:"Workflow automation",id:"workflow-automation",children:[]},{value:"Workstation setup",id:"workstation-setup",children:[]},{value:"NodeJS",id:"nodejs",children:[]},{value:"TypeScript",id:"typescript",children:[]},{value:"Development Style Guide",id:"development-style-guide",children:[]},{value:"Editors, Code Formatting, Linting",id:"editors-code-formatting-linting",children:[]},{value:"Code Quality",id:"code-quality",children:[]},{value:"Third-party libraries",id:"third-party-libraries",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"principles"},"Principles"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Failure is a mandatory component of success"),". As people, learning and failure go hand in hand.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Learn and adapt from prior learnings"),". Adopt the learnings of continuous improvement: when failure occurs, immediately determine what needs to be done to prevent recurrence and focus on those tasks (e.g. ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Kaizen"}),"Kaizen")," and ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Antifragile"}),"Antifragile"),").")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Focus on software and architecture that continually reduces the risk of changes.")," These practices focus on:"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"isolation")," - truly ensuring that one change cannot impact another. For example, our focus on API design and micro service architecture on the backend is one technique we use to create isolation.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"continuous delivery")," - by releasing small changes continuously to our production environment, we minimize the impact of any one change and significantly decrease time to resolution.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"automation")," - by writing software to manage and implement our processes - including testing, patching and deployment - we focus on capturing our assumptions during the development process and building leverage to ensure our assumptions remain valid over time.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"rollback")," - by ensuring that every application change can be rolled back, we enable faster resolution when problems arise. For example, our practice of managing database schema changes independently of application changes provides the means to ensure every application change can itself be rolled back.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"incremental rollout")," - by rolling out application changes to production incrementally, and verifying that they work, we minimize the impact of a problem before it affects all of our users.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"monitoring and alerting")," - by instrumenting our applications - via logging and external monitoring services - we can capture our assumptions and receive notification on variance to minimize customer impact.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"secure by design")," - We consider security throughout the entire software development life cycle. For example, we deny access by default: That is, something must be true in order for authorization to be granted."))))),Object(r.b)("h3",{id:"the-open-source-way"},"The Open Source Way"),Object(r.b)("p",null,"We are strong proponents of open source software, including the overall process of developing open source software. The Open Source Way is a framework we use to help us answer many questions about software design, deferring to how the open source community works."),Object(r.b)("p",null,"Examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"How much documentation should we write?")),Object(r.b)("p",{parentName:"li"},"Let's look at our favorite open source projects and see how their documentation looks. One example we like is the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://facebook.github.io/react/"}),"react project"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"What type of API should we build?")),Object(r.b)("p",{parentName:"li"},"Let's look at our favorite open source projects and look at their APIs. One example we like is ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://stripe.com/docs/api"}),"Stripe")))),Object(r.b)("h3",{id:"general-guidelines"},"General Guidelines"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"All the code is open source and published on GitHub."),Object(r.b)("li",{parentName:"ol"},"Do not use classes unless absolutely necessary; keep data (structures) and behaviors (functions) separate"),Object(r.b)("li",{parentName:"ol"},"Whenever and wherever possible, prefer functional style over imperative and immutable data structure over mutable state."),Object(r.b)("li",{parentName:"ol"},"Keep each individual change small: only change the minimum amount of code needed to accomplish the purpose of your pull request (i.e. do not change the format of the code if that's not the purpose of your change)."),Object(r.b)("li",{parentName:"ol"},"We're not for the 100% coverage religion but you should write tests for the core of your app or usually for the part that is more fragile to changes."),Object(r.b)("li",{parentName:"ol"},"Use the OpenAPI standard to defining REST APIs exposed to clients. Follow the ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.italia.it/italia/piano-triennale-ict/lg-modellointeroperabilita-docs/it/bozza/doc/profili-di-interazione/regole-comuni-rest-soap.html#formato-dei-dati"}),"National Guidelines")," when designing your APIs.")),Object(r.b)("h3",{id:"workflow-automation"},"Workflow automation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We maintain ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/pagopa/git-hooks"}),"a collection of git hooks")," that help you automate your workflow. You are encouraged to use, mantain and improve them.")),Object(r.b)("h3",{id:"workstation-setup"},"Workstation setup"),Object(r.b)("p",null,"We prepared ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/pagopa/developer-laptop"}),"a script")," that setup a new developer workstation from scratch. It only supports macOS so far. It's not mandatory to use it nor to setup your machine as the script does. If you find it useful, please consider to give feedback and to keep it update by adding new features and fixing bugs."),Object(r.b)("h3",{id:"nodejs"},"NodeJS"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/nodenv/nodenv"}),"nodenv")," for setting per-project version of ",Object(r.b)("inlineCode",{parentName:"li"},"node"),"."),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://yarnpkg.com/"}),"yarn")," for package management")),Object(r.b)("h3",{id:"typescript"},"TypeScript"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When creating a new repository, use the ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/pagopa/io-template-typescript"}),"io-template-typescript")," template - the template is also usefus as reference for our tooling and repository structure."),Object(r.b)("li",{parentName:"ul"},"Always use ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/gcanti/io-ts"}),"structured types"),": do not pass in input to unstructured data functions (eg ",Object(r.b)("inlineCode",{parentName:"li"},"JSON")," or ",Object(r.b)("inlineCode",{parentName:"li"},"request.Express"),")"),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://blog.mariusschulz.com/2016/11/03/typescript-2-0-tagged-union-types"}),"tagged types")," and ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/33915459/algebraic-data-types-in-typescript"}),"algebraic types")," instead of classes"),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions"}),"discriminated unions")," instead of inheritance"),Object(r.b)("li",{parentName:"ul"},"Favor immutable data structures and operators: use ",Object(r.b)("inlineCode",{parentName:"li"},"const")," instead of ",Object(r.b)("inlineCode",{parentName:"li"},"let"),", ",Object(r.b)("inlineCode",{parentName:"li"},"map")," and ",Object(r.b)("inlineCode",{parentName:"li"},"filter")," instead of ",Object(r.b)("inlineCode",{parentName:"li"},"for")," or ",Object(r.b)("inlineCode",{parentName:"li"},"while")," loops, ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://davidwalsh.name/merge-objects"}),"spread operators")," instead of direct assignments, etc."),Object(r.b)("li",{parentName:"ul"},"If you use classes do not provide setter methods: make sure that all members are readonly"),Object(r.b)("li",{parentName:"ul"},"Favor the use of ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c"}),'"pure" functions')),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/gcanti/fp-ts/blob/master/src/Option.ts"}),"Option")," and avoids ",Object(r.b)("inlineCode",{parentName:"li"},"null")," / ",Object(r.b)("inlineCode",{parentName:"li"},"undefined")," checks"),Object(r.b)("li",{parentName:"ul"},"To handle errors, return ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/gcanti/fp-ts/blob/master/src/Either.ts"}),"Either")," instead of throwing exceptions"),Object(r.b)("li",{parentName:"ul"},"use ",Object(r.b)("inlineCode",{parentName:"li"},"Promises")," instead of callbacks for the asynchronous code. Limits the use of callbacks to interaction with existing libraries (ideally you wrap promisify callbaks though)"),Object(r.b)("li",{parentName:"ul"},"Consider using ",Object(r.b)("inlineCode",{parentName:"li"},"async")," / ",Object(r.b)("inlineCode",{parentName:"li"},"await")," instead of ",Object(r.b)("inlineCode",{parentName:"li"},"then")," / ",Object(r.b)("inlineCode",{parentName:"li"},"catch")," if it can make the code more readable"),Object(r.b)("li",{parentName:"ul"},"Use common code (types and functions) defined in ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/pagopa/italia-ts-commons"}),"italia-ts-commons")," (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"NonEmptyString"),", ",Object(r.b)("inlineCode",{parentName:"li"},"DateFromString"),", ",Object(r.b)("inlineCode",{parentName:"li"},"EmailString"),", etc.)"),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/gcanti/io-ts"}),"io-ts")," to defined types that validate at compile and run-time."),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/gcanti/fp-ts"}),"fp-ts")," for functional data structures (i.e. ",Object(r.b)("inlineCode",{parentName:"li"},"Option"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Either"),", ",Object(r.b)("inlineCode",{parentName:"li"},"NonEmptyArray"),", etc...)"),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/pagopa/italia-utils"}),"italia-utils")," for generating ",Object(r.b)("inlineCode",{parentName:"li"},"io-ts")," models from OpenAPI specs."),Object(r.b)("li",{parentName:"ul"},"Refer to the ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/typescript-cheatsheets/react-typescript-cheatsheet"}),"React Typescript cheatsheet")," to type React Components")),Object(r.b)("h3",{id:"development-style-guide"},"Development Style Guide"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/io-docs/io-handbook/development-styleguide"}),"Style Guide")," with code snippets, common scenarios and mistakes.")),Object(r.b)("h3",{id:"editors-code-formatting-linting"},"Editors, Code Formatting, Linting"),Object(r.b)("p",null,"You are free to use any code editor or IDE you like."),Object(r.b)("p",null,"However, within some repositories, you will find configurations\nfor ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code")," (VSC).\nVSC is an open source editor and has some features that are essential for the development of this project:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"excellent support for ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"http://www.typescriptlang.org"}),"Typescript")),Object(r.b)("li",{parentName:"ul"},"effective integration with ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://palantir.github.io/tslint/"}),"tslint")),Object(r.b)("li",{parentName:"ul"},"support for indentation ",Object(r.b)("em",{parentName:"li"},"on-save")," via ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/prettier/prettier"}),"prettier"))),Object(r.b)("p",null,"Before every PR, make sure that all the Typescript code (or Javascript)\nis indented by ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/prettier/prettier"}),"prettier"),".\nThe configuration is available in the ",Object(r.b)("inlineCode",{parentName:"p"},".prettierrc")," files in each\nproject root directory."),Object(r.b)("p",null,"If you use VSC, install the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"}),"prettier plugin")," and enable ",Object(r.b)("em",{parentName:"p"},"format on save"),"."),Object(r.b)("h4",{id:"suggested-vscode-extensions"},"Suggested VSCode extensions"),Object(r.b)("p",null,"If you're using VSCode we suggest to install these extensions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account"}),"Azure account")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=ms-azurecache.vscode-azurecache"}),"Azure cache")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions"}),"Azure functions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestorage"}),"Azure storage")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner"}),"Code runner")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour"}),"Codetour")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters"}),"Coverage gutters")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=DurableFunctionsMonitor.durablefunctionsmonitor"}),"Durable functions monitor")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=kenhowardpdx.vscode-gist"}),"Git")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-github"}),"GitHub")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github"}),"GitHub pull requests")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"}),"Git Lens")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner"}),"Jest runner")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=ms-vsliveshare.vsliveshare"}),"Live share")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=ms-vsliveshare.vsliveshare-audio"}),"Live share audio")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=ms-vsliveshare.vsliveshare-pack"}),"Live share extensions pack")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=brayovsky.pivotaly"}),"Pivotaly")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"}),"Prettier")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=Pool.redisexplorer"}),"Redis explorer")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync"}),"Settings sync")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=hashicorp.terraform"}),"Terraform")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin"}),"Tslint")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"}),"YAML"))),Object(r.b)("h3",{id:"code-quality"},"Code Quality"),Object(r.b)("p",null,"To monitor the quality of the code we produce we use some tools\nfor automated code analysis that are well integrated into our development\nworkflow:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://codecov.io"}),"Codecov"),": test coverage"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.codacy.com/"}),"Codacy"),": code quality and security"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://codeclimate.com"}),"Codeclimate"),": code quality and maintainability"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://snyk.io"}),"Snyk"),": security analysis of dependencies")),Object(r.b)("p",null,"Always check the feedback that these tools automatically provide to each\nPull Request and implement the changes necessary or suggested."),Object(r.b)("h3",{id:"third-party-libraries"},"Third-party libraries"),Object(r.b)("p",null,"IO includes several third-party open source libraries in its components. When including or updating a library it could happen that the library's code needs some changes (e.h. bugfixes). In that case two options can be evaluated:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"fork the original github repository (the one where the library comes from), patch it, and then ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.npmjs.com/files/package.json#github-urls"}),"set the dependency to the forked repo")," from ",Object(r.b)("inlineCode",{parentName:"li"},"package.json")),Object(r.b)("li",{parentName:"ol"},"create a ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.npmjs.com/package/patch-package"}),"post install patch")," to fix the original library code")))}p.isMDXComponent=!0},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),u=i,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||r;return a?n.a.createElement(d,c(c({ref:t},s),{},{components:a})):n.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);