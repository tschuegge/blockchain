export interface Block {
  blockno: number;
  timestamp: number;
  nonce: number;
  data: string;
  prev: string;
}
