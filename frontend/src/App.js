// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { FhevmRelayer } from '@zama-fhe/relayer-sdk';
import Web3 from 'web3';

const App = () => {
    const [balance, setBalance] = useState(0);
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);

    useEffect(() => {
        const init = async () => {
            const web3Instance = new Web3(Web3.givenProvider || 'http://localhost:8545');
            setWeb3(web3Instance);

            const relayer = new FhevmRelayer({
                // 配置选项
            });

            const contractAddress = '0x...'; // 替换为部署的合约地址
            const abi = [ /* ABI of MyERC20 */ ]; // 从 contracts/ConfidentialERC20.json 导入

            const contractInstance = new web3Instance.eth.Contract(abi, contractAddress);
            setContract(contractInstance);

            const encryptedBalance = await relayer.callEncryptedFunction(contractInstance, 'balanceOf', [web3Instance.eth.defaultAccount]);
            setBalance(encryptedBalance);
        };
        init();
    }, []);

    return (
        <div>
            <h1>我的 FHEVM dApp</h1>
            <p>加密余额: {balance}</p>
        </div>
    );
};

export default App;
