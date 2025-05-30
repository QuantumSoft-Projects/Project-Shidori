package com.test.Service;

import com.test.Entities.Wallet;
import com.test.Repository.WalletRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class WalletService {

    @Autowired
    private WalletRepository walletRepository;

    public Wallet createWallet(Wallet wallet) {
        return walletRepository.save(wallet);
    }

    public Optional<Wallet> getWalletByUserId(Long userId) {
        return Optional.ofNullable(walletRepository.findByUserUserId(userId));
    }

    public Wallet updateBalance(Long userId, Double amount) {
        Wallet wallet = walletRepository.findByUserUserId(userId);
        if (wallet != null) {
            wallet.setBalance(wallet.getBalance() + amount);
            return walletRepository.save(wallet);
        }
        return null;
    }
}
