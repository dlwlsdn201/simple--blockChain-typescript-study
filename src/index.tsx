import * as CryptoJS from 'crypto-js';

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  /**
   * 블록 해쉬 계산 static function
   * @param index
   * @param previousHash
   * @param timestamp
   * @param data
   * @returns
   */
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  // 구조 검증
  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === 'number' &&
    typeof aBlock.hash === 'string' &&
    typeof aBlock.previousHash === 'string' &&
    typeof aBlock.timestamp === 'number' &&
    typeof aBlock.data === 'string';

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, '3420ij30i2fj02', '', 'Hello', 123456);
let blockchain: Block[] = [genesisBlock]; // blockchain : Block 클래스 인스턴스 타입에 대한 array

console.log(blockchain);

const getLatestBlock = (): Block => blockchain[blockchain.length - 1]; // 블록체인 중 가장 마지막(최근) blockchain return function

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000); // 현재 시간을 가지고 새로운 타임스탬프 값 return function

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const nextHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    nextHash,
    previousBlock.hash,
    data,
    newTimestamp
  );
  addBlock(newBlock);
  return newBlock;
};

// 해쉬 검증 함수
const getHashForBlock = (aBlock: Block): string =>
  Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );

// 제공되고 있는 블록의 유효성 판별 함수
const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  // 블록이 유효할 경우
  if (!Block.validateStructure(candidateBlock)) {
    // 구조 검증
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    // 이전 블록의 idnex 와 candidateBlock의 index 가 같지 않다면,
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    // 이전 블록의 hash가 candidateBlock 의 이전 hash 와 갖지 않다면
    return false;
  } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
    // 해쉬를 계산헀는데 달느 해쉬를 갖고 있다면
    return false;
  } else {
    return true;
  }
};

// 블록체인 array에 새로운 블록을 추가하는 함수
// 유효성 검증 후 push
const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
};

createNewBlock('second block');
createNewBlock('third block');
createNewBlock('fourth block');

console.log(blockchain);

export {};
