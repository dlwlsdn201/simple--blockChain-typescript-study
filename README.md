# TypeScript 기반의 블록체인 웹 애플리케이션

> ## Install

- `$npm install -g typescript`

> ## Config
>
> ###TS config json 파일 생성

- `$tsc --init`

<h4> tsconfig.json </h4>
```
{
  "compilerOptions": {
    "target": "es2016",                                  /* 컴파일된 코드가 실행될 환경을 정의함.  */

    /* Modules */
    "module": "commonjs",                                /* 컴파일된 코드가 사용할 모듈 시스템을 정의함. */

    /* Emit */
    "sourceMap": true,                                /* 소스 맵(.map) 파일 생성 여부 */

    /* Interop Constraints */
    "esModuleInterop": true,                             /* commonjs 모듈 형태로 이루어진 파일을 ex2015 모듈 형태로 불러올 수 있게 해줌 */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* 모든 타입의 checking 옵션 활성화 여부. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */

},
"include": ["index.ts"], /_타입스크립트 컴파일 시, 포함할 스크립트 파일 또는 폴더 배열_/
"exclude": ["node_modules"] /_타입스크립트 컴파일 시, 제외할 스크립트 파일 또는 폴더 배열_/
}

```


------------
```
