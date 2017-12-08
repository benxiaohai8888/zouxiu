
var PageName = '用户管理';
var PageId = '5f94f21cb27948c9af59153841dcba81'
var PageUrl = 'user_manager.jsp'
document.title = '用户管理';
var PageNotes = 
{
"pageName":"用户管理",
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

var u115 = document.getElementById('u115');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u156 = document.getElementById('u156');

u156.style.cursor = 'pointer';
if (bIE) u156.attachEvent("onclick", Clicku156);
else u156.addEventListener("click", Clicku156, true);
function Clicku156(e)
{
windowEvent = e;


if (true) {

	NewWindow("edit.jsp" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u156'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u2 = document.getElementById('u2');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u4 = document.getElementById('u4');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u135 = document.getElementById('u135');

var u151 = document.getElementById('u151');

u151.style.cursor = 'pointer';
if (bIE) u151.attachEvent("onclick", Clicku151);
else u151.addEventListener("click", Clicku151, true);
function Clicku151(e)
{
windowEvent = e;


if (true) {

	NewWindow("edit.jsp" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u151'] = 'top';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{
windowEvent = e;


if (true) {

	NewWindow("edit.jsp" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u42'] = 'top';
var u159 = document.getElementById('u159');

u159.style.cursor = 'pointer';
if (bIE) u159.attachEvent("onclick", Clicku159);
else u159.addEventListener("click", Clicku159, true);
function Clicku159(e)
{
windowEvent = e;


if (true) {

	NewWindow("reset_password.jsp" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u159'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u101 = document.getElementById('u101');

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

var u48 = document.getElementById('u48');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u120 = document.getElementById('u120');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u110 = document.getElementById('u110');

var u6 = document.getElementById('u6');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u37 = document.getElementById('u37');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u141 = document.getElementById('u141');

u141.style.cursor = 'pointer';
if (bIE) u141.attachEvent("onclick", Clicku141);
else u141.addEventListener("click", Clicku141, true);
function Clicku141(e)
{
windowEvent = e;


if (true) {

	NewWindow("edit.jsp" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u141'] = 'top';
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

var u75 = document.getElementById('u75');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", Clicku34);
else u34.addEventListener("click", Clicku34, true);
function Clicku34(e)
{
windowEvent = e;


if (true) {

	self.location.href="user_details.jsp" + GetQuerystring();

}

}
gv_vAlignTable['u34'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u103 = document.getElementById('u103');

var u164 = document.getElementById('u164');

u164.style.cursor = 'pointer';
if (bIE) u164.attachEvent("onclick", Clicku164);
else u164.addEventListener("click", Clicku164, true);
function Clicku164(e)
{
windowEvent = e;


if (true) {

	NewWindow("reset_password.jsp" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u164'] = 'top';
var u99 = document.getElementById('u99');

var u66 = document.getElementById('u66');

var u112 = document.getElementById('u112');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u57 = document.getElementById('u57');

var u119 = document.getElementById('u119');

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

var u125 = document.getElementById('u125');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u149 = document.getElementById('u149');

u149.style.cursor = 'pointer';
if (bIE) u149.attachEvent("onclick", Clicku149);
else u149.addEventListener("click", Clicku149, true);
function Clicku149(e)
{
windowEvent = e;


if (true) {

	NewWindow("reset_password.jsp" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u149'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u118 = document.getElementById('u118');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u100 = document.getElementById('u100');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u144 = document.getElementById('u144');

u144.style.cursor = 'pointer';
if (bIE) u144.attachEvent("onclick", Clicku144);
else u144.addEventListener("click", Clicku144, true);
function Clicku144(e)
{
windowEvent = e;


if (true) {

	NewWindow("reset_password.jsp" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u144'] = 'top';
var u166 = document.getElementById('u166');

u166.style.cursor = 'pointer';
if (bIE) u166.attachEvent("onclick", Clicku166);
else u166.addEventListener("click", Clicku166, true);
function Clicku166(e)
{
windowEvent = e;


if (true) {

	self.location.href="user_add.jsp" + GetQuerystring();

}

}
gv_vAlignTable['u166'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u116 = document.getElementById('u116');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u123 = document.getElementById('u123');

var u114 = document.getElementById('u114');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u127 = document.getElementById('u127');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u106 = document.getElementById('u106');

var u154 = document.getElementById('u154');

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{
windowEvent = e;


if (true) {

	NewWindow("reset_password.jsp" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u154'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u139 = document.getElementById('u139');

u139.style.cursor = 'pointer';
if (bIE) u139.attachEvent("onclick", Clicku139);
else u139.addEventListener("click", Clicku139, true);
function Clicku139(e)
{
windowEvent = e;


if (true) {

	NewWindow("reset_password.jsp" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u139'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u104 = document.getElementById('u104');

var u121 = document.getElementById('u121');

u121.style.cursor = 'pointer';
if (bIE) u121.attachEvent("onclick", Clicku121);
else u121.addEventListener("click", Clicku121, true);
function Clicku121(e)
{
windowEvent = e;


if (true) {

	NewWindow("reset_password.jsp" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u109 = document.getElementById('u109');

var u84 = document.getElementById('u84');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u102 = document.getElementById('u102');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u24 = document.getElementById('u24');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u117 = document.getElementById('u117');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u113 = document.getElementById('u113');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u111 = document.getElementById('u111');

var u0 = document.getElementById('u0');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u3 = document.getElementById('u3');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u146 = document.getElementById('u146');

u146.style.cursor = 'pointer';
if (bIE) u146.attachEvent("onclick", Clicku146);
else u146.addEventListener("click", Clicku146, true);
function Clicku146(e)
{
windowEvent = e;


if (true) {

	NewWindow("edit.jsp" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u146'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{
windowEvent = e;


if (true) {

	self.location.href="user_details.jsp" + GetQuerystring();

}

}
gv_vAlignTable['u90'] = 'top';
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

var u161 = document.getElementById('u161');

u161.style.cursor = 'pointer';
if (bIE) u161.attachEvent("onclick", Clicku161);
else u161.addEventListener("click", Clicku161, true);
function Clicku161(e)
{
windowEvent = e;


if (true) {

	NewWindow("edit.jsp" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u161'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
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

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u107 = document.getElementById('u107');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u136 = document.getElementById('u136');

u136.style.cursor = 'pointer';
if (bIE) u136.attachEvent("onclick", Clicku136);
else u136.addEventListener("click", Clicku136, true);
function Clicku136(e)
{
windowEvent = e;


if (true) {

	NewWindow("send_message.jsp" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
if (window.OnLoad) OnLoad();
