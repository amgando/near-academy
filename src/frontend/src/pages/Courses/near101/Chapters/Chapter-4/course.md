# NEAR Environment

<Difficulty> Difficulty: 2/5 | Estimated reading time: 6 min </Difficulty>

<narrativeText style="background: #00C08B;">
    <div>
        <img alt="story_image_4_0" src="/images/chap_4_0.png">
    </div>
    <div>
        It’s always something to start in a new environment. And you’ve decided to make the best of it.
        <Spacer />
        “You’re all set now. Let’s get to work! “
        <Spacer />
        “You’ve got your first opportunity to show you know your stuff. Ethan is on vacation, and he deals with the meme inventory. Could you cover for him? Start by getting familiar with the registry… ”
    </div>
</narrativeText>
<Spacer />

You can think of NEAR as an additional truth service that you add to your web application.
The benefits of adding such a truth service to an App include handling money, ownership and global user identity without banks, lawyers or any other traditional intermediaries.

Backend development usually happens on a local machine and is deployed on a controlled server. Access to others is given through APIs and the code and access is completely controlled by the owner of the server.

<ImageContainer>
    <img alt="story_image_4_1" src="/images/chap_4_1.png">
</ImageContainer>

## Layer 3 — App Layer (Your App BackEnd + FrontEnd)

This is effectively the services and the UI that people interact with.

Front end and Back End include all the high-level libraries to interact with NEAR, and the components enabling the communication with the NEAR Virtual Machine to execute code.

The App layer interacts with the protocol in a standardized way, which we will cover in the next chapter. Communication between the App layer and the protocol layer is channelled through a RPC interface in NEAR.

## Layer 2 — Protocol Layer (P2P Network Components)

Transactions and data storage are validated here via the NEAR consensus mechanism and added to the public ledger. This is done by the validator nodes in this layer. NEAR sits in between the app layer and the runtime layer and communicates with both other layers.

## Layer 1 - Runtime Layer (VM, Storage )

Layer 1 can be considered at the same level of the protocol layer. Every time a NEAR Validator Node validates a transaction they read and write in the State Storage and on the VM. Layer 1 is often referred to as the resource layer because the “real computations” occur here.

## The NEAR VM

NEAR VM is a modified WebAssembly Virtual Machine to execute Wasm bytecode instructions. All code running on NEAR must be compiled to WebAssembly, or simply Wasm.

Currently, two languages are supported with custom SDKs to compile code into Wasm: AssemblyScript and Rust. Any language that can be compiled into Wasm could be used here as long it meets specific requirements that can be added through a SDK. AssemblyScript is great for prototyping and quick results while Rust is better suited for applications that might secure a lot of value.

## Transactions Processing

Validator nodes run the VM and execute the operations. They take incoming transactions or storage requests and validate if they meet the requirements to be executed (access control). If an account wants to call a function in a contract it will send a request, the validator will check if the contract and the function exist, if they can be called, and if the transaction was signed by the account owner. If these requirements are met it will spin up a VM and execute the called function and return the results. After the computation occurs, the VM is quit.

Validators also store each processed transaction in the network. Validators are selected by the network for a certain time period, and are required to be online for that period to process operations on the network. This ensures continuous operation for the network.

Validator nodes rewards are adjusted based on amount of stake and participation (uptime). The rewards of the validator nodes come from programmed new token emission (currently capped at 5%) as well as transaction fees from network users, referred to as ‘gas’.

Validator nodes are pseudonymous, and game theory is used to ensure that they run the code with good behavior with a staking process called “Proof of Stake”. In this process, they make a guarantee deposit, a stake in NEAR, which they will forfeit if they have operated improperly.

## Transaction Gas

Each transaction takes some amount of bandwidth to be included in the network ledger and some computation to be executed. These operations have a cost that is paid in gas, a small fee in NEAR paid to the validator nodes. From a user perspective, it is no different to paying a cloud subscription or AWS Lambda for each execution.

The goal for gas is to represent a unified measure of resources spent to receive, execute, and propagate a transaction on default hardware. Computation (CPU) is a momentary resource spent on executing a transaction.

The cost of each instruction is denominated in “gas” units. Bandwidth is usually measured in bytes, but in the NEAR platform it is converted into gas units by using a simple coefficient of overhead which has been estimated on reference hardware.

<Spacer />
<narrativeText style="background: #0072CE">
    <div>
        <img alt="story_image_4_2" src="/images/chap_4_2.png">
    </div>
    <div>
        “Alrighty, I see you’ve still got a hang of it! Awesome, we can start running some code through the near-cli now”
        <Spacer />
        "Interacting with the network via a terminal is simple and effective."
    </div>
</narrativeText>
<Spacer />

## Interact with the Network from your Command Line

If we take this one step further we can see some advantages emerging from this new type of service. Since everyone can deploy scripts on NEAR services that can be used by everyone. No need to register anywhere or ask for awkward api keys to get connected. You pay as you go or if your users wish so you let them directly interact with the codes and they pay the execution costs.
Let us call the Meme Museum Contract and see how many memes there are registered for exhibition.

Since we are interested in calling a simple function and getting a quick answer we do need to build any interface. We simply use the nodejs based NEAR CLI that provides a set of command line tools to easily create, test, deploy scripts on the NEAR Network.

1\. Install NEAR CLI: "npm install -g near-cli"
2\. Typing "near" prints a list of all available commands. We are interested in near login (to login with our account) and near view to make call our code and get the amount of memes in the museum
3\. Type "near login" this will open your browser and ask you to login into your account
4\. Now the contract name is “meme-museum.testnet” and the method is called “getMemecount”. So type: "near view meme-museum.testnet get_meme_count". This will return you the amount of memes that are registered in the museum.
5\. Congratulations. You just called a contract on NEAR.

 <ImageContainer>
     <img alt="story_image_4_3" src="/images/chap_4_3.png">
 </ImageContainer>

<Spacer />

## Now, what happens when someone interacts with your contract on the blockchain?

Invoking a contract method from your dApp will trigger a sequence of actions locally as well as on the NEAR protocol:

1\. Your dApp uses near-cli to compose and sign the transaction that represents a Function Call transaction.
2\. The transaction is sent to the NEAR platform through the RPC interface which validates and verifies the transaction before routing it (based on the contract account) to the correct validator for processing.
3\. The runtime layer launches a Wasm virtual machine.
4\. The VM loads the contract code to invoke the function identified in the transaction, reading and writing to state storage as needed, and returning the result of the function call.
5\. The blockchain layer routes the result back through the RPC interface to your dApp.

## Exercise

At the museum, each meme is created by a contributor and can receive comments, votes and donations. The contributor can call a release function to release the donations to any given address. The meme museum has an expert team that curates the most interesting memes and presents them in their museum. Yes, this is part of the job!
