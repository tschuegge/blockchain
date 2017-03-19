import { BlockchainEntry } from './blockchain-entry';
export function ValidBlockchain(): BlockchainEntry[] {
  return [
    new BlockchainEntry({
      blockno: 1,
      timestamp: 1489875370124,
      nonce: 10851,
      data: "Inhalt des Blocks 1",
      prev: "0000000000000000000000000000000000000000000000000000000000000000"
    }),
    new BlockchainEntry({
      blockno: 2,
      timestamp: 1489875370212,
      nonce: 41605,
      data: "Inhalt des Blocks 2",
      prev: "1234ddd5f5f9b6a3f0092b1f0404a9a1f4de1c032fdfe785f7c606bba004f762"
    }),
    new BlockchainEntry({
      blockno: 3,
      timestamp: 1489875370239,
      nonce: 115951,
      data: "Inhalt des Blocks 3",
      prev: "1234b2d9a1378162ef463937cabbe544a8f44a42df49af7833326fe38fed4754"
    }),
    new BlockchainEntry({
      blockno: 4,
      timestamp: 1489875370312,
      nonce: 6521,
      data: "Inhalt des Blocks 4",
      prev: "12348f96657d1f2a4d51274d93d0693d5b5ca09c8695a55de0df20bb6d899e29"
    }),
    new BlockchainEntry({
      blockno: 5,
      timestamp: 1489875370358,
      nonce: 90836,
      data: "Inhalt des Blocks 5",
      prev: "1234f443f2ab6198842deae1be2a438fbd4d8669cd914a2b4ddb9fd726dd30e2"
    })
  ];
};
