var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "706",
        "ok": "706",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1593",
        "ok": "1593",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1051",
        "ok": "1051",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "229",
        "ok": "229",
        "ko": "-"
    },
    "percentiles1": {
        "total": "993",
        "ok": "993",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1119",
        "ok": "1119",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1515",
        "ok": "1515",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1577",
        "ok": "1577",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 70
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.667",
        "ok": "6.667",
        "ko": "-"
    }
},
contents: {
"req_get-data-from-j-4dd95": {
        type: "REQUEST",
        name: "get data from json responce",
path: "get data from json responce",
pathFormatted: "req_get-data-from-j-4dd95",
stats: {
    "name": "get data from json responce",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "706",
        "ok": "706",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1593",
        "ok": "1593",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1149",
        "ok": "1149",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1142",
        "ok": "1142",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1362",
        "ok": "1362",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1556",
        "ok": "1556",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1586",
        "ok": "1586",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 50
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
    }
}
    },"req_validating-json-4e480": {
        type: "REQUEST",
        name: "Validating json data",
path: "Validating json data",
pathFormatted: "req_validating-json-4e480",
stats: {
    "name": "Validating json data",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "766",
        "ok": "766",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1000",
        "ok": "1000",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "953",
        "ok": "953",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "percentiles1": {
        "total": "982",
        "ok": "982",
        "ko": "-"
    },
    "percentiles2": {
        "total": "994",
        "ok": "994",
        "ko": "-"
    },
    "percentiles3": {
        "total": "999",
        "ok": "999",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1000",
        "ok": "1000",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 90
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
