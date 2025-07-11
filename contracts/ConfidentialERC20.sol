// contracts/ConfidentialERC20.sol
// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity ^0.8.24;

import { SepoliaZamaFHEVMConfig } from "fhevm/config/ZamaFHEVMConfig.sol";
import { ConfidentialERC20 } from "fhevm-contracts/contracts/token/ERC20/ConfidentialERC20.sol";

contract MyERC20 is SepoliaZamaFHEVMConfig, ConfidentialERC20 {
    constructor() ConfidentialERC20("MyToken", "MYTOKEN") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
