// chart 1 slimple line chart
const xside = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010];
    const yside = [52,20,60,35,40];
    new Chart("line-chart",{
        type:"line",
        data:{
            labels:xside,
            datasets:[{
                fill:false,
                lineTension:0.30,
                backgroundColor:"blue",
                borderColor:'grey',
                borderWidth:1,
                pointRadius:2,
                pointBackgroundColor:'green',
                data:yside
            }]
        },
        options:{
            responsive:true,
            maintainAspectRatio:true,
            legend:{display:false},
            scales:{
                yAxes:[{ticks:{min:10, max:100}}],
            }
        }
    });

    // chart 2 multi line 
    const cyears = [2000, 2001, 2002, 2003, 2004, 2005];//X axes
    const std_1 = [90,50,99,80,95];
    const std_2 = [50,80,60,60,90];
    const std_3 = [30,60,70,80,70];
    new Chart("line-chart_multidata",{
        type:"line",
        data:{
            labels:cyears,
            datasets:
            [
                {label:'std_1',data:std_1,borderColor:'red',borderWidth:1,fill:false, lineTension:0.20, pointRadius:1},
                {label:'std_2',data:std_2, borderColor:'green', borderWidth:1, fill:false, lineTension:0.20, pointRadius:1},
                {label:'std_3',data:std_3, borderColor:'orange', borderWidth:1, fill:false, lineTension:0.20, pointRadius:1}
            ]
        },
        options:{
            responsive:true,
            maintainAspectRatio:true,
            legend:{
                display:true,
                position:'bottom',
                
            },
            title:{
                display:true,
                text:"Student % in last 5 years",
                fontSize:12
            },
            scales:{
                yAxes:[{ticks:{min:10, max:100}}],
            }
        },
    });
    // simple line chart 2 ends
    // baar chart
    const xcountries = ['Ind','Pak','USA','Fra','Ger'];
    const ydata = [30,60,40,70,20];
    var barcolor = ['orange','red', 'green', 'blue', 'grey']
    new Chart("barchart",{
        type:"bar",
        data:{
            labels:xcountries,
            datasets:[{
                backgroundColor:barcolor,
                data:ydata,
            }]
        },
        options:{
            responsive:true,
            maintainAspectRatio:true,
            legend: {display: false},
            title:{
                display:true,
                text:"Hello woreld",
            },
            scales:{
                yAxes:[{ticks:{min:0,max:100}}],
            }
        },
    });
    // pie chart

    // pie
    new Chart("piechart",{
        type:"pie",
        data:{
            labels:xcountries,
            datasets:[{
                backgroundColor:barcolor,
                data:ydata,
            }],
        },
        options:{
            responsive:true,
            maintainAspectRatio:true,
            legend:{
                display:true,
                position:'bottom',
                
            },
            title: {
                display: true,
                text: "World Wide Wine Production 2018"
            }
        }
    });

    // doughnutchart
    new Chart("doughnutchart",{
        type:"doughnut",
        data:{
            labels:xcountries,
            datasets:[{
                backgroundColor:barcolor,
                data:ydata,
            }],
        },
        options:{
            responsive:true,
            maintainAspectRatio:true,
            legend:{
                display:true,
                position:'bottom',
                
            },
            title: {
                display: true,
                text: "World Wide Wine Production 2018"
            }
        }
    });
    // simple bar chart ends
    