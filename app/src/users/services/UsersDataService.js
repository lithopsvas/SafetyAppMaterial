/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function UsersDataService($q, $window) {
  var reports = [
    {
      "date": "1473227576",
      "summary": "id ante",
      "status": 0
    },
    {
      "date": "1504025817",
      "summary": "ullamcorper, velit",
      "status": 0
    },
    {
      "date": "1496498804",
      "summary": "ante, iaculis",
      "status": 0
    },
    {
      "date": "1458417812",
      "summary": "id ante",
      "status": 0
    },
    {
      "date": "1500440716",
      "summary": "Proin vel",
      "status": 0
    },
    {
      "date": "1488308081",
      "summary": "Vestibulum ante",
      "status": 0
    },
    {
      "date": "1478847392",
      "summary": "Phasellus ornare.",
      "status": 1
    },
    {
      "date": "1450585264",
      "summary": "pede, malesuada",
      "status": 1
    },
    {
      "date": "1460553360",
      "summary": "Aliquam adipiscing",
      "status": 1
    },
    {
      "date": "1501955809",
      "summary": "nec, euismod",
      "status": 0
    },
    {
      "date": "1459881625",
      "summary": "nunc ac",
      "status": 0
    },
    {
      "date": "1459051009",
      "summary": "congue turpis.",
      "status": 0
    },
    {
      "date": "1493293940",
      "summary": "metus. In",
      "status": 0
    },
    {
      "date": "1467940938",
      "summary": "Pellentesque ut",
      "status": 1
    },
    {
      "date": "1483111200",
      "summary": "tellus, imperdiet",
      "status": 0
    },
    {
      "date": "1472904257",
      "summary": "sed, facilisis",
      "status": 1
    },
    {
      "date": "1480637072",
      "summary": "Nunc lectus",
      "status": 0
    },
    {
      "date": "1476368443",
      "summary": "at fringilla",
      "status": 0
    },
    {
      "date": "1468455074",
      "summary": "interdum feugiat.",
      "status": 0
    },
    {
      "date": "1502612410",
      "summary": "sapien, gravida",
      "status": 1
    },
    {
      "date": "1500791624",
      "summary": "tempor bibendum.",
      "status": 1
    },
    {
      "date": "1475230590",
      "summary": "luctus aliquet",
      "status": 0
    },
    {
      "date": "1486409543",
      "summary": "Proin non",
      "status": 1
    },
    {
      "date": "1484477457",
      "summary": "venenatis lacus.",
      "status": 1
    },
    {
      "date": "1446937446",
      "summary": "parturient montes,",
      "status": 1
    },
    {
      "date": "1473232451",
      "summary": "Vivamus rhoncus.",
      "status": 0
    },
    {
      "date": "1475440724",
      "summary": "Proin velit.",
      "status": 0
    },
    {
      "date": "1489342301",
      "summary": "dui, semper",
      "status": 0
    },
    {
      "date": "1491322895",
      "summary": "lacus. Aliquam",
      "status": 1
    },
    {
      "date": "1483507238",
      "summary": "nunc sed",
      "status": 1
    },
    {
      "date": "1495717612",
      "summary": "Etiam laoreet,",
      "status": 0
    },
    {
      "date": "1491474250",
      "summary": "tempus eu,",
      "status": 0
    },
    {
      "date": "1450018178",
      "summary": "sociosqu ad",
      "status": 0
    },
    {
      "date": "1489686871",
      "summary": "ornare placerat,",
      "status": 0
    },
    {
      "date": "1506021479",
      "summary": "consectetuer rhoncus.",
      "status": 0
    },
    {
      "date": "1494345267",
      "summary": "Phasellus nulla.",
      "status": 1
    },
    {
      "date": "1474395016",
      "summary": "interdum ligula",
      "status": 1
    },
    {
      "date": "1490678780",
      "summary": "risus. Donec",
      "status": 0
    },
    {
      "date": "1461152714",
      "summary": "lacus. Aliquam",
      "status": 0
    },
    {
      "date": "1489631341",
      "summary": "magna a",
      "status": 0
    },
    {
      "date": "1494745043",
      "summary": "sit amet",
      "status": 0
    },
    {
      "date": "1485882316",
      "summary": "euismod enim.",
      "status": 0
    },
    {
      "date": "1482784060",
      "summary": "faucibus ut,",
      "status": 1
    },
    {
      "date": "1504073909",
      "summary": "fringilla ornare",
      "status": 1
    },
    {
      "date": "1497060380",
      "summary": "elit, pharetra",
      "status": 1
    },
    {
      "date": "1499740710",
      "summary": "enim diam",
      "status": 0
    },
    {
      "date": "1481747399",
      "summary": "Quisque porttitor",
      "status": 1
    },
    {
      "date": "1492008332",
      "summary": "ipsum dolor",
      "status": 0
    },
    {
      "date": "1506134291",
      "summary": "vitae nibh.",
      "status": 0
    },
    {
      "date": "1458410760",
      "summary": "at augue",
      "status": 1
    },
    {
      "date": "1474834189",
      "summary": "egestas hendrerit",
      "status": 0
    },
    {
      "date": "1497652298",
      "summary": "et nunc.",
      "status": 0
    },
    {
      "date": "1474745203",
      "summary": "eu lacus.",
      "status": 1
    },
    {
      "date": "1500173517",
      "summary": "et ultrices",
      "status": 0
    },
    {
      "date": "1468655227",
      "summary": "ac arcu.",
      "status": 1
    },
    {
      "date": "1497515661",
      "summary": "Donec non",
      "status": 1
    },
    {
      "date": "1480378028",
      "summary": "velit eu",
      "status": 1
    },
    {
      "date": "1454482186",
      "summary": "hendrerit a,",
      "status": 1
    },
    {
      "date": "1503477643",
      "summary": "vel, vulputate",
      "status": 0
    },
    {
      "date": "1473647493",
      "summary": "Aenean egestas",
      "status": 0
    },
    {
      "date": "1490785968",
      "summary": "Duis volutpat",
      "status": 0
    },
    {
      "date": "1471050472",
      "summary": "id magna",
      "status": 1
    },
    {
      "date": "1476505711",
      "summary": "tortor, dictum",
      "status": 0
    },
    {
      "date": "1490329963",
      "summary": "ligula eu",
      "status": 1
    },
    {
      "date": "1501273494",
      "summary": "magna a",
      "status": 0
    },
    {
      "date": "1500584859",
      "summary": "Proin sed",
      "status": 0
    },
    {
      "date": "1448045861",
      "summary": "pede. Praesent",
      "status": 1
    },
    {
      "date": "1453037338",
      "summary": "lorem, auctor",
      "status": 0
    },
    {
      "date": "1470323053",
      "summary": "vehicula aliquet",
      "status": 1
    },
    {
      "date": "1451901593",
      "summary": "a, auctor",
      "status": 0
    },
    {
      "date": "1485756131",
      "summary": "eget varius",
      "status": 1
    },
    {
      "date": "1457294131",
      "summary": "nunc nulla",
      "status": 0
    },
    {
      "date": "1455831864",
      "summary": "mi. Duis",
      "status": 0
    },
    {
      "date": "1479804175",
      "summary": "massa rutrum",
      "status": 0
    },
    {
      "date": "1447853389",
      "summary": "amet ultricies",
      "status": 1
    },
    {
      "date": "1468662222",
      "summary": "eget odio.",
      "status": 0
    },
    {
      "date": "1463741256",
      "summary": "egestas. Aliquam",
      "status": 1
    },
    {
      "date": "1456262484",
      "summary": "sodales nisi",
      "status": 0
    },
    {
      "date": "1475187009",
      "summary": "enim non",
      "status": 0
    },
    {
      "date": "1497141370",
      "summary": "risus, at",
      "status": 1
    },
    {
      "date": "1464675788",
      "summary": "et magnis",
      "status": 1
    },
    {
      "date": "1487528436",
      "summary": "dui. Fusce",
      "status": 0
    },
    {
      "date": "1479696952",
      "summary": "ornare. Fusce",
      "status": 0
    },
    {
      "date": "1479460385",
      "summary": "ac, eleifend",
      "status": 0
    },
    {
      "date": "1490789281",
      "summary": "dui lectus",
      "status": 1
    },
    {
      "date": "1479540969",
      "summary": "Quisque purus",
      "status": 0
    },
    {
      "date": "1447736969",
      "summary": "dapibus quam",
      "status": 0
    },
    {
      "date": "1480566306",
      "summary": "diam dictum",
      "status": 0
    },
    {
      "date": "1481494377",
      "summary": "id, mollis",
      "status": 0
    },
    {
      "date": "1470161719",
      "summary": "nibh. Phasellus",
      "status": 0
    },
    {
      "date": "1476520401",
      "summary": "a, aliquet",
      "status": 1
    },
    {
      "date": "1501174619",
      "summary": "est ac",
      "status": 1
    },
    {
      "date": "1482200464",
      "summary": "molestie tortor",
      "status": 1
    },
    {
      "date": "1454299266",
      "summary": "et tristique",
      "status": 1
    },
    {
      "date": "1492494717",
      "summary": "turpis nec",
      "status": 1
    },
    {
      "date": "1455274056",
      "summary": "egestas a,",
      "status": 1
    },
    {
      "date": "1490324183",
      "summary": "libero lacus,",
      "status": 0
    },
    {
      "date": "1496022946",
      "summary": "ut lacus.",
      "status": 0
    },
    {
      "date": "1484127514",
      "summary": "tempus eu,",
      "status": 0
    },
    {
      "date": "1498746899",
      "summary": "auctor non,",
      "status": 1
    }
  ];
  function getCurrentPosition() {
    var deferred = $q.defer();

    if (!$window.navigator.geolocation) {
      deferred.reject('Geolocation not supported.');
    } else {
      $window.navigator.geolocation.getCurrentPosition(
          function (position) {
            deferred.resolve(position);
          },
          function (err) {
            deferred.reject(err);
          });
    }

    return deferred.promise;
  }
  // Promise-based API
  return {
    loadAllReports: function() {
      // Simulate async nature of real remote calls
      return $q.when(reports);
    },
    getCurrentPosition: getCurrentPosition
  };
}

export default ['$q', '$window', UsersDataService];

