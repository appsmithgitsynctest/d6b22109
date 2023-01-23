export default {
  delayedOrders: () => {
    const delay =
      (delayedOrders.data[0].count * 100) / totalOrders.data[0].count;
    return Math.round(delay);
  },
  refundedOrders: () => {
    const refund = (refundedOrders.data[0].count * 100) / totalOrders.data[0].count;
    return Math.round(refund);
  },
  getRefundDonutChart: () => {
    const dataSource = {
      chart: {
        showpercentvalues: "1",
        defaultcenterlabel: "Hover",
        decimals: "1",
        centerlabel: "$label: $value",
        theme: "fusion",
        showLegend: "1",
        showLabels: "0",
        showValues: "0",
      },
      data: [
        {
          label: "Card",
          value: refundMethod.data[0].value,
          color: "#7441F6",
        },
        {
          label: "Credit",
          value: refundMethod.data[1].value,
          color: "#00BC62",
        },
      ],
    };
    return {
      type: "doughnut2d",
      dataFormat: "json",
      dataSource,
    };
  },
  getDonutChart: () => {
    const dataSource = {
      chart: {
        showpercentvalues: "1",
        defaultcenterlabel: "Hover",
        decimals: "1",
        centerlabel: "$label: $value",
        theme: "fusion",
        showLegend: "1",
        showLabels: "0",
        showValues: "0",
      },
      data: [
        {
          label: paymentMethod.data[0].label,
          value: paymentMethod.data[0].value,
          color: "#7441F6",
        },
        {
          label: paymentMethod.data[1].label,
          value: paymentMethod.data[1].value,
          color: "#00BC62",
        },
      ],
    };
    return {
      type: "doughnut2d",
      dataFormat: "json",
      dataSource,
    };
  },
	
  getSatisfaction: () => {
    const dataSource = {
      chart: {
        subCaption: "(evaluated using number of orders refunded)",
        lowerlimit: "0",
        upperlimit: "100",
        showvalue: "1",
        numbersuffix: "%",
        theme: "fusion",
        showtooltip: "0",
      },
      colorrange: {
        color: [
          {
            minvalue: "0",
            maxvalue: "25",
            code: "#7441F6",
          },
          {
            minvalue: "25",
            maxvalue: "50",
            code: "#7441F6",
          },
          {
            minvalue: "50",
            maxvalue: "75",
            code: "#00BC62",
          },
          {
            minvalue: "75",
            maxvalue: "100",
            code: "#62B58F",
          },
        ],
      },
      dials: {
        dial: [
          {
            value: 100 - Text2Copy1.text.replace('%',''),
          },
        ],
      },
      trendpoints: {
        point: [
          {
            startvalue: "90",
            displayvalue: "Target",
            thickness: "2",
            color: "#000000",
            usemarker: "1",
            markerbordercolor: "#000000",
            markertooltext: "80%",
          },
        ],
      },
    };

    return {
      type: "angulargauge",
      dataFormat: "json",
      dataSource,
    };
  },
  getValueComparison: () => {
    const dataSource = {
      chart: {
        yaxisname: "Value of orders",
        yAxisMaxValue: "25000",
        showhovereffect: "1",
        theme: "fusion",
        palette: "2",
        paletteColors: "#00BC62, #7441F6",
      },
      categories: [
        {
          category: [
            {
              label: "Jan",
            },
            {
              label: "Feb",
            },
            {
              label: "Mar",
            },
            {
              label: "Apr",
            },
            {
              label: "May",
            },
            {
              label: "Jun",
            },
            {
              label: "Jul",
            },
            {
              label: "Aug",
            },
            {
              label: "Sep",
            },
            {
              label: "Oct",
            },
            {
              label: "Nov",
            },
            {
              label: "Dec",
            },
          ],
        },
      ],
      dataset: [
        {
          seriesname: "Order value",
          data: [
            {
              value: orderValuePerMonth.data[0].value,
              color: "#00BC62",
            },
            {
              value: orderValuePerMonth.data[1].value,
              color: "#00BC62",
            },
            {
              value: orderValuePerMonth.data[2].value,
              color: "#00BC62",
            },
            {
              value: orderValuePerMonth.data[3].value,
              color: "#00BC62",
            },
            {
              value: orderValuePerMonth.data[4].value,
              color: "#00BC62",
            },
            {
              value: orderValuePerMonth.data[5].value,
              color: "#00BC62",
            },
            {
              value: orderValuePerMonth.data[6].value,
              color: "#00BC62",
            },
            {
              value: orderValuePerMonth.data[7].value,
              color: "#00BC62",
            },
            {
              value: orderValuePerMonth.data[8].value,
              color: "#00BC62",
            },
            {
              value: orderValuePerMonth.data[9].value,
              color: "#00BC62",
            },
            {
              value: orderValuePerMonth.data[10].value,
              color: "#00BC62",
            },
            {
              value: orderValuePerMonth.data[11].value,
              color: "#00BC62",
            },
          ],
        },
        {
          seriesname: "Refund value",
          data: [
            {
              value: refundValuePerMonth.data[0].value,
              color: "#7441F6",
            },
            {
              value: refundValuePerMonth.data[1].value,
              color: "#7441F6",
            },
            {
              value: refundValuePerMonth.data[2].value,
              color: "#7441F6",
            },
            {
              value: refundValuePerMonth.data[3].value,
              color: "#7441F6",
            },
            {
              value: refundValuePerMonth.data[4].value,
              color: "#7441F6",
            },
            {
              value: refundValuePerMonth.data[5].value,
              color: "#7441F6",
            },
            {
              value: refundValuePerMonth.data[6].value,
              color: "#7441F6",
            },
            {
              value: refundValuePerMonth.data[7].value,
              color: "#7441F6",
            },
            {
              value: refundValuePerMonth.data[8].value,
              color: "#7441F6",
            },
            {
              value: refundValuePerMonth.data[9].value,
              color: "#7441F6",
            },
            {
              value: "null",
              color: "#7441F6",
            },
            {
              value: refundValuePerMonth.data[10].value,
              color: "#7441F6",
            },
          ],
        },
      ],
    };

    return {
      type: "msline",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource,
    };
  },
  getNumberComparison: () => {
    const dataSource = {
      chart: {
        yaxisname: "Number of orders",
        showhovereffect: "1",
        theme: "fusion",
        palette: "2",
        paletteColors: "#00BC62, #7441F6",
      },
      categories: [
        {
          category: [
            {
              label: "Jan",
            },
            {
              label: "Feb",
            },
            {
              label: "Mar",
            },
            {
              label: "Apr",
            },
            {
              label: "May",
            },
            {
              label: "Jun",
            },
            {
              label: "Jul",
            },
            {
              label: "Aug",
            },
            {
              label: "Sep",
            },
            {
              label: "Oct",
            },
            {
              label: "Nov",
            },
            {
              label: "Dec",
            },
          ],
        },
      ],
      dataset: [
        {
          seriesname: "Number of orders",
          data: [
            {
              value: ordersPerMonth.data[0].value,
              color: "#00BC62",
            },
            {
              value: ordersPerMonth.data[1].value,
              color: "#00BC62",
            },
            {
              value: ordersPerMonth.data[2].value,
              color: "#00BC62",
            },
            {
              value: ordersPerMonth.data[3].value,
              color: "#00BC62",
            },
            {
              value: ordersPerMonth.data[4].value,
              color: "#00BC62",
            },
            {
              value: ordersPerMonth.data[5].value,
              color: "#00BC62",
            },
            {
              value: ordersPerMonth.data[6].value,
              color: "#00BC62",
            },
            {
              value: ordersPerMonth.data[7].value,
              color: "#00BC62",
            },
            {
              value: ordersPerMonth.data[8].value,
              color: "#00BC62",
            },
            {
              value: ordersPerMonth.data[9].value,
              color: "#00BC62",
            },
            {
              value: ordersPerMonth.data[10].value,
              color: "#00BC62",
            },
            {
              value: ordersPerMonth.data[11].value,
              color: "#00BC62",
            },
          ],
        },
        {
          seriesname: "Number of refunded orders",
          data: [
            {
              value: refundsPerMonth.data[0].value,
              color: "#7441F6",
            },
            {
              value: refundsPerMonth.data[1].value,
              color: "#7441F6",
            },
            {
              value: refundsPerMonth.data[2].value,
              color: "#7441F6",
            },
            {
              value: refundsPerMonth.data[3].value,
              color: "#7441F6",
            },
            {
              value: refundsPerMonth.data[4].value,
              color: "#7441F6",
            },
            {
              value: refundsPerMonth.data[5].value,
              color: "#7441F6",
            },
            {
              value: refundsPerMonth.data[6].value,
              color: "#7441F6",
            },
            {
              value: refundsPerMonth.data[7].value,
              color: "#7441F6",
            },
            {
              value: refundsPerMonth.data[8].value,
              color: "#7441F6",
            },
            {
              value: refundsPerMonth.data[9].value,
              color: "#7441F6",
            },
            {
              value: "null",
              color: "#7441F6",
            },
            {
              value: refundsPerMonth.data[10].value,
              color: "#7441F6",
            },
          ],
        },
      ],
    };

    return {
      type: "msbar2d",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource,
    };
  },
  getPopularProducts: () => {
    const dataSource = {
      chart: {
        caption: "Popular products",
        theme: "fusion",
        yaxismaxvalue: "10",
        numdivlines: "2",
        showlegend: "0",
        interactivelegend: "0",
        showvalues: "0",
        showsum: "0",
        plotSpacePercent: "50",
      },
      categories: [
        {
          category: [
            {
              label: popularProducts.data[0].item_name,
            },
            {
              label: popularProducts.data[1].item_name,
            },
            {
              label: popularProducts.data[2].item_name,
            },
          ],
        },
      ],
      dataset: [
        {
          seriesname: "",
          data: [
            {
              value: popularProducts.data[0].count,
              color: "#3B82F6",
            },
            {
              value: popularProducts.data[1].count,
              color: "#00BC62",
            },
            {
              value: popularProducts.data[2].count,
              color: "#7441F6",
            },
          ],
        },
      ],
    };

    return {
      type: "stackedbar2d",
      dataFormat: "json",
      dataSource,
    };
  },
  getDeliveries: () => {
    const dataSource = {
      chart: {
        xAxisname: "Month",
        yAxisName: "Number of orders",
        theme: "fusion",
        palette: "2",
        paletteColors: "#00BC62, #7441F6",
      },
      categories: [
        {
          category: [
            {
              label: "Jan",
            },
            {
              label: "Feb",
            },
            {
              label: "Mar",
            },
            {
              label: "Apr",
            },
            {
              label: "May",
            },
            {
              label: "Jun",
            },
            {
              label: "Jul",
            },
            {
              label: "Aug",
            },
            {
              label: "Sep",
            },
            {
              label: "Oct",
            },
            {
              label: "Nov",
            },
            {
              label: "Dec",
            },
          ],
        },
      ],
      dataset: [
        {
          seriesname: "Expected",
          data: [
            {
              value: monthlyExpectedDeliveryDates.data[0].value,
            },
            {
              value: monthlyExpectedDeliveryDates.data[1].value,
            },
            {
              value: monthlyExpectedDeliveryDates.data[2].value,
            },
            {
              value: monthlyExpectedDeliveryDates.data[3].value,
            },
            {
              value: monthlyExpectedDeliveryDates.data[4].value,
            },
            {
              value: monthlyExpectedDeliveryDates.data[5].value,
            },
            {
              value: monthlyExpectedDeliveryDates.data[6].value,
            },
            {
              value: monthlyExpectedDeliveryDates.data[7].value,
            },
            {
              value: monthlyExpectedDeliveryDates.data[8].value,
            },
            {
              value: monthlyExpectedDeliveryDates.data[9].value,
            },
            {
              value: monthlyExpectedDeliveryDates.data[10].value,
            },
            {
              value: monthlyExpectedDeliveryDates.data[11].value,
            },
          ],
        },
        {
          seriesname: "Actual",
          data: [
            {
              value: monthlyDeliveryDates.data[0].value,
            },
            {
              value: monthlyDeliveryDates.data[1].value,
            },
            {
              value: monthlyDeliveryDates.data[2].value,
            },
            {
              value: monthlyDeliveryDates.data[3].value,
            },
            {
              value: monthlyDeliveryDates.data[4].value,
            },
            {
              value: monthlyDeliveryDates.data[5].value,
            },
            {
              value: monthlyDeliveryDates.data[6].value,
            },
            {
              value: monthlyDeliveryDates.data[7].value,
            },
            {
              value: monthlyDeliveryDates.data[8].value,
            },
            {
              value: monthlyDeliveryDates.data[9].value,
            },
            {
              value: monthlyDeliveryDates.data[10].value,
            },
            {
              value: monthlyDeliveryDates.data[11].value,
            },
          ],
        },
      ],
    };

    return {
      type: "mscolumn2d",
      dataFormat: "json",
      dataSource,
    };
  },
};
