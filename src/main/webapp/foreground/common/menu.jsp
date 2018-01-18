<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- 导航栏 -->


<div >
  <div class="col-md-12">
 	 <nav class="navbar navbar-default navbar-fixed-top">
	    <!-- Brand and toggle get grouped for better mobile display -->
	    <a  style="font-size: 15px;color:#808080;" class="navbar-brand" href="${pageContext.request.contextPath}/index.html">首页</a>
	    <a  style="font-size: 15px;background-color:#EDEDED;color:#808080;" class="navbar-brand" href="${pageContext.request.contextPath}/login.jsp">登录</a>
	    <!-- Collect the nav links, forms, and other content for toggling -->
	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul class="nav navbar-nav">
	        <!-- <li class="active"><a href="#">aaaa <span class="sr-only">(current)</span></a></li> -->
	        <!-- <li><a href="#a">呵呵啊</a></li> --> 
	        <!-- 按日志类别 -->
	        <li class="dropdown">
	        	<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">按日志类别<span class="caret"></span></a>
	            <ul class="dropdown-menu">
			   		<c:forEach var="blogTypeCount" items="${blogTypeCountList}">
						<li class="menu"><span><a href="${pageContext.request.contextPath}/index.html?typeId=${blogTypeCount.id}#a">${blogTypeCount.typeName}(${blogTypeCount.blogCount})</a></span></li>	
					</c:forEach>										
	            </ul>
	        </li>
	        <!-- 按日志日期 -->
	        <li class="dropdown">
	        	<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">按日志日期<span class="caret"></span></a>
	            <ul class="dropdown-menu">
			   		<c:forEach var="blogCount" items="${blogCountList}">
						<li class="menu"><span><a href="${pageContext.request.contextPath}/index.html?releaseDateStr=${blogCount.releaseDateStr}#a">${blogCount.releaseDateStr}(${blogCount.blogCount})</a></span></li>	
					</c:forEach>															
	            </ul>
	        </li>     
		  <!-- 按日
	      </ul>
	      <form class="navbar-form navbar-right">
	        <div class="form-group">
	          <input type="text" class="form-control" placeholder="搜索">
	        </div>
	        <button type="submit" class="btn btn-default">搜索</button>
	      </form>
	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>
  </div>
</div>