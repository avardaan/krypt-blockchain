import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

	console.log({
		provider,
		signer,
		transactionContract,
	});
};

export const TransactionProvider = ({ children }) => {
	const [currentAccount, setCurrentAccount] = useState('');

	const checkIfWalletIsConnected = async () => {
		try {
			if (!ethereum) return alert('Please install MetaMask.');

			const accounts = await ethereum.request({ method: 'eth_accounts' });

			console.log('connected metamask accounts', accounts);

			if (accounts.length) {
				setCurrentAccount(accounts[0]);

				// getAllTransactions();
			} else {
				console.log('No metamask accounts found');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const connectWallet = async () => {
		try {
			if (!ethereum) return alert('Please install metamask');
			const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
			console.log('metamask accounts connected', accounts);
			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error);
			throw new Error('No ethereum object!');
		}
	};

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	return (
		<TransactionContext.Provider value={{ connectWallet, currentAccount }}>
			{children}
		</TransactionContext.Provider>
	);
};
