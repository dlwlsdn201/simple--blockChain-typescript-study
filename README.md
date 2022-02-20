# TypeScript 기반의 블록체인 웹 애플리케이션

> ## Install
>
> - `$npm install -g typescript`

---

> ## Config
>
> ### package.json

```
{
  "name": "typechain",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/dlwlsdn201/simple-blockChain__by-TS.git",
  "author": "jinWoo_Lee <dlwlsdn201@naver.com>",
  "license": "MIT",
  "dependencies": {
    "typescript": "^4.5.5"
  },
  "scripts": {
    "start": "tsc-watch --onSuccess \" node dist/index.js\""
  },
  "devDependencies": {
    "tsc-watch": "^4.6.0"
  }
}

```

> ### TS config json 파일 생성
>
> - `$tsc --init`
> <h3> tsconfig.json </h3>

```{
   {
     "compilerOptions": {
     "target": "es2016",    /* 컴파일된 코드가 실행될 환경을 정의함.  */

     /* Modules */
     "module": "commonjs",      /* 컴파일된 코드가 사용할 모듈 시스템을 정의함. */

     /* Emit */
     "sourceMap": true,        /* 소스 맵(.map) 파일 생성 여부 */

     /* Interop Constraints */
     "esModuleInterop": true,     nnnnnn /* commonjs 모듈 형태로 이루어진 파일을 ex2015 모듈 형태로 불러올 수 있게 해줌 */
     "forceConsistentCasingInFileNames": true,      /* Ensure that casing is correct in imports. */

     /* Type Checking */
     "strict": true,                /* 모든 타입의 checking 옵션 활성화 여부. */
     "skipLibCheck": true           /* Skip type checking all .d.ts files. */
   },
   "include": \["src/**/*"\], /*타입스크립트 컴파일 시, 포함할 스크립트 파일 또는 폴더 배열*/
   "exclude": \["node_modules"\] /*타입스크립트 컴파일 시, 제외할 스크립트 파일 또는 폴더 배열*/
 }
```

---

> ## Library
>
> ### tsc-watch
>
> - 타입스크립트 파일에 수정사항이 감지되면, 자동으로 컴파일히여 컴파일된 스크립트 파일을 실행시켜주는 개발용 라이브러리
> - `$yarn add tsc-watch --dev`
