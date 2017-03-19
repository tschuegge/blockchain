import { Block } from './block.model';
import { Hash } from './hash';

export class BlockchainEntry {
  private blockStorage: Block;
  private isValidStorage: boolean;
  private hashStorage: string;

  constructor(block: Block) {
    this.block = block;
  }

  public get block(): Block {
    return this.blockStorage;
  }
  public set block(block: Block) {
    this.blockStorage = block;
    this.checkHash();
  }

  public get isValid(): boolean {
    return this.isValidStorage;
  }

  public get hash(): string {
    return this.hashStorage;
  }

  public checkHash() {
    this.hashStorage = Hash.sha256(JSON.stringify(this.blockStorage));
    this.isValidStorage = this.hashStorage.substring(0, 4) === "1234";
  }
}
