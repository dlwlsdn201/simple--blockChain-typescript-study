# TypeScript 기반의 블록체인 웹 애플리케이션
> ## Preview
> ![simple-blockChain__by-TS](https://user-images.githubusercontent.com/53039583/155722065-89e112ae-af0d-44f2-b53e-5a1b902ce27f.gif)
>

> ## Install
>
> - `$npm install -g typescript`

---

> ## Config
>
> > ### package.json
>
> ```json
> {
>   "name": "typechain",
>   "version": "1.0.0",
>   "main": "index.js",
>   "repository": "https://github.com/dlwlsdn201/simple-blockChain__by-TS.git",
>   "author": "jinWoo_Lee <dlwlsdn201@naver.com>",
>   "license": "MIT",
>   "dependencies": {
>     "typescript": "^4.5.5"
>   },
>   "scripts": {
>     "start": "tsc-watch --onSuccess \" node dist/index.js\""
>   },
>   "devDependencies": {
>     "tsc-watch": "^4.6.0"
>   }
> }
> ```
>
> ### TS config json 파일 생성
>
> - `$tsc --init`
>   > <h3> tsconfig.json </h3>
>
> ```json
>  {
>    "compilerOptions": {
>    "target": "es2016",    /* 컴파일된 코드가 실행될 환경을 정의함.  */
>
>    /* Modules */
>    "module": "commonjs",      /* 컴파일된 코드가 사용할 모듈 시스템을 정의함. */
>
>    /* Emit */
>    "sourceMap": true,        /* 소스 맵(.map) 파일 생성 여부 */
>
>    /* Interop Constraints */
>    "esModuleInterop": true,     nnnnnn /* commonjs 모듈 형태로 이루어진 파일을 ex2015 모듈 형태로 불러올 수 있게 해줌 */
>    "forceConsistentCasingInFileNames": true,      /* Ensure that casing is correct in imports. */
>
>    /* Type Checking */
>    "strict": true,                /* 모든 타입의 checking 옵션 활성화 여부. */
>    "skipLibCheck": true           /* Skip type checking all .d.ts files. */
>  },
>  "include": \["src/**/*"\], /*타입스크립트 컴파일 시, 포함할 스크립트 파일 또는 폴더 배열*/
>  "exclude": \["node_modules"\] /*타입스크립트 컴파일 시, 제외할 스크립트 파일 또는 폴더 배열*/
> }
> ```

---

> ## Library
>
> > ### tsc-watch
>
> - 타입스크립트 파일에 수정사항이 감지되면, 자동으로 컴파일히여 컴파일된 스크립트 파일을 실행시켜주는 개발용 라이브러리
> - `$yarn add tsc-watch --dev`
>
> > ### crypto-js
>
> - javascript를 이용한 서비스에서, 여러가지 정보들을 안전하게 암호화하는 기능을 제공해주는 라이브러리
> - `$uarn add crypto-js` or `$npm i -d crypto-js`
> - `npm i --save-dev @types/crypto-js` (TypeScript 사용 시, 필수 설치사항)

---

> ## Study
>
> > ### Interface
> >
> > - 특정한 객체에 대한 형식(틀)을 선언하는 것
> > - js로 컴파일되지 않음. 따라서, 컴파일한 js에 포함시키려면 인터페이스 대신 클래스를 사용해야함.
> > - js에서 인터페이스를 사용하면 TypeScript 측면에서 좀 더 안전함.
> >
> > ```tsx
> > interface person {
> >   name: string;
> >   age: number;
> >   gender: string;
> >   hobbies: string[];
> > }
> >
> > const jinwoo = {
> >   name: 'jinwoo',
> >   age: 29,
> >   gender: 'male',
> >   hobbies: ['programming', 'soccer', 'singing']
> > };
> >
> > const showInfo = (data: person) => {
> >   return `Hi, ${name}. You are ${age} years old and ${male}. Also your hobbies are
> > 		${hobbies} !`;
> > };
> >
> > console.log(showInfo(jinwoo));
> > /*  
> > 	`Hi, jinwoo. You are 29 years old and ${male}. 
> >  Also your hobbies are	'programming', 'soccer', 'singing' !`
> > */
> > ```
>
> > ### Class
> >
> > - TypeScript에서는 클래스 속성의 타입들을 선언해줘야함.
> > - react, express, node 환경에서는 클래스를 주로 사용
> > - public : 단어 뜻 그대로 전역적으로 접근 가능함
> > - private: 해당 블록의 스코프 내부에서만 접근 가능함.
> > - constructor: 클래스 생성 시, 호출되는 생성자.
> >
> > ```tsx
> > class Person {
> >   public name: string;
> >   public age: number;
> >   public gender: string;
> >   public hobbies: string[];
> >   constructor(
> >     name: string,
> >     age: number,
> >     gender: string,
> >     hobbies: string[]
> >   ) {
> >     this.name = name; // Person 클래스의 name 은 생성자 constructor의 name과 같다.
> >     this.age = age;
> >     this.gender = gender;
> >     this.hobbies = hobbies;
> >   }
> > }
> >
> > const jinwoo = new Human('Jinwoo', 29, 'male', [
> >   'programming',
> >   'soccer',
> >   'singing'
> > ]);
> >
> > const showInfo = (data: person) => {
> >   return `Hi, ${name}. You are ${age} years old and ${male}. Also your hobbies are
> > 		${hobbies} !`;
> > };
> >
> > console.log(showInfo(jinwoo));
> > ```
>
> > ### static
> >
> > - class의 정적 메서드 정의 키워드
> > - static method는 class의 instance 없이 호출 가능하며, 인스턴스화되면 호출할 수 없음.
> > - static method는 종종 어플리케이션 유틸리티 함수 생성에 사용됨.
> >
> > ```tsx
> > class Block {
> >   public key: string;
> >
> >   static showMessage = (): void => {
> >     console.log('hello');
> >   };
> >
> >   constructor(key: string) {
> >     this.key = key;
> >   }
> > }
> >
> > const instance = new Block();
> >
> > Block.showMessage(); // 가능
> >
> > instance.showMessage(); // 불가능
> > ```
>
> > ### SHA256
> >
> > - SHA hash 함수 중 하나로서, 해시의 결과가 256 bit
> > - 비트코인을 비롯한 많은 블록체인 시스템에서 활용하는 방식
> > - SHA-256 알고리즘은 hash 대상 메세지 전처리 하는 단계, 전처리된 메세지를 바탕으로 해시를 계산하는 단계로 나뉨.
> >   - 메세지 : SHA-256을 적용해야할 데이터

---

> ## Project
>
> > ### 메인 소스코드 프로세스
> >
> > 1.  `createNewBlock(data)` 함수로 새 블록 생성
> > 2.  이전 블록, 신규 index,신규 timestamp, 신규 hash 코드 데이터를 바탕으로 신규 블록 인스턴스를 생성하여 `addBlock(newBlock)` 함수를 호출하여 블록 추가.
> > 3.  `addBlock(newBlock)` 함수 내부에서 신규 블록과, `getLatestBlock()` 으로 가져온 바로 이전 블록 데이터를 `isBlockValid()` 함수를 통해 유효성 검증.
> > 4.  `isBlockValid()` 의 return 이 true 일 경우, 블록체인 배열에 신규 블록 push.
> > 5.  `console.log(blockchain)` 로 최종 블록체인 배열 출력.
> >
> > ```tsx
> > import * as CryptoJS from 'crypto-js';
> >
> > class Block {
> >   public index: number;
> >   public hash: string;
> >   public previousHash: string;
> >   public data: string;
> >   public timestamp: number;
> >
> >   // 블록 해쉬 계산 static function
> >   static calculateBlockHash = (
> >     index: number,
> >     previousHash: string,
> >     timestamp: number,
> >     data: string
> >   ): string =>
> >     CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
> >
> >   // 구조 검증 함수
> >   static validateStructure = (aBlock: Block): boolean =>
> >     typeof aBlock.index === 'number' &&
> >     typeof aBlock.hash === 'string' &&
> >     typeof aBlock.previousHash === 'string' &&
> >     typeof aBlock.timestamp === 'number' &&
> >     typeof aBlock.data === 'string';
> >
> >   constructor(
> >     index: number,
> >     hash: string,
> >     previousHash: string,
> >     data: string,
> >     timestamp: number
> >   ) {
> >     this.index = index;
> >     this.hash = hash;
> >     this.previousHash = previousHash;
> >     this.data = data;
> >     this.timestamp = timestamp;
> >   }
> > }
> >
> > const genesisBlock: Block = new Block(
> >   0,
> >   '3420ij30i2fj02',
> >   '',
> >   'Hello',
> >   123456
> > );
> > let blockchain: Block[] = [genesisBlock]; // blockchain : Block 클래스 인스턴스 타입에 대한 array
> > const getLatestBlock = (): Block => blockchain[blockchain.length - 1]; // 블록체인 중 가장 마지막(최근) blockchain return function
> >
> > const getNewTimeStamp = (): number =>
> >   Math.round(new Date().getTime() / 1000); // 현재 시간을 가지고 새로운 타임스탬프 값 return function
> >
> > // 신규 블록 생성 함수
> > const createNewBlock = (data: string): Block => {
> >   const previousBlock: Block = getLatestBlock();
> >   const newIndex: number = previousBlock.index + 1;
> >   const newTimestamp: number = getNewTimeStamp();
> >   const nextHash: string = Block.calculateBlockHash(
> >     newIndex,
> >     previousBlock.hash,
> >     newTimestamp,
> >     data
> >   );
> >   const newBlock: Block = new Block(
> >     newIndex,
> >     nextHash,
> >     previousBlock.hash,
> >     data,
> >     newTimestamp
> >   );
> >   addBlock(newBlock);
> >   return newBlock;
> > };
> >
> > // 해쉬 검증 함수
> > const getHashForBlock = (aBlock: Block): string =>
> >   Block.calculateBlockHash(
> >     aBlock.index,
> >     aBlock.previousHash,
> >     aBlock.timestamp,
> >     aBlock.data
> >   );
> >
> > // 제공되고 있는 블록의 유효성 판별 함수
> > const isBlockValid = (
> >   candidateBlock: Block,
> >   previousBlock: Block
> > ): boolean => {
> >   // 블록이 유효할 경우
> >   if (!Block.validateStructure(candidateBlock)) {
> >     // 구조 검증
> >     return false;
> >   } else if (previousBlock.index + 1 !== candidateBlock.index) {
> >     // 이전 블록의 idnex 와 candidateBlock의 index 가 같지 않다면,
> >     return false;
> >   } else if (previousBlock.hash !== candidateBlock.previousHash) {
> >     // 이전 블록의 hash가 candidateBlock 의 이전 hash 와 갖지 않다면
> >     return false;
> >   } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
> >     // 해쉬를 계산헀는데 달느 해쉬를 갖고 있다면
> >     return false;
> >   } else {
> >     return true;
> >   }
> > };
> >
> > // 블록체인 array에 새로운 블록을 추가하는 함수
> > // 유효성 검증 후 push
> > const addBlock = (candidateBlock: Block): void => {
> >   if (isBlockValid(candidateBlock, getLatestBlock())) {
> >     blockchain.push(candidateBlock);
> >   }
> > };
> >
> > createNewBlock('second block');
> > createNewBlock('third block');
> > createNewBlock('fourth block');
> >
> > console.log(blockchain);
> >
> > export {};
> > ```
