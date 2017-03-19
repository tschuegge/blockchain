import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBlockchainComponent } from './single-blockchain/single-blockchain.component';
import { DistributedBlockchainComponent } from './distributed-blockchain/distributed-blockchain.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/singleblockchain",
    pathMatch: "full"
  },
  {
    path: "singleblockchain",
    component: SingleBlockchainComponent
  },
  {
    path: "distributedblockchain",
    component: DistributedBlockchainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
