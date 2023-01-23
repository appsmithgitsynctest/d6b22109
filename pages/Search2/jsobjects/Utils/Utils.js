export default {
	myVar1: [],
	myVar2: {},
	getRefunds: () => {
		const arr = getAllOrders.data.map(x => parseInt(x.refundstatus))
		return ((arr.reduce((a, b) => a + b, 0))/(getAllOrders.data.length)).toFixed(2)
	},
	getOnTimeDeliveries: () => {
		const arr = getOrders.data.map(x => parseInt(x.on_time))
		return ((arr.reduce((a, b) => a + b, 0))/(getOrders.data.length)).toFixed(2)
	},

	delayedOrders: () => {
		const delay = (delayedOrders.data[0].count*100)/totalOrders.data[0].count
		return Math.round(delay)
	},
		refundedOrders: () => {
		const refund = (refundedOrders.data[0].count*100)/totalOrders.data[0].count
		return Math.round(refund)
	},
		search: () => {
		if(appsmith?.store?.searchType?.length==0){
			return getAllCustomers.data
		}
		else if (appsmith?.store?.searchType=='Customers'){
			return(getAllCustomers.data.filter(word => word.cname.toLowerCase().includes(name_search.text.toLowerCase())))
		}
	},
	
	order_id_search:() => {
			if(order_id_search.text.length==0){
			return getAllOrders.data
		}
		else {
			return(getAllOrders.data.filter(word => word.order_id.includes(order_id_search.text)))
		}
	}
	
}