export async function connect(){
    try {
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const account = handleAccountsChanged(accounts);
        return account;
    } catch (error) {
        if (error.code == 4001){
            alert('Connect your metamask');
        }
         else if (error.code == -32002){
            alert("There is a requisition open in your metamask");
            //alert(`Ops... occour an error ${error.message}`);
        }
    }
}

export function handleAccountsChanged(accounts){
    if (accounts.lenght ===0 ){
        alert('Please connect to metamask')
    }else{
        window.ethereum.on("accountsChanged", () => {window.location.reload()});
        return accounts[0];
    }
}