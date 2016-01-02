/* 

SOURCE  : http://www.scoutinghubertusnuth.nl/site-content/technieken/transformaties.htm
SOURCE2 : http://www.gpsvisualizer.com/calculators //ranges

*/

x = 0; y = 0; l = 0, f = 0; a = " "; b = "  "; xx = ""; yy = " "; mc = 0
graden = 0; gra = 0; min = 0; sec = 0

var outputX = "";
var outputY = "";

function Degrees(deg) {
    g0 = deg
    gra = Math.floor(g0)
    g0 = (g0 - gra) * 60
    min = Math.floor(g0)
    sec = Math.round((g0 - min) * 60 * 1000) / 1000
    if (sec == 60) { min = min + 1; sec = 0 }
    if (min == 60) { gra = gra + 1; min = 0 }
}

// 
// RD to LatLong
// 
function ConvertRDtoLatLng(rdx, rdy) {
    x = parseFloat(rdx)
    y = parseFloat(rdy)
    if (x < 1000) x *= 1000
    if (y < 1000) y *= 1000
    if (x < 0 || x > 290000)
        alert("0 < x < 290(000)")
    else {
        if (y < 290000 || y > 630000)
            alert("290(000) < y <630(000)")
        else {
            return RDLatLong(x, y)
        }
    }
    return "no valid coordinates";
}

function RDLatLong(x, y) {
    x0 = 155000.000
    y0 = 463000.000

    f0 = 52.156160556
    l0 = 5.387638889

    a01 = 3236.0331637; b10 = 5261.3028966
    a20 = -32.5915821; b11 = 105.9780241
    a02 = -0.2472814; b12 = 2.4576469
    a21 = -0.8501341; b30 = -0.8192156
    a03 = -0.0655238; b31 = -0.0560092
    a22 = -0.0171137; b13 = 0.0560089
    a40 = 0.0052771; b32 = -0.0025614
    a23 = -0.0003859; b14 = 0.0012770
    a41 = 0.0003314; b50 = 0.0002574
    a04 = 0.0000371; b33 = -0.0000973
    a42 = 0.0000143; b51 = 0.0000293
    a24 = -0.0000090; b15 = 0.0000291

    with (Math) {
        dx = (x - x0) * pow(10, -5);
        dy = (y - y0) * pow(10, -5);

        df = a01 * dy + a20 * pow(dx, 2) + a02 * pow(dy, 2) + a21 * pow(dx, 2) * dy + a03 * pow(dy, 3)
        df += a40 * pow(dx, 4) + a22 * pow(dx, 2) * pow(dy, 2) + a04 * pow(dy, 4) + a41 * pow(dx, 4) * dy
        df += a23 * pow(dx, 2) * pow(dy, 3) + a42 * pow(dx, 4) * pow(dy, 2) + a24 * pow(dx, 2) * pow(dy, 4);
        f = f0 + df / 3600;

        dl = b10 * dx + b11 * dx * dy + b30 * pow(dx, 3) + b12 * dx * pow(dy, 2) + b31 * pow(dx, 3) * dy;
        dl += b13 * dx * pow(dy, 3) + b50 * pow(dx, 5) + b32 * pow(dx, 3) * pow(dy, 2) + b14 * dx * pow(dy, 4);
        dl += b51 * pow(dx, 5) * dy + b33 * pow(dx, 3) * pow(dy, 3) + b15 * dx * pow(dy, 5);
        l = l0 + dl / 3600
    }

    var lat_gra, lat_min, lat_sec;
    var lng_gra, lng_min, lng_sec;
    var latsign = 1;
    var lngsign = 1;
    //view-source:http://transition.fcc.gov/mb/audio/bickel/DDDMMSS-decimal.html
    Degrees(f);

    if (gra < 0) latsign = -1;
    else latsign = 1;
    lat_gra = Math.abs(Math.round(gra * 1000000.)); //Math.round is used to eliminate the small error caused by rounding in the computer: 0.2 is not 0.200000000000284
    lat_min = Math.abs(Math.round(min * 1000000.));
    lat_sec = Math.abs(Math.round(sec * 1000000.));

    Degrees(l)
    if (gra < 0) lngsign = -1;
    else lngsign = 1;
    lng_gra = Math.abs(Math.round(gra * 1000000.));
    lng_min = Math.abs(Math.round(min * 1000000.));
    lng_sec = Math.abs(Math.round(sec * 1000000.));

    var latitude = Math.round(lat_gra + (lat_min / 60.) + (lat_sec / 3600.)) * latsign / 1000000;
    var longitude = Math.round(lng_gra + (lng_min / 60) + (lng_sec / 3600)) * lngsign / 1000000;

    //return { lat: latitude, lng: longitude };

    //NOTE: THESE TWO LINES BELOW ARE TO CONVERT THE 'RD NB' AND 'RD OL' 
    //TO WGS84 LAT+LNG TO PRINT THE ITEMS ON THE CORRECT LOCATION ON THE MAP
    fWgs = f + (-96.862 - 11.714 * (f - 52) - 0.125 * (l - 5)) / 100000
    lWgs = l + (-37.902 + 0.329 * (f - 52) - 14.667 * (l - 5)) / 100000
    return { lat: fWgs, lng: lWgs }
}

// 
// LatLong to RD
// 
function ConvertLatLngtoRD(f, l) {
    x0 = 155000.00
    y0 = 463000.00

    f0 = 52.15616056
    l0 = 5.38763889

    c01 = 190066.98903; d10 = 309020.31810
    c11 = -11830.85831; d02 = 3638.36193
    c21 = -114.19754; d12 = -157.95222
    c03 = -32.38360; d20 = 72.97141
    c31 = -2.34078; d30 = 59.79734
    c13 = -0.60639; d22 = -6.43481
    c23 = 0.15774; d04 = 0.09351
    c41 = -0.04158; d32 = -0.07379
    c05 = -0.00661; d14 = -0.05419
    d40 = -0.03444
    df = (f - f0) * 0.36
    dl = (l - l0) * 0.36

    with (Math) {
        dx = c01 * dl + c11 * df * dl + c21 * pow(df, 2) * dl + c03 * pow(dl, 3);
        dx += c31 * pow(df, 3) * dl + c13 * df * pow(dl, 3) + c23 * pow(df, 2) * pow(dl, 3);
        dx += c41 * pow(df, 4) * dl + c05 * pow(dl, 5);
        x = x0 + dx
        x = round(100 * x) / 100
    }

    with (Math) {
        dy = d10 * df + d20 * pow(df, 2) + d02 * pow(dl, 2) + d12 * df * pow(dl, 2);
        dy += d30 * pow(df, 3) + d22 * pow(df, 2) * pow(dl, 2) + d40 * pow(df, 4);
        dy += d04 * pow(dl, 4) + d32 * pow(df, 3) * pow(dl, 2) + d14 * df * pow(dl, 4);
        y = y0 + dy
        y = round(100 * y) / 100
    }

    return { RDX: x, RDY: y }
}