import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BsRootModule } from 'ng2-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleBlockchainComponent } from './single-blockchain/single-blockchain.component';
import { DistributedBlockchainComponent } from './distributed-blockchain/distributed-blockchain.component';
import { BlockComponent } from './shared/block.component';
import { BlockchainComponent } from './shared/blockchain.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleBlockchainComponent,
    DistributedBlockchainComponent,
    BlockComponent,
    BlockchainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    BsRootModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
