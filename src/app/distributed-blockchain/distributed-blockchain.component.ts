import { Component, ViewChildren, QueryList } from '@angular/core';
import { BlockchainComponent } from '../shared/blockchain.component';
import { BlockchainEntry } from '../shared/blockchain-entry';

@Component({
  selector: 'app-distributed-blockchain',
  templateUrl: './distributed-blockchain.component.html'
})
export class DistributedBlockchainComponent {
  @ViewChildren(BlockchainComponent) private blockchains: QueryList<BlockchainComponent>;
}
