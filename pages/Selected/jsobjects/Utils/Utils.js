export default {
	random_order_image: () => {
    var myrandom=Math.floor(Math.random() * 3) + 1
    var link1="https://images.unsplash.com/photo-1552611052-d59a0d9741bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    var link2="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    var link3="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    if (myrandom==1)
        storeValue("link", link1)
    else if (myrandom==2)
        storeValue("link", link2) 
    else if (myrandom==3)
        storeValue("link", link3) 
},
	onRowSelectedQueries: () => {
		Utils.random_order_image();
		orderRefundInfo.run();
	},
	
	intiateReplacement: () => {
	initiateReplacement.run();
 	getOrderinfo.run();
	closeModal('Replacement_modal')
},
		initiateRefund: () => {
	initiateRefund.run();
 	orderRefundInfo.run();
	closeModal('Refund_modal')
},
			markDelivered: () => {
	updateDeliveryStatus.run();
	getOrderinfo.run();				
	closeModal('Delivery_modal')
},
}