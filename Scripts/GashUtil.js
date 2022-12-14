function isEmail(a) { return -1 != a.search(/^\w+((-+)|(-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) ? !0 : !1 }
function isMobileNumber(a) { return -1 != a.search(/^[0-9]*$/) }
function isMobileNumberByTW(a) { return -1 != a.search(/^[0-9]{10}$/) }
function isMobileNumberByHK(a) { return -1 != a.search(/^[0-9]{8}$/) }
function isMobileNumberByCH(a) { return -1 != a.search(/^[0-9]{11}$/) }
function isCouponPin(a) { return -1 != a.search(/^[0-9a-zA-Z]*$/) }