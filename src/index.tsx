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

const getBlockchain = (): Block[] => blockchain; // 블록체인 배열 return function

const getLatestBlock = (): Block => blockchain[blockchain.length - 1]; // 블록체인 중 가장 마지막(최근) blockchain return function

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000); // 현재 시간을 가지고 새로운 타임스탬프 값 return function

export {};
