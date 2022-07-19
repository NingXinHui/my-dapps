import {
    Box,
    Text,
    Button,
    Flex
} from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core';
import { injected } from '../Connector/Connector';

export const Home = () => {

    /**
     * connector;
     * 连接器对象返回一些有用的连接
     * activate（）和deactivate（）等方法
     * 
     * library;
     * library 是我们的提供者对象 通过 Web3ReactProvider 传递
     * 
     * chainId;
     * 返回账户的chainId 连接到 dApp
     * 
     * account;
     * 关联账户的账户地址
     * 
     * active;   
     * active 是一个状态变量，它返回布尔值 
     * 判断钱包连接是否正常 活跃或不活跃
     * 
     * error;
     * 返回钱包连接发生的任何错误
     */
    const { account, active, library, connector, activate, deactivate } = useWeb3React()

    const connectWallet = async () => {
        try {
            await activate(injected)
        } catch (err) {
            console.error(err)
        }
    }

    const disconnectWallet = async () => {
        try {
            deactivate()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Flex flexDir='column'>
            <Button onClick={connectWallet}>Connect to Metamask</Button>
            {active ? <Text as='span'>Connected with <b>{account}</b></Text> : <Text as='span'>Not</Text>}
            <Button onClick={disconnectWallet}>Disconnect Wallet</Button>
        </Flex>
    );
}