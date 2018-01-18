<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta name="renderer" content="ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/bootstrap3/css/bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/bootstrap3/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/blog.css">
<script src="${pageContext.request.contextPath}/static/bootstrap3/js/jquery-1.11.2.min.js"></script>
<script src="${pageContext.request.contextPath}/static/bootstrap3/js/bootstrap.min.js"></script>
<title>Santorini </title>
</head>

<!--巨幕图片 -->
<div>
	<img style="max-width:100%;min-width:1024px;" src="${pageContext.request.contextPath}/static/images/santorini.jpg"  alt=""onclick="window.location.href('#a')"/>
</div>

<!-- <body class="background"> -->

<div class="container" >
	<!-- <input  style="position:absolute; left:50%; top:85%; z-index:1;max-width:50px" type="image" src="${pageContext.request.contextPath}/static/images/down.png" onclick="window.location.href('#a')"/> -->

	<jsp:include page="/foreground/common/menu.jsp"/>
	
	<!-- 博客内容 -->
	<div class="row">
	  <div class="col-md-12">
	    <jsp:include page="${mainPage}"/>
	  </div>
	  	<!-- 博主信息 
	  	<div class="data_list">
			<div class="data_list_title">
				<img src="/static/images/user_icon.png"/>博主信息
			</div>
			<div class="user_image">
				<img src="/static/userImages/20160202095456.jpg"/>
			</div>
			<div class="nickName">${blogger.nickName}</div>
			<div class="userSign">${blogger.sign}</div>
		</div>
		-->
		<!-- 按日志类别 
		<div class="data_list">
			<div class="data_list_title">
				<img src="${pageContext.request.contextPath}/static/images/byType_icon.png"/>按日志类别
			</div>
			<div class="datas">
				<ul>	
					<c:forEach var="blogTypeCount" items="${blogTypeCountList}">
						<li><span><a href="${pageContext.request.contextPath}/index.html?typeId=${blogTypeCount.id}">${blogTypeCount.typeName}(${blogTypeCount.blogCount})</a></span></li>	
					</c:forEach>										
				</ul>
			</div>
		</div>
		-->
		<!--  按日志日期 
		<div class="data_list">
			<div class="data_list_title">
				<img src="${pageContext.request.contextPath}/static/images/byDate_icon.png"/>按日志日期
			</div>
			<div class="datas">
				<ul>					
					<c:forEach var="blogCount" items="${blogCountList}">
						<li><span><a href="${pageContext.request.contextPath}/index.html?releaseDateStr=${blogCount.releaseDateStr}">${blogCount.releaseDateStr}(${blogCount.blogCount})</a></span></li>	
					</c:forEach>									
				</ul>
			</div>
		</div>	 
		--> 	
	</div>
</div>
	<jsp:include page="/foreground/common/foot.jsp"/>
	<script src="https://s22.cnzz.com/z_stat.php?id=1267265571&web_id=1267265571" language="JavaScript"></script><!-- </body> -->
</html>