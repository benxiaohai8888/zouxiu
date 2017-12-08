<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!--页面3秒后跳转  -->
<%
	response.setHeader("refresh", "3;url=findAllUsers");
%>
<script type="text/javascript">
	window.setInterval(function() {
		var mytime = document.getElementById("mytime");
		if (parseInt(mytime.innerHTML) > 0) {
			mytime.innerHTML = mytime.innerHTML - 1;
		}
	}, 1000);
</script>
<b>${msg }</b>
<span id="mytime">3</span>
秒后跳到主页
