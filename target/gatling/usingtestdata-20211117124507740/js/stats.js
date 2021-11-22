var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40",
        "ok": "26",
        "ko": "14"
    },
    "minResponseTime": {
        "total": "379",
        "ok": "379",
        "ko": "464"
    },
    "maxResponseTime": {
        "total": "1276",
        "ok": "1276",
        "ko": "1088"
    },
    "meanResponseTime": {
        "total": "951",
        "ok": "972",
        "ko": "913"
    },
    "standardDeviation": {
        "total": "170",
        "ok": "167",
        "ko": "169"
    },
    "percentiles1": {
        "total": "995",
        "ok": "998",
        "ko": "989"
    },
    "percentiles2": {
        "total": "1007",
        "ok": "1008",
        "ko": "995"
    },
    "percentiles3": {
        "total": "1171",
        "ok": "1187",
        "ko": "1072"
    },
    "percentiles4": {
        "total": "1244",
        "ok": "1255",
        "ko": "1085"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 5
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 23,
    "percentage": 57
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 14,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8",
        "ok": "5.2",
        "ko": "2.8"
    }
},
contents: {
"req_get-single-user-643b6": {
        type: "REQUEST",
        name: "Get single user req",
path: "Get single user req",
pathFormatted: "req_get-single-user-643b6",
stats: {
    "name": "Get single user req",
    "numberOfRequests": {
        "total": "40",
        "ok": "26",
        "ko": "14"
    },
    "minResponseTime": {
        "total": "379",
        "ok": "379",
        "ko": "464"
    },
    "maxResponseTime": {
        "total": "1276",
        "ok": "1276",
        "ko": "1088"
    },
    "meanResponseTime": {
        "total": "951",
        "ok": "972",
        "ko": "913"
    },
    "standardDeviation": {
        "total": "170",
        "ok": "167",
        "ko": "169"
    },
    "percentiles1": {
        "total": "995",
        "ok": "998",
        "ko": "989"
    },
    "percentiles2": {
        "total": "1007",
        "ok": "1008",
        "ko": "995"
    },
    "percentiles3": {
        "total": "1171",
        "ok": "1187",
        "ko": "1072"
    },
    "percentiles4": {
        "total": "1244",
        "ok": "1255",
        "ko": "1085"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 5
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 23,
    "percentage": 57
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 14,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8",
        "ok": "5.2",
        "ko": "2.8"
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
