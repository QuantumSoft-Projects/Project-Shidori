package com.test.Controller;

import com.test.Entities.Wallet;
import com.test.Service.WalletService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/wallet")
@CrossOrigin(origins = "*")
public class WalletController {

    @Autowired
    private WalletService walletService;

    @PostMapping("/create")
    public Wallet createWallet(@RequestBody Wallet wallet) {
        return walletService.createWallet(wallet);
    }

    @GetMapping("/{userId}")
    public Optional<Wallet> getWallet(@PathVariable Long userId) {
        return walletService.getWalletByUserId(userId);
    }

    @PutMapping("/updateBalance/{userId}")
    public Wallet updateBalance(@PathVariable Long userId, @RequestParam Double amount) {
        return walletService.updateBalance(userId, amount);
    }
}
