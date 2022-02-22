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

---

> ## Study
>
> ### Interface
>
> - 특정한 객체에 대한 형식(틀)을 선언하는 것
> - js로 컴파일되지 않음. 따라서, 컴파일한 js에 포함시키려면 인터페이스 대신 클래스를 사용해야함.
> - js에서 인터페이스를 사용하면 TypeScript 측면에서 좀 더 안전함.
>
> ```tsx
> interface person {
>   name: string;
>   age: number;
>   gender: string;
>   hobbies: string[];
> }
>
> const jinwoo = {
>   name: 'jinwoo',
>   age: 29,
>   gender: 'male',
>   hobbies: ['programming', 'soccer', 'singing']
> };
>
> const showInfo = (data: person) => {
>   return `Hi, ${name}. You are ${age} years old and ${male}. Also your hobbies are
> 		${hobbies} !`;
> };
>
> console.log(showInfo(jinwoo));
> /*  
> 	`Hi, jinwoo. You are 29 years old and ${male}. 
>  Also your hobbies are	'programming', 'soccer', 'singing' !`
> */
> ```

> ### Class
>
> - TypeScript에서는 클래스 속성의 타입들을 선언해줘야함.
> - react, express, node 환경에서는 클래스를 주로 사용
> - public : 단어 뜻 그대로 전역적으로 접근 가능함
> - private: 해당 블록의 스코프 내부에서만 접근 가능함.
> - constructor: 클래스 생성 시, 호출되는 생성자.
>
> ```tsx
> class Person {
>   public name: string;
>   public age: number;
>   public gender: string;
>   public hobbies: string[];
>   constructor(name: string, age: number, gender: string, hobbies: string[]) {
>     this.name = name; // Person 클래스의 name 은 생성자 constructor의 name과 같다.
>     this.age = age;
>     this.gender = gender;
>     this.hobbies = hobbies;
>   }
> }
>
> const jinwoo = new Human('Jinwoo', 29, 'male', [
>   'programming',
>   'soccer',
>   'singing'
> ]);
>
> const showInfo = (data: person) => {
>   return `Hi, ${name}. You are ${age} years old and ${male}. Also your hobbies are
> 		${hobbies} !`;
> };
>
> console.log(showInfo(jinwoo));
> ```
