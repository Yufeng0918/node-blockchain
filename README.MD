# Blockchain


## Overview 
- distributed and decentralized legder
- store data 
- publicly shared access all nodes of its network
- block
    + data: [A -> B $30, B -> C $10]
    + metadata: create time, position
    + hash: current block data + meta data + previous hash
    + reference from current block to previous block
- ledger
    + record-keeping book store all transactions of an organization
    + distributed ledger for all nodes
    + update the ledger boardcast to block chain network
- centralized vs decentralized
    + centralized
        + powers
        + full authority to fine or reward
        + complete trust with entity
    + decentralized
        + every records data
        + fair and transparent system
        + trustless
- why blockchain
    + lead to trustless system
    + no middle men
    + no central point of failure
***
        
        
## Cryptocurrency
- digital medium of exchange
- use cryptography to generate digital signature
- digital signature
    + private key <- owner 
        + encrypt (original data + new data) = signature
    + public key <- every one
        + decrypt signature = (original data' + new data')
        + compare original data to original data'
- wallets
    + store private and public key
    + public key is address of wallet, others send cryptocurrency to owner
    + sign the transaction
- Mining
    + transaction are temporarily "unconfirmed"
    + include blocks of transactions by solving a "proof of work" algorithm
        + difficult to solve, computationally expensive
        + once solved, miner can add block and miners will verify
        + miners are rewarded for adding block to chain
        + difficulty can adjust to control the rate of new blocks coming in
    + longer blocks
    + hash validation
- Bitcoin
    + decentralized cryptocurrency in 2009
    + growth, widespread adoption
    + white paper
        
- Use Case
    + voting
    + documentation and identification system
***    
    
    
## Block
- timestamp
- lastHash - the hash of block before
- hash - based on its own data
- the data to store
- genesis block
    - first block with dummy value
- Hash Algo: SHA-256
    - 32 byte (256bit) for unique data input
    - one-way hash
    - block verification
*** 


## Proof of Work System
- do computional work to add block
- Hashcash was a proof-of-work
- expensive to generate corrupt block
- difficulty = 6, Hash with leading 6 '0'
- nonce value adjusts in order to generate new hashes
- 51% Attack
    a dishonest miner has more than at least 51% of the network's power
***


## Wallet
- store the balance of an individual
- store 
    + private key: sign the private signature
    + public key: verify the signature and public address
- transactions
    + input: sender's balance and public key
    + output: 
        + receipt address, amount received
        + sender address, balance
- digital signatures
    + private key + transaction data = signature
    + public key decrypt signature and verify data
- components
    + wallet
    + digital signature and verification
    + transaction object
- node
    + sync chain
    + broadcast transaction       
    
    
## Miners of Transaction
- take transaction from pool and store into block
- miner received rewards for mining
- transaction go from "unconfirmed" in the pool to "confirmed" in the chain
