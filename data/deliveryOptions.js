export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents:0,
    wallet : "MetaMask",
    walletId : "0x3ab7ea51d7b215ca73bedf1f"
}, {
    id : '2',
    deliveryDays : 3,
    priceCents : 100,
    wallet : "Ledger",
    walletId : "0x6db7ad98d7b265ca70beda13"
}, {
    id: '3',
    deliveryDays : 1,
    priceCents: 200,
    wallet : "Rainbow",
    walletId : "0x1ke9ad11d3n292ca70bdda38"
}
];

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;
    deliveryOptions.forEach((option)=> {
        if(option.id === deliveryOptionId){
            deliveryOption = option;
        }
    });

    return deliveryOption || deliveryOptions[0];
}