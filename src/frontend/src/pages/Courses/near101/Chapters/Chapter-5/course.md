# NEAR Contracts

<Difficulty> Difficulty: 4/5 | Estimated reading time: 6 min </Difficulty>

<Spacer />

<narrativeText style="background: #00C08B">
  <div>
  <img alt="story_image_5_0" src="/images/chap_5_0.png">
  </div>
  <div>
  "When you checked the meme collection status, you actually interacted with a contract on the NEAR Network. As a matter of fact, the museum is orchestrated mostly automatically via a multitude of codes deployed on NEAR  that interact with each other."
  <Spacer />
  "I’m so glad to be back at work, digital detox was a bad idea! Imagine living without the internet for a week?! My god, I’m so much better with my smart contracts code. I see the beauty in their rules, like an invisible chaos behind the face of order."
  </div>
</narrativeText>
<Spacer />

## Contracts

Contracts are a set of functions that can read or alter the state of the NEAR Network. They are executed on the NEAR Virtual Machine (VM). A minimal “Hello, World!” code written in AssemblyScript looks like this:

```typescript
export function hello(): string {
  return 'Hello, World!'
}
```

After it was compiled to Wasm, the contract can be deployed to the NEAR blockchain. Deploying a contract means that it is uploaded and stored in the NEAR blockchain.

Once deployed, the contract can be called in the NEAR VM like a script, served by Nodes on the NEAR blockchain. Anyone connected to the network can see and interact with the code. If a user provides a valid input, the contract will deterministically produce its expected output. In this case “Hello, World!”.

The contract can be called using the NEAR CLI:

```bash
near view hello-world-contract.testnet hello

```

## Functions

The hello-world contract is the most basic type of contract as no state alteration is required by the NEAR Network when the contract is called. It simply displays a static string stored on the blockchain. Calling such contracts does not involve gas cost in NEAR; gas is incurred only when computation is required.
Let’s look at hello_you() now. This contract invokes more than just a simple“view” function on something that was stored on the blockchain. It requires a call of context.

```typescript
export function hello_you(): string {
  return 'Hello, ' + context.sender + '!'
}
```

Contract hello_you() does not alter the state of the blockchain, but it requires a call of context, which is an operation that validator nodes have to carry, and therefore gas to be paid.

Other "call" functions may alter the state of the blockchain. Gas must be paid to the network when invoking these functions.

Consider the function register_me(). It takes a name and stores it on the blockchain, altering its state, and requiring an action.

```typescript
export function register_me(): void {
  logging.log('saveMyName() was called')
  storage.setString('sender', context.sender)
}
```

Note that this time, the function does not return anything to view. This is what is indicated by “void”. The null output must be specified in the functions run on NEAR.

## Action

An action is a composable unit of operation that, together with zero or more other actions, defines a transaction. You can think of an action as a valid message to be executed at the destination (receiver). And a Transaction is an externally issued request to create the Receipt

There are currently 8 supported action types:

**1.CreateAccount** to make a new account (for a person, contract, refrigerator, etc)
**2.DeleteAccount** to delete an account (and transfer balance to a beneficiary account)
**3.AddKey** to add a key to an account (either FullAccess or 4unctionCall access)
**5.DeleteKey** to delete an existing key from an account
**6.Transfer** to move tokens from one account to another
**7.Stake** to express interest in becoming a validator at the next available opportunity
**8.DeployContract** to deploy a contract FunctionCall to invoke a method on a contract (including budget for compute and storage)

## Deployment

Deployment of a contract typically follows just four steps.

Step 1: **Compile contract bytecode**
The given Rust or AssemblyScript code is compiled into wasm bytecode.

Step 2: **Compose transaction using DeployContract with attached bytecode.**
A transaction is constructed that contains all the necessary values for NEAR to deploy a smart contract. A transaction alters the state of the VM and it can contain more than one action like CreateAccount, AddKey, Transfer as well.

Step 3: **Sign and send transaction to deploy your code**
Everyone can create a transaction. But only a signed transaction (with valid keys) is valid. The signed transaction is broadcasted to NEAR, validated by the validators and eventually the code gets deployed on the network.

Step 4: **Redeployment and trustless operation**
As long as FullAccess private keys are available you can redeploy. Remove these keys for trustless operation. Congratulations.
