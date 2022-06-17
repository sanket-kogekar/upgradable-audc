//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract AUDC_V1 is Initializable, ERC20Upgradeable, OwnableUpgradeable {
    bool private isInitializing;

    function initialize() external initializer {
        __ERC20_init("Australian Dollar Coin", "AUDC");
        __Ownable_init();
        isInitializing = true;
        _mint(_msgSender(), 10000000 * (10**decimals()));
        isInitializing = false;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, amount);
        if (isInitializing == false) {
            require(
                balanceOf(to) + amount <= 1000 * (10**decimals()),
                "Max 1000.00 tokens allowed"
            );
        }
    }
}
