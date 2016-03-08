$(document).ready(function() {
    $('#ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {translation: {'Z': {pattern: /[0-9]/, optional: true}}});
});

var XMLHttp;
function loadXMLDoc() {
    if (window.XMLHttpRequest) {
        try {
            XMLHttp = new XMLHttpRequest();
        } catch (e) {
        }
    } else if (window.ActiveXObject) {
        try {
            XMLHttp = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
            try {
                XMLHttp = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {
            }
        }
    }
}
loadXMLDoc();

var domain = location.protocol + '//' + location.hostname;


function change_ats(reg) {
    if (reg == 'Absheron') {
        document.getElementById('ats').innerHTML = "<option value=\"Absheron ATS\">Absheron ATS</option><option value=\"Absheron ATS1\">Absheron ATS1</option>";
    }
    else if (reg == 'Qabala') {
        document.getElementById('ats').innerHTML = "<option value=\"Qabala ATS\">Qabala ATS</option><option value=\"Qabala ATS1\">Qabala ATS1</option>";
    }
    return true;
}

function change_spaces(eq) {
    document.getElementById('spaces_name').innerHTML = eq;
    document.getElementById('spaces').value = eq;
    return true;
}


function query_ip_ad(ip_ad) {
    var id = Math.random();
    var toPost = {
        'a': encodeURIComponent(ip_ad),
        'i': encodeURIComponent(id)
    }
    httpParams = 'data=' + JSON.stringify(toPost);
    XMLHttp.caching = false;
    XMLHttp.open('POST', domain + '/systems/query_ip_ad.php', true);
    XMLHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
    XMLHttp.setRequestHeader('Content-length', httpParams.length);
    XMLHttp.send(httpParams);
    XMLHttp.onreadystatechange = function () {
        if (XMLHttp.readyState == 4) {
            if (XMLHttp.status == 200) {
                var output = XMLHttp.responseText;
                if (output == 0) {
                    el = document.getElementById('row_ip_ad');
                    el.classList.remove("has-error");
                }
                else if (output == 1) {
                    el = document.getElementById('row_ip_ad');
                    el.classList.add("has-error");
                }
                return true;
            }
        }
    }
}


function query_mac(mac) {
    var id = Math.random();
    var toPost = {
        'a': encodeURIComponent(mac),
        'i': encodeURIComponent(id)
    }
    httpParams = 'data=' + JSON.stringify(toPost);
    XMLHttp.caching = false;
    XMLHttp.open('POST', domain + '/systems/query_mac.php', true);
    XMLHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
    XMLHttp.setRequestHeader('Content-length', httpParams.length);
    XMLHttp.send(httpParams);
    XMLHttp.onreadystatechange = function () {
        if (XMLHttp.readyState == 4) {
            if (XMLHttp.status == 200) {
                var output = XMLHttp.responseText;
                if (output == 0) {
                    el = document.getElementById('row_mac');
                    el.classList.remove("has-error");
                }
                else if (output == 1) {
                    el = document.getElementById('row_mac');
                    el.classList.add("has-error");
                }
                return true;
            }
        }
    }
}


function query_serial_e(serial) {
    var id = Math.random();
    var toPost = {
        'a': encodeURIComponent(serial),
        'i': encodeURIComponent(id)
    }
    httpParams = 'data=' + JSON.stringify(toPost);
    XMLHttp.caching = false;
    XMLHttp.open('POST', domain + '/systems/query_serial_e.php', true);
    XMLHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
    XMLHttp.setRequestHeader('Content-length', httpParams.length);
    XMLHttp.send(httpParams);
    XMLHttp.onreadystatechange = function () {
        if (XMLHttp.readyState == 4) {
            if (XMLHttp.status == 200) {
                var output = XMLHttp.responseText;
                if (output == 0) {
                    el = document.getElementById('row_serial_e');
                    el.classList.remove("has-error");
                }
                else if (output == 1) {
                    el = document.getElementById('row_serial_e');
                    el.classList.add("has-error");
                }
                return true;
            }
        }
    }
}

function query_hostname(s_hostname) {
    var id = Math.random();
    var toPost = {
        'a': encodeURIComponent(s_hostname),
        'i': encodeURIComponent(id)
    }
    httpParams = 'data=' + JSON.stringify(toPost);
    XMLHttp.caching = false;
    XMLHttp.open('POST', domain + '/systems/query_hostname.php', true);
    XMLHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
    XMLHttp.setRequestHeader('Content-length', httpParams.length);
    XMLHttp.send(httpParams);
    XMLHttp.onreadystatechange = function () {
        if (XMLHttp.readyState == 4) {
            if (XMLHttp.status == 200) {
                var output = XMLHttp.responseText;
                if (output == 0) {
                    el = document.getElementById('row_hostname');
                    el.classList.remove("has-error");
                }
                else if (output == 1) {
                    el = document.getElementById('row_hostname');
                    el.classList.add("has-error");
                }
                return true;
            }
        }
    }
}

function query_code(ports) {
    var id = Math.random();
    var toPost = {
        'a': encodeURIComponent(ports),
        'i': encodeURIComponent(id)
    }
    httpParams = 'data=' + JSON.stringify(toPost);
    XMLHttp.caching = false;
    XMLHttp.open('POST', domain + '/systems/query_code.php', true);
    XMLHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
    XMLHttp.setRequestHeader('Content-length', httpParams.length);
    XMLHttp.send(httpParams);
    XMLHttp.onreadystatechange = function () {
        if (XMLHttp.readyState == 4) {
            if (XMLHttp.status == 200) {
                var output = XMLHttp.responseText;
                if (output == 0) {
                    el = document.getElementById('row_code');
                    el.classList.remove("has-error");
                }
                else if (output == 1) {
                    el = document.getElementById('row_code');
                    el.classList.add("has-error");
                }
                return true;
            }
        }
    }
}

function query_record(a, b, c, d, e, f, g, h, k, l, m) {
    var id = Math.random();
    var toPost = {
        'a': encodeURIComponent(a),
        'b': encodeURIComponent(b),
        'c': encodeURIComponent(c),
        'd': encodeURIComponent(d),
        'e': encodeURIComponent(e),
        'f': encodeURIComponent(f),
        'g': encodeURIComponent(g),
        'h': encodeURIComponent(h),
        'k': encodeURIComponent(k),
        'l': encodeURIComponent(l),
        'm': encodeURIComponent(m),
        'i': encodeURIComponent(id)
    }
    httpParams = 'data=' + JSON.stringify(toPost);
    XMLHttp.caching = false;
    XMLHttp.open('POST', domain + '/systems/query_record.php', true);
    XMLHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
    XMLHttp.setRequestHeader('Content-length', httpParams.length);
    XMLHttp.send(httpParams);
    XMLHttp.onreadystatechange = function () {
        if (XMLHttp.readyState == 4) {
            if (XMLHttp.status == 410) {
                document.getElementById('myform').reset();
                alert(XMLHttp.responseText);
                return true;
            }
            if (XMLHttp.status == 200) {
                alert(XMLHttp.responseText);
                return true;
            }
        }
    }
}