var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "33",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "351",
        "ok": "351",
        "ko": "538"
    },
    "maxResponseTime": {
        "total": "1239",
        "ok": "1044",
        "ko": "1239"
    },
    "meanResponseTime": {
        "total": "954",
        "ok": "943",
        "ko": "977"
    },
    "standardDeviation": {
        "total": "152",
        "ok": "158",
        "ko": "137"
    },
    "percentiles1": {
        "total": "996",
        "ok": "999",
        "ko": "988"
    },
    "percentiles2": {
        "total": "1003",
        "ok": "1006",
        "ko": "992"
    },
    "percentiles3": {
        "total": "1035",
        "ok": "1018",
        "ko": "1179"
    },
    "percentiles4": {
        "total": "1202",
        "ok": "1036",
        "ko": "1227"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 8
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 29,
    "percentage": 58
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 17,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.333",
        "ok": "5.5",
        "ko": "2.833"
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
        "total": "50",
        "ok": "33",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "351",
        "ok": "351",
        "ko": "538"
    },
    "maxResponseTime": {
        "total": "1239",
        "ok": "1044",
        "ko": "1239"
    },
    "meanResponseTime": {
        "total": "954",
        "ok": "943",
        "ko": "977"
    },
    "standardDeviation": {
        "total": "152",
        "ok": "158",
        "ko": "137"
    },
    "percentiles1": {
        "total": "996",
        "ok": "999",
        "ko": "988"
    },
    "percentiles2": {
        "total": "1003",
        "ok": "1006",
        "ko": "992"
    },
    "percentiles3": {
        "total": "1035",
        "ok": "1018",
        "ko": "1179"
    },
    "percentiles4": {
        "total": "1202",
        "ok": "1036",
        "ko": "1227"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 8
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 29,
    "percentage": 58
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 17,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.333",
        "ok": "5.5",
        "ko": "2.833"
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
