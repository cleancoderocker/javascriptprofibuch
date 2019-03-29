function init() {
  const MAX_DATAPOINTS = 150;
  let chart;
  let values = [];
  let chartData = [
    {
      values: values,
      key: 'Datenstrom',
      color: '#ff7f0e'
    }
  ];
  const openObserver = Rx.Observer.create(event => {
    console.info('Socket geöffnet');
  });
  const closingObserver = Rx.Observer.create(() => {
    console.log('Socket geschlossen');
  });
  const stream = Rx.DOM.fromWebSocket(
    'ws://localhost:3000',
    'echo-protocol',
    openObserver,
    closingObserver
  );
  stream.subscribe(
    event => {
      values.push({
        x: new Date(),
        y: parseFloat(event.data)
      });
      if (values.length > MAX_DATAPOINTS) {
        values.shift();
      }
      chart.update();
    },
    error => {
      console.error('error: %s', error);
    },
    () => {
      console.info('Socket geschlossen');
    }
  );
  const chartDataStream = Rx.Observable.from(values);
  chartDataStream.subscribe(event => {
    if (typeof chart !== 'undefined') {
      chart.update();
    }
  });
  nv.addGraph(() => {
    chart = nv.models
      .lineChart()
      .interpolate('basis')
      .margin({ left: 100 })
      .showLegend(true)
      .showYAxis(true)
      .showXAxis(true);
    chart.xAxis.axisLabel('Time (ms)').tickFormat(d3.format('.02f'));
    chart.yAxis.axisLabel('Voltage (v)').tickFormat(d3.format('.02f'));
    d3.select('#chart svg')
      .datum(chartData)
      .call(chart);
    nv.utils.windowResize(() => {
      chart.update();
    });
    return chart;
  });
}
document.addEventListener('DOMContentLoaded', init);
