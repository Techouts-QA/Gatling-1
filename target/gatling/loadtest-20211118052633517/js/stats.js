var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30",
        "ok": "15",
        "ko": "15"
    },
    "minResponseTime": {
        "total": "84",
        "ok": "263",
        "ko": "84"
    },
    "maxResponseTime": {
        "total": "946",
        "ok": "946",
        "ko": "698"
    },
    "meanResponseTime": {
        "total": "445",
        "ok": "530",
        "ko": "359"
    },
    "standardDeviation": {
        "total": "264",
        "ok": "241",
        "ko": "259"
    },
    "percentiles1": {
        "total": "458",
        "ok": "497",
        "ko": "292"
    },
    "percentiles2": {
        "total": "688",
        "ok": "774",
        "ko": "640"
    },
    "percentiles3": {
        "total": "821",
        "ok": "875",
        "ko": "695"
    },
    "percentiles4": {
        "total": "916",
        "ok": "932",
        "ko": "697"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13,
    "percentage": 43
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 15,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6",
        "ok": "3",
        "ko": "3"
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
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "946",
        "ok": "946",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "530",
        "ok": "530",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "241",
        "ok": "241",
        "ko": "-"
    },
    "percentiles1": {
        "total": "497",
        "ok": "497",
        "ko": "-"
    },
    "percentiles2": {
        "total": "774",
        "ok": "774",
        "ko": "-"
    },
    "percentiles3": {
        "total": "875",
        "ok": "875",
        "ko": "-"
    },
    "percentiles4": {
        "total": "932",
        "ok": "932",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 13
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
        "total": "3",
        "ok": "3",
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
        "total": "15",
        "ok": "0",
        "ko": "15"
    },
    "minResponseTime": {
        "total": "84",
        "ok": "-",
        "ko": "84"
    },
    "maxResponseTime": {
        "total": "698",
        "ok": "-",
        "ko": "698"
    },
    "meanResponseTime": {
        "total": "359",
        "ok": "-",
        "ko": "359"
    },
    "standardDeviation": {
        "total": "259",
        "ok": "-",
        "ko": "259"
    },
    "percentiles1": {
        "total": "292",
        "ok": "-",
        "ko": "292"
    },
    "percentiles2": {
        "total": "640",
        "ok": "-",
        "ko": "640"
    },
    "percentiles3": {
        "total": "695",
        "ok": "-",
        "ko": "695"
    },
    "percentiles4": {
        "total": "697",
        "ok": "-",
        "ko": "697"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 15,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3",
        "ok": "-",
        "ko": "3"
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
