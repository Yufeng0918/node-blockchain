const Wallet = require('../wallet');
const Transaction = require('../wallet/transaction');


class Miner {

    constructor(blockchain, transactionPool, wallet, p2pServer) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.p2pServer = p2pServer;
    }

    mine() {
        const validTransactions = this.transactionPool.validTransactions();

        // include a reward for miner
        validTransactions.push(Transaction.rewardTransaction(this.wallet, Wallet.blockchainWallet()))

        // create a block consisting of valid transactions
        const block = this.blockchain.addBlock(validTransactions);

        // synchronized the chains in the peer-to-peer server
        this.p2pServer.synChains();

        // clear the transaction pool
        this.transactionPool.clear();

        // broadcst to very miner to clear their transaction pool
        this.p2pServer.broadcastClearTransaction();

        return block
    }

}

module.exports = Miner;