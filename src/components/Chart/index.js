import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'

class VerticalBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'A',
                data: [20, 50, 100]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['A', 'B', 'C'],
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    title: {
                        text: ' Persentase (%)'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return + val + "%"
                        }
                    }
                }
            },


        };
    }



    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        )
    }
}
export default VerticalBar;