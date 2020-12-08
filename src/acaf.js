/**
 * A suite of tests
 */
class TestSuite {
    constructor(datetime, model, numOfTest, walltime, tests) {
        this.datetime = datetime;
        this.model = model;
        this.numOfTest = numOfTest;
        this.walltime = walltime;
        this.tests = tests;
    }
}

/**
 * An individual test
 */
class Test {
    constructor(datetime, model, time, result, testDir, metadata, walltime) {
        this.datetime = datetime;
        this.model = model;
        this.time = time;
        this.result = result;
        this.testDir = testDir;
        this.metadata = metadata;
        this.walltime = walltime;
    }
}

/**
 * Fancy Counters
 */
function countUp() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = target / speed;

            // console.log(inc);
            // console.log(count);

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = Math.round(count + inc);
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });

}
/**
 * Calculates statistics for the top section
 * 
 * 
 * @param {Object} data - tabledata; all test cases not grouped by model.
 * @param {string[]} models - string[] list of models.
 * 
*/
function calculateStats(data, models) {
    let success = 0;
    let failed = 0;
    let total = 0;

    let failedByModel = {};
    models.forEach(model => {
        failedByModel[model] = 0;
    });

    data.forEach(test => {
        console.log("test result:: " + test.result);

        if (test.result == "Passed") {
            success++;
            total++;
        } else if (test.result == "Failed") {
            failed++;
            total++;
            var model = test.model;
            failedByModel[model]++;
        } else {
            console.error("Result NOT Passed or Failed!!!");
        }
    });

    $('#stats-div').show();
    $('#success-text').text(Math.round(((success / total) * 100)) + "% Passed");
    $('#stat-success').attr("data-target", success);
    $('#failed-text').text(Math.round(((failed / total) * 100)) + "% Failed");
    $('#stat-failed').attr("data-target", failed);
    //$('#stat-total').text(total);
    $('#stat-total').attr("data-target", total);
    countUp();

    var data = [{
        values: Object.values(failedByModel),
        labels: Object.keys(failedByModel),
        type: 'pie'
    }];

    var layout = {
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        title: {
            text: 'Failures by Model',
            font: {
                size: 24
            }
        }
    }

    Plotly.newPlot('stat-chart', data, layout, { responsive: true });

}

/**
 * Parses ACAF string from file "upload"
 * 
 * @param {String} data - String data from file "upload"
 * 
 */
function parseData(data) {
    console.log("parseData")


    const dataArr = data.split("\n");
    console.log("Length: " + dataArr.length)

    let tests = [];
    let suites = [];
    let models = [];

    for (const item of dataArr) {
        const line = item.split("|");

        if (line.length == 3) {
            //console.log("Start");
            tests = [];
            models.push(line[1]);
        } else if (line.length == 5) {
            //console.log("End")

            let testSuite = new TestSuite(line[0], line[1], line[2], line[3], tests);
            suites.push(testSuite);

        } else if (line.length > 5) {
            // console.log("Test Case");

            let test = new Test(line[0], line[1], line[2], line[3], line[4], line[5], line[6]);

            tests.push(test);

        } else {
            //console.log("Blank Line");
        }
    }

    let tableData = [];

    suites.forEach(tests => {
        //console.log("Each: "+test);
        tests.tests.forEach(test => {
            tableData.push(test)
        });
    });

    //console.log("JSON: " + JSON.stringify(tableData));

    calculateStats(tableData, models);

    var $table = $('#table');
    $table.bootstrapTable({ data: tableData });
    $table.bootstrapTable('hideColumn', 'testDir');
    $table.bootstrapTable('hideColumn', 'metadata');
    $table.bootstrapTable('hideLoading');
}

/**
 * Handles the initial file "upload"
 */
function handleFile() {

    var $table = $('#table');
    $table.show();
    $table.bootstrapTable('showLoading');

    try {
        var myFile = $('#fileInput').prop('files')[0];
        let fileReader = new FileReader();
        fileReader.onload = function (event) {
            parseData(fileReader.result);
        };

        fileReader.readAsText(myFile);
    } catch (e) {
        console.error("File Load Error");
    }
}

/**
 * jQuery Ready when page loads
 */
$(document).ready(function () {
    console.log("READY")

    $('#table').hide();
    $('#stats-div').hide();


});