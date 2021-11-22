var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "247",
        "ok": "117",
        "ko": "130"
    },
    "minResponseTime": {
        "total": "49",
        "ok": "550",
        "ko": "49"
    },
    "maxResponseTime": {
        "total": "1989",
        "ok": "1989",
        "ko": "1246"
    },
    "meanResponseTime": {
        "total": "962",
        "ok": "1195",
        "ko": "753"
    },
    "standardDeviation": {
        "total": "360",
        "ok": "152",
        "ko": "364"
    },
    "percentiles1": {
        "total": "1007",
        "ok": "1198",
        "ko": "912"
    },
    "percentiles2": {
        "total": "1197",
        "ok": "1241",
        "ko": "993"
    },
    "percentiles3": {
        "total": "1297",
        "ok": "1352",
        "ko": "1075"
    },
    "percentiles4": {
        "total": "1451",
        "ok": "1620",
        "ko": "1162"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 66,
    "percentage": 27
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 47,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 130,
    "percentage": 53
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.227",
        "ok": "5.318",
        "ko": "5.909"
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
        "total": "130",
        "ok": "117",
        "ko": "13"
    },
    "minResponseTime": {
        "total": "232",
        "ok": "550",
        "ko": "232"
    },
    "maxResponseTime": {
        "total": "1989",
        "ok": "1989",
        "ko": "1246"
    },
    "meanResponseTime": {
        "total": "1111",
        "ok": "1195",
        "ko": "352"
    },
    "standardDeviation": {
        "total": "303",
        "ok": "152",
        "ko": "262"
    },
    "percentiles1": {
        "total": "1195",
        "ok": "1198",
        "ko": "260"
    },
    "percentiles2": {
        "total": "1232",
        "ok": "1241",
        "ko": "285"
    },
    "percentiles3": {
        "total": "1332",
        "ok": "1352",
        "ko": "729"
    },
    "percentiles4": {
        "total": "1594",
        "ok": "1620",
        "ko": "1143"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 3
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 66,
    "percentage": 51
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 47,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "count": 13,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.909",
        "ok": "5.318",
        "ko": "0.591"
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
        "total": "117",
        "ok": "0",
        "ko": "117"
    },
    "minResponseTime": {
        "total": "49",
        "ok": "-",
        "ko": "49"
    },
    "maxResponseTime": {
        "total": "1192",
        "ok": "-",
        "ko": "1192"
    },
    "meanResponseTime": {
        "total": "797",
        "ok": "-",
        "ko": "797"
    },
    "standardDeviation": {
        "total": "346",
        "ok": "-",
        "ko": "346"
    },
    "percentiles1": {
        "total": "977",
        "ok": "-",
        "ko": "977"
    },
    "percentiles2": {
        "total": "994",
        "ok": "-",
        "ko": "994"
    },
    "percentiles3": {
        "total": "1074",
        "ok": "-",
        "ko": "1074"
    },
    "percentiles4": {
        "total": "1090",
        "ok": "-",
        "ko": "1090"
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
    "count": 117,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.318",
        "ok": "-",
        "ko": "5.318"
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
