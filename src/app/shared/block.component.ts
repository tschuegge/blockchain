import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Block } from './block.model';
import { BlockchainEntry } from './blockchain-entry';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html'
})
export class BlockComponent {

  @Input() public blockchainentry: BlockchainEntry;
  @Output() public change = new EventEmitter<BlockchainEntry>();
  @Output() public delete = new EventEmitter<BlockchainEntry>();

  public onBlockChanged($event?) {
    if ($event) {
      $event.preventDefault();
    }
    this.blockchainentry.checkHash();
    this.change.emit(this.blockchainentry);
  }

  public onBlockDelete($event) {
    $event.preventDefault();
    this.delete.emit(this.blockchainentry);
  }

  public doMine() {
    this.blockchainentry.block.nonce = 0;
    let antiloopCounter = 0;
    do {
      this.blockchainentry.block.nonce = this.blockchainentry.block.nonce.valueOf() + 1; // Hässlicher Hack, wegen Typescript Bug!
      this.blockchainentry.checkHash();
      antiloopCounter++;
    } while (!this.blockchainentry.isValid && antiloopCounter < 1000000);

    this.onBlockChanged();
  }

}
