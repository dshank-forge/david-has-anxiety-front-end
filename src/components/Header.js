import {useEthers, useEtherBalance} from '@usedapp/core';
import {Button} from "@mui/material";
import "./Components.css";

export const Header = () => {
    const {account, activateBrowserWallet, deactivate} = useEthers()
    
    const isConnected = account !== undefined
    const etherBalance = useEtherBalance(account)
    const formattedEtherBalance = etherBalance ? Number(etherBalance) / 10**18 : 0

    return ( 
        <div>
            { isConnected ? ( 
                <div className="sideBySide">
                    <Button variant="contained"
                        onClick={ () => deactivate() }>
                        Disconnect
                    </Button>
                    <div>
                        <b>Account:</b> {account}  
                    </div>
                    <div>
                        <b>ETH Balance:</b> {formattedEtherBalance} 
                    </div>
                </div>
            ) : (
                <Button className="connectButton" variant="contained" 
                    onClick={ () => activateBrowserWallet() }>
                    Connect
                </Button>
            )
            }   
        </div>
    )

}

// export const Header = () => {
//     // const classes = useStyles()
//     const {account, activateBrowserWallet, deactivate} = useEthers()

//     const isConnected = account !== undefined

//     return (
//         <div>
//         <div>
//             {isConnected ? (
//                 <Button color="primary" variant="contained"
//                     onClick={deactivate}>
//                     Disconnect
//                 </Button> 
//             ) : (
//                 <Button color="primary" variant="contained"
//                     onClick={ () => activateBrowserWallet()}>
//                     Connect
//                 </Button>
//             )
//             }
//         </div>
//         </div>
//     )
// }