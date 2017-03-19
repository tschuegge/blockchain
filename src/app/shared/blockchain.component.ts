import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Block } from './block.model';
import { BlockchainEntry } from './blockchain-entry';
import { ValidBlockchain } from './valid-blockchain';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {

  @Input() public name: string;
  @Output() public change = new EventEmitter<BlockchainComponent>();
  public entries: BlockchainEntry[] = [];
  public isValid: boolean;

  public messages: { type: string, text: string }[] = [];

  private highestBlockNo = 0;

  public get blockCount(): number {
    return this.entries.length;
  }

  public ngOnInit() {

    // Gültige Blockchain laden
    ValidBlockchain().forEach(entry => {
      this.entries.push(entry);
    });
    this.checkBlockchain();
  }

  public addBlock() {
    let entry = new BlockchainEntry({
      blockno: this.highestBlockNo + 1,
      timestamp: Date.now(),
      nonce: 0,
      data: "",
      prev: this.entries[this.blockCount - 1].hash
    });
    this.entries.push(entry);
    this.checkBlockchain();
  }

  public removeBlock(block: BlockchainEntry) {
    let indexToRemove = -1;
    for (let i = 0; i < this.entries.length; i++) {
      if (block === this.entries[i]) {
        indexToRemove = i;
        break;
      }
    }
    if (indexToRemove > -1) {
      this.entries.splice(indexToRemove, 1);
      this.checkBlockchain();
    }
  }

  public changeBlock($event) {
    this.checkBlockchain();
  }

  public checkBlockchain() {
    this.isValid = true;
    for (let i = 0; i < this.entries.length; i++) {
      let entry = this.entries[i];

      // Nummer des vorherigen Blocks überschreiben
      if (i > 0) {
        entry.block.prev = this.entries[i - 1].hash; // Hash des vorherigen Blocks einfügen
      } else {
        entry.block.prev = "0000000000000000000000000000000000000000000000000000000000000000"; // Erster Block
      }

      // Höchste Blocknummer merken
      if (entry.block.blockno > this.highestBlockNo) {
        this.highestBlockNo = entry.block.blockno;
      }

      // Gültigkeit prüfen
      entry.checkHash();
      if (!entry.isValid) {
        this.isValid = false;
      }
    }
    this.change.emit(this);
  }

  public addMessage(type: string, text: string) {
    this.messages.push({ type: type, text: text });
  }

}
