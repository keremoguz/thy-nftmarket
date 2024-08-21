export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents:0,
    wallet : "Meta"
}, {
    id : '2',
    deliveryDays : 3,
    priceCents : 100,
    wallet : "Google"
}, {
    id: '3',
    deliveryDays : 1,
    priceCents: 200,
    wallet : "BTC"
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