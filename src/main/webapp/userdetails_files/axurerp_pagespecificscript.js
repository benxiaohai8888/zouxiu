
var PageName = '用户详情';
var PageId = '4dc10c06da1349619d56baf1c54bf188'
var PageUrl = 'user_details.jsp'
document.title = '用户详情';
var PageNotes = 
{
"pageName":"用户详情",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '14');
  value = value.replace(/\[\[GenMonth\]\]/g, '9');
  value = value.replace(/\[\[GenMonthName\]\]/g, '九月');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, '星期三');
  value = value.replace(/\[\[GenYear\]\]/g, '2011');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u25 = document.getElementById('u25');

var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{
windowEvent = e;


if (true) {

	self.location.href="建议.html" + GetQuerystring();

}

}

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u31 = document.getElementById('u31');

var u77 = document.getElementById('u77');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u93 = document.getElementById('u93');

var u107 = document.getElementById('u107');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u32 = document.getElementById('u32');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{
windowEvent = e;


if (true) {

	NewWindow("发信息.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u89 = document.getElementById('u89');

var u34 = document.getElementById('u34');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}
gv_vAlignTable['u64'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u79 = document.getElementById('u79');

var u87 = document.getElementById('u87');

var u85 = document.getElementById('u85');

var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{
windowEvent = e;


if (true) {

	self.location.href="咨询.html" + GetQuerystring();

}

}

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u71 = document.getElementById('u71');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u36 = document.getElementById('u36');

var u75 = document.getElementById('u75');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{
windowEvent = e;


if (true) {

	NewWindow("密码重置.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u2 = document.getElementById('u2');

var u97 = document.getElementById('u97');

var u83 = document.getElementById('u83');

var u95 = document.getElementById('u95');

var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{
windowEvent = e;


if (true) {

	self.location.href="站内信管理.html" + GetQuerystring();

}

}

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u68 = document.getElementById('u68');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u73 = document.getElementById('u73');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{
windowEvent = e;


if (true) {

	self.location.href="用户管理.html" + GetQuerystring();

}

}

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u24 = document.getElementById('u24');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u111 = document.getElementById('u111');

var u69 = document.getElementById('u69');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u4 = document.getElementById('u4');

var u103 = document.getElementById('u103');

var u6 = document.getElementById('u6');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u81 = document.getElementById('u81');

var u35 = document.getElementById('u35');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u105 = document.getElementById('u105');

var u109 = document.getElementById('u109');

var u99 = document.getElementById('u99');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{
windowEvent = e;


if (true) {

	NewWindow("编辑.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u63 = document.getElementById('u63');

u63.style.cursor = 'pointer';
if (bIE) u63.attachEvent("onclick", Clicku63);
else u63.addEventListener("click", Clicku63, true);
function Clicku63(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}
gv_vAlignTable['u63'] = 'top';
var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{
windowEvent = e;


if (true) {

	self.location.href="分类管理.html" + GetQuerystring();

}

}

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u101 = document.getElementById('u101');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{
windowEvent = e;


if (true) {

	self.location.href="投诉.html" + GetQuerystring();

}

}

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u29 = document.getElementById('u29');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u91 = document.getElementById('u91');

if (window.OnLoad) OnLoad();
